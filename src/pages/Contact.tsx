import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import PageIntro from '../components/ui/PageIntro'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import ContactForm from '../components/ContactForm'
import { useCopy, useLang, useSeo } from '../i18n'
import { COMPANY } from '../content/company'

const copy = {
  pt: {
    seoTitle: 'Contacto',
    seoDescription:
      'Fale com a Africa IT Solutions em Maputo: WhatsApp, telefone, email ou formulário. Pedidos de Starlink e orçamentos de TI com resposta no mesmo dia útil.',
    title: 'Fale connosco',
    intro:
      'A forma mais rápida é o WhatsApp ou o telefone. Se preferir escrever, use o formulário: respondemos no mesmo dia útil.',
    whatsappCta: 'Falar no WhatsApp',
    phoneCta: 'Ligar',
    formTitle: 'Envie-nos uma mensagem',
    formBody: 'Conte-nos o que precisa e onde está. A nossa equipa responde no mesmo dia útil.',
    detailsTitle: 'Contactos',
    phone: 'Telefone',
    whatsapp: 'WhatsApp',
    whatsappValue: 'Enviar mensagem',
    sales: 'Vendas e orçamentos',
    starlink: 'Starlink',
    address: 'Morada',
    hours: 'Horário',
    mapTitle: 'Visite a nossa loja em Maputo',
    mapCta: 'Abrir no Google Maps',
    starlinkTitle: 'Vai pedir Starlink?',
    starlinkBody:
      'Diga-nos em que localidade e província vai instalar, se é para casa ou empresa, e se o uso é fixo ou em movimento (carro, barco, acampamento). Com isto confirmamos o kit adequado, o preço atual e as opções de plano sem trocas de mensagens a mais.',
  },
  en: {
    seoTitle: 'Contact',
    seoDescription:
      'Contact Africa IT Solutions in Maputo by WhatsApp, phone, email or form. Starlink requests and IT quotes, with a reply the same working day.',
    title: 'Get in touch',
    intro:
      'The fastest way is WhatsApp or a phone call. If you prefer to write, use the form and we will reply the same working day.',
    whatsappCta: 'Chat on WhatsApp',
    phoneCta: 'Call us',
    formTitle: 'Send us a message',
    formBody: 'Tell us what you need and where you are. Our team replies the same working day.',
    detailsTitle: 'Contact details',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    whatsappValue: 'Send a message',
    sales: 'Sales and quotes',
    starlink: 'Starlink',
    address: 'Address',
    hours: 'Opening hours',
    mapTitle: 'Visit our shop in Maputo',
    mapCta: 'Open in Google Maps',
    starlinkTitle: 'Asking about Starlink?',
    starlinkBody:
      'Tell us the town and province where it will be installed, whether it is for a home or a business, and whether use is fixed or on the move (vehicle, boat, camp). With that we can confirm the right kit, the current price and the plan options without extra back and forth.',
  },
}

const row = 'flex gap-4 py-5 first:pt-0 last:pb-0'
const labelCls = 'text-sm font-semibold text-ink'
const valueCls = 'mt-1 block text-slate transition-colors hover:text-jacaranda'
const iconCls = 'mt-0.5 h-5 w-5 shrink-0 text-jacaranda'

export default function Contact() {
  const t = useCopy(copy)
  const lang = useLang()
  useSeo({
    pt: { title: copy.pt.seoTitle, description: copy.pt.seoDescription },
    en: { title: copy.en.seoTitle, description: copy.en.seoDescription },
  })

  return (
    <>
      <PageIntro title={t.title} intro={t.intro}>
        <Button href={COMPANY.whatsappHref}>{t.whatsappCta}</Button>
        <Button href={COMPANY.phoneHref} variant="onInk">
          {t.phoneCta} {COMPANY.phoneDisplay}
        </Button>
      </PageIntro>

      <section className="bg-paper py-20 sm:py-28 lg:py-32">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-y-0">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <Reveal>
              <h2 className="t-h2">{t.formTitle}</h2>
              <p className="measure mt-3">{t.formBody}</p>
            </Reveal>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-4 lg:col-start-9">
            <h2 className="t-h3">{t.detailsTitle}</h2>
            <dl className="mt-6 divide-y divide-mist/60 border-y border-mist/60">
              <div className={row}>
                <Phone className={iconCls} aria-hidden />
                <div>
                  <dt className={labelCls}>{t.phone}</dt>
                  <dd>
                    <a href={COMPANY.phoneHref} className={valueCls}>{COMPANY.phoneDisplay}</a>
                  </dd>
                </div>
              </div>
              <div className={row}>
                <MessageCircle className={iconCls} aria-hidden />
                <div>
                  <dt className={labelCls}>{t.whatsapp}</dt>
                  <dd>
                    <a href={COMPANY.whatsappHref} target="_blank" rel="noopener noreferrer" className={valueCls}>
                      {t.whatsappValue}
                    </a>
                  </dd>
                </div>
              </div>
              <div className={row}>
                <Mail className={iconCls} aria-hidden />
                <div className="min-w-0">
                  <dt className={labelCls}>{t.sales}</dt>
                  <dd>
                    <a href={`mailto:${COMPANY.emailSales}`} className={`${valueCls} break-words`}>{COMPANY.emailSales}</a>
                  </dd>
                </div>
              </div>
              <div className={row}>
                <Mail className={iconCls} aria-hidden />
                <div className="min-w-0">
                  <dt className={labelCls}>{t.starlink}</dt>
                  <dd>
                    <a href={`mailto:${COMPANY.emailStarlink}`} className={`${valueCls} break-words`}>{COMPANY.emailStarlink}</a>
                  </dd>
                </div>
              </div>
              <div className={row}>
                <MapPin className={iconCls} aria-hidden />
                <div>
                  <dt className={labelCls}>{t.address}</dt>
                  <dd>
                    <a href={COMPANY.mapsHref} target="_blank" rel="noopener noreferrer" className={valueCls}>
                      {COMPANY.address[lang]}
                    </a>
                  </dd>
                </div>
              </div>
              <div className={row}>
                <Clock className={iconCls} aria-hidden />
                <div className="min-w-0 flex-1">
                  <dt className={labelCls}>{t.hours}</dt>
                  <dd className="mt-1">
                    <ul className="space-y-1">
                      {COMPANY.hours[lang].map(([days, time]) => (
                        <li key={days} className="flex justify-between gap-4">
                          <span>{days}</span>
                          <span className="text-ink">{time}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="on-ink rounded-media p-8 sm:p-12">
              <h2 className="t-h2 max-w-[20ch]">{t.mapTitle}</h2>
              <p className="measure mt-4 flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-jacaranda-light" aria-hidden />
                <span>{COMPANY.address[lang]}</span>
              </p>
              <div className="mt-8">
                <Button href={COMPANY.mapsHref} variant="onInk">{t.mapCta}</Button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:self-center">
            <h2 className="t-h3">{t.starlinkTitle}</h2>
            <p className="mt-3">{t.starlinkBody}</p>
          </div>
        </div>
      </section>
    </>
  )
}
