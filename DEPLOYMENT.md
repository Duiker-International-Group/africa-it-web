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

## CI/CD

`.github/workflows/deploy.yml` runs on GitHub Actions:

- Every push and pull request: type-check, lint and a build dry run.
- Push to `main`: applies D1 migrations, then deploys to Cloudflare Workers.

Needs two repository secrets: `CLOUDFLARE_API_TOKEN` (Workers Scripts, D1,
Workers Routes/Custom Domains edit) and `CLOUDFLARE_ACCOUNT_ID`.

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

## Email

- Mailboxes are hosted on **Zoho Mail** (US region): MX `mx/mx2/mx3.zoho.com`,
  SPF `include:zoho.com`, DKIM selector `zmail`, DMARC `p=none`.
- Each form submission is also emailed to `sales@africait.co.mz` from
  `website@africait.co.mz` via Cloudflare Email Sending (`env.EMAIL`), with
  Reply-To set to the visitor. Its bounce/DKIM records live under `cf-bounce.`
  and do not touch the Zoho records.
- On the Workers free plan, Cloudflare only sends to **verified** destination
  addresses. To notify another inbox, add it with
  `npx cf email-routing addresses create --email <address>`, click the
  verification link, and change `NOTIFY_TO` in `worker/index.ts`.
- If an email fails, the message is still saved in D1; check
  `npx wrangler tail africait-web` for `contact notification email failed`.
