# Deployment — Cloudflare Workers

The site runs as one Cloudflare Worker (`africait-web`) with static assets, on
`africait.co.mz` and `www.africait.co.mz`. Config lives in `cloudflare.config.ts`
and is deployed with the `cf` CLI (no Wrangler config).

## How it works

- Static files (the Vite build) are served directly by Cloudflare's asset layer —
  these requests are free and don't invoke the Worker.
- Unknown paths fall back to `index.html` (`notFoundHandling: single-page-application`),
  and React Router shows its 404 page.
- Only `/api/*` runs Worker code (`runWorkerFirst`). `/api/contact` validates the
  form, drops bot submissions (honeypot field), and stores messages in the
  D1 database `africait-contact` (table `contact_messages`).

## Requirements

- Node.js 22.18+ (Node 25 works; 22.20 hit a module-loader bug with the Vite plugin)
- `npx cf auth login` once per machine

## Commands

```bash
npm run dev          # local dev (Worker + local D1)
npm run deploy       # type-check, build and deploy
npm run db:migrate   # apply migrations/ to the production D1 database
```

## Reading contact form messages

```bash
npx cf d1 query b0e1de90-388a-44cc-8a13-bff2fad691c8 --sql "SELECT created_at, name, email, phone, message FROM contact_messages ORDER BY id DESC LIMIT 50"
```

Email notification is not wired up yet: the zone has no MX records, so
`sales@` / `starlink@africait.co.mz` cannot receive mail today.
