import { bindings, defineConfig } from 'cf/config'

export default defineConfig({
  worker: {
    name: 'africait-web',
    compatibilityDate: '2026-11-01',
    entrypoint: './worker/index.ts',
    assets: {
      notFoundHandling: 'single-page-application',
      runWorkerFirst: ['/api/*'],
    },
    domains: ['africait.co.mz', 'www.africait.co.mz'],
    env: {
      EMAIL: bindings.sendEmail({ allowedSenderAddresses: ['website@africait.co.mz'] }),
      DB: bindings.d1({ name: 'africait-contact', id: 'b0e1de90-388a-44cc-8a13-bff2fad691c8' }),
    },
  },
})
