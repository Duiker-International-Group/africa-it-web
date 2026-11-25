import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Check } from 'lucide-react'
import Button from './ui/Button'
import { useCopy } from '../i18n'
import { COMPANY } from '../content/company'

const copy = {
  pt: {
    name: 'Nome',
    email: 'Email',
    phone: 'Telefone',
    optional: 'opcional',
    topic: 'Assunto',
    topics: ['Starlink', 'Redes e infraestrutura', 'Desenvolvimento de software', 'Equipamento e suporte', 'Formação', 'Outro'],
    message: 'Mensagem',
    messageHint: 'Diga-nos onde está e o que precisa. Para Starlink, indique se é para casa, empresa ou uso em movimento.',
    send: 'Enviar mensagem',
    sending: 'A enviar…',
    sentTitle: 'Mensagem enviada',
    sentBody: 'Recebemos o seu pedido. A nossa equipa responde normalmente no mesmo dia útil.',
    another: 'Enviar outra mensagem',
    error: `Não foi possível enviar. Tente novamente, ou escreva para ${COMPANY.emailSales} ou ligue ${COMPANY.phoneDisplay}.`,
  },
  en: {
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    optional: 'optional',
    topic: 'Topic',
    topics: ['Starlink', 'Networking and infrastructure', 'Software development', 'Hardware and support', 'Training', 'Something else'],
    message: 'Message',
    messageHint: 'Tell us where you are and what you need. For Starlink, say whether it is for a home, a business or use on the move.',
    send: 'Send message',
    sending: 'Sending…',
    sentTitle: 'Message sent',
    sentBody: 'We have your request. Our team usually replies the same working day.',
    another: 'Send another message',
    error: `The message could not be sent. Try again, or email ${COMPANY.emailSales} or call ${COMPANY.phoneDisplay}.`,
  },
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

/**
 * The site's contact form. Posts to the Worker at /api/contact, which stores
 * the message in D1 and emails sales@. Use as-is on any page.
 */
export default function ContactForm({ defaultTopic }: { defaultTopic?: number }) {
  const t = useCopy(copy)
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('sending')
    const topic = String(data.get('topic') ?? '')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          message: topic ? `[${topic}] ${data.get('message')}` : data.get('message'),
          website: data.get('website'),
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const field =
    'mt-2 block w-full rounded-control border-0 bg-white px-4 py-3 text-ink ring-1 ring-inset ring-mist ' +
    'placeholder:text-slate/60 transition-shadow focus:outline-none focus:ring-2 focus:ring-jacaranda'
  const label = 'block text-sm font-semibold text-ink'

  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'sent' ? (
          <motion.div
            key="sent"
            role="status"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-media bg-white p-8 ring-1 ring-fog sm:p-10"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-signal/12 text-signal">
              <Check className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="t-h3 mt-5">{t.sentTitle}</h3>
            <p className="mt-2 measure">{t.sentBody}</p>
            <button type="button" onClick={() => setStatus('idle')} className="link mt-6 text-sm font-semibold">
              {t.another}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-5 sm:grid-cols-2"
            noValidate={false}
          >
            <label className={label}>
              {t.name}
              <input name="name" required autoComplete="name" maxLength={200} className={field} />
            </label>
            <label className={label}>
              {t.email}
              <input name="email" type="email" required autoComplete="email" maxLength={320} className={field} />
            </label>
            <label className={label}>
              {t.phone} <span className="font-normal text-slate">({t.optional})</span>
              <input name="phone" type="tel" autoComplete="tel" maxLength={50} placeholder="+258" className={field} />
            </label>
            <label className={label}>
              {t.topic}
              <select name="topic" defaultValue={t.topics[defaultTopic ?? 0]} className={`${field} appearance-none`}>
                {t.topics.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label className={`${label} sm:col-span-2`}>
              {t.message}
              <textarea name="message" required rows={5} maxLength={5000} aria-describedby="msg-hint" className={`${field} resize-y`} />
              <span id="msg-hint" className="mt-2 block text-sm font-normal text-slate">
                {t.messageHint}
              </span>
            </label>
            {/* Honeypot: hidden from people; bots fill it in and are silently dropped */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            {status === 'error' && (
              <p role="alert" className="sm:col-span-2 rounded-control bg-alert/8 px-4 py-3 text-sm text-alert">
                {t.error}
              </p>
            )}
            <div className="sm:col-span-2">
              <Button type="submit" disabled={status === 'sending'} className="w-full sm:w-auto">
                {status === 'sending' ? t.sending : t.send}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
