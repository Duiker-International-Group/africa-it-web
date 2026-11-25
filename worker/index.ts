// Cloudflare Worker: serves the SPA's static assets and handles the contact form.
// Only /api/* reaches this code (runWorkerFirst); everything else is served from assets.

interface ContactBody {
  name?: unknown
  email?: unknown
  phone?: unknown
  message?: unknown
  website?: unknown // honeypot
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })

const str = (v: unknown, max: number) =>
  typeof v === 'string' ? v.trim().slice(0, max) : ''

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405)

  const origin = request.headers.get('Origin')
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return json({ error: 'Forbidden' }, 403)
  }

  let body: ContactBody
  try {
    body = await request.json()
  } catch {
    return json({ error: 'Invalid JSON' }, 400)
  }

  // Bots fill the hidden field: pretend success, store nothing.
  if (str(body.website, 200)) return json({ ok: true })

  const name = str(body.name, 200)
  const email = str(body.email, 320)
  const phone = str(body.phone, 50)
  const message = str(body.message, 5000)

  if (!name || !message || !EMAIL_RE.test(email)) {
    return json({ error: 'Name, a valid email and a message are required.' }, 422)
  }

  await env.DB.prepare(
    'INSERT INTO contact_messages (name, email, phone, message, ip, country, user_agent) VALUES (?, ?, ?, ?, ?, ?, ?)',
  )
    .bind(
      name,
      email,
      phone || null,
      message,
      request.headers.get('CF-Connecting-IP'),
      request.headers.get('CF-IPCountry'),
      str(request.headers.get('User-Agent'), 300) || null,
    )
    .run()

  return json({ ok: true }, 201)
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/api/contact') {
      try {
        return await handleContact(request, env)
      } catch (err) {
        console.error('contact form error', err)
        return json({ error: 'Server error' }, 500)
      }
    }
    // Only /api/* is routed here; static assets are served before the Worker runs.
    return json({ error: 'Not found' }, 404)
  },
} satisfies ExportedHandler<Env>
