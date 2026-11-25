import PageIntro from '../components/ui/PageIntro'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { COMPANY } from '../content/company'
import { useCopy, useLang, useSeo, useTo } from '../i18n'
import networkSecurityImg from '../assets/network-security.webp'

const copy = {
  pt: {
    seo: {
      title: 'Sobre a Africa IT Solutions',
      description:
        'Empresa de TI sediada em Maputo e revendedora autorizada Starlink. Conheça a equipa, a forma como trabalhamos e onde nos encontrar.',
    },
    title: 'Sobre nós',
    intro:
      'A Africa IT Solutions é uma empresa de tecnologia sediada em Maputo e revendedora autorizada Starlink. Instalamos internet por satélite e tratamos de redes, software, equipamento e formação para empresas e famílias em todo o país.',
    imageAlt: 'Equipamento de rede e segurança instalado num bastidor',
    story: {
      statement:
        'Queremos que as empresas moçambicanas trabalhem melhor com a tecnologia certa, bem instalada e com apoio de quem conhece o terreno.',
      p1: 'A nossa equipa reúne competência técnica e experiência prática. Ouvimos o problema, recomendamos a solução que faz sentido e montamo-la até funcionar.',
      p2: 'Conhecemos a realidade local e seguimos boas práticas internacionais. Assim, o que entregamos serve hoje e continua a servir amanhã.',
    },
    facts: {
      items: [
        { value: '2+', label: 'anos de atividade' },
        { value: '50+', label: 'projetos concluídos' },
        { value: '18+', label: 'pessoas na equipa' },
      ],
    },
    values: {
      title: 'Como trabalhamos',
      items: [
        {
          title: 'Primeiro ouvimos',
          text: 'Antes de propor seja o que for, percebemos o que o seu negócio ou a sua casa precisam.',
        },
        {
          title: 'Recomendamos o que serve',
          text: 'Indicamos a solução adequada ao seu caso, não a mais cara nem a mais complicada.',
        },
        {
          title: 'Instalamos e deixamos a funcionar',
          text: 'O trabalho só termina quando a ligação, a rede ou o sistema estão a funcionar como combinado.',
        },
        {
          title: 'Ficamos ao seu lado',
          text: 'Depois da entrega, continuamos disponíveis para suporte e manutenção, pelo telefone ou no local.',
        },
      ],
    },
    where: {
      title: 'Onde trabalhamos',
      text: 'A nossa loja fica em Maputo. A partir daqui, atendemos clientes em todo o território moçambicano.',
      addressLabel: 'Morada',
      hoursLabel: 'Horário',
      mapLink: 'Ver no mapa',
    },
    cta: {
      title: 'Vamos falar do seu projeto',
      text: 'Conte-nos o que precisa e respondemos com uma proposta clara. Para Starlink, confirmamos o preço atual do kit e as opções de plano.',
      primary: 'Pedir orçamento',
      whatsapp: 'Falar no WhatsApp',
    },
  },
  en: {
    seo: {
      title: 'About Africa IT Solutions',
      description:
        'A Maputo-based IT company and Authorised Starlink Retailer. Meet the team, see how we work and find out where to visit us.',
    },
    title: 'About us',
    intro:
      'Africa IT Solutions is a technology company based in Maputo and an Authorised Starlink Retailer. We install satellite internet and handle networks, software, hardware and training for businesses and households across Mozambique.',
    imageAlt: 'Network and security equipment installed in a rack',
    story: {
      statement:
        'We want Mozambican businesses to work better with the right technology, properly installed and backed by people who know the ground.',
      p1: 'Our team combines technical skill with hands-on experience. We listen to the problem, recommend the solution that makes sense and set it up until it works.',
      p2: 'We understand local conditions and follow international best practice. What we deliver serves you today and keeps serving you tomorrow.',
    },
    facts: {
      items: [
        { value: '2+', label: 'years in operation' },
        { value: '50+', label: 'projects completed' },
        { value: '18+', label: 'people on the team' },
      ],
    },
    values: {
      title: 'How we work',
      items: [
        {
          title: 'We listen first',
          text: 'Before proposing anything, we find out what your business or home actually needs.',
        },
        {
          title: 'We recommend what fits',
          text: 'We suggest the solution that suits your case, not the dearest or the most complicated.',
        },
        {
          title: 'We install it and make it work',
          text: 'The job is only done when the connection, network or system works as agreed.',
        },
        {
          title: 'We stay available',
          text: 'After handover we remain on hand for support and maintenance, by phone or on site.',
        },
      ],
    },
    where: {
      title: 'Where we work',
      text: 'Our shop is in Maputo. From here we serve clients across Mozambique.',
      addressLabel: 'Address',
      hoursLabel: 'Opening hours',
      mapLink: 'View on map',
    },
    cta: {
      title: 'Let us talk about your project',
      text: 'Tell us what you need and we will reply with a clear proposal. For Starlink, we confirm the current kit price and plan options.',
      primary: 'Request a quote',
      whatsapp: 'Chat on WhatsApp',
    },
  },
}

export default function About() {
  const t = useCopy(copy)
  const lang = useLang()
  const to = useTo()
  useSeo({ pt: copy.pt.seo, en: copy.en.seo })

  return (
    <>
      <PageIntro
        title={t.title}
        intro={t.intro}
        aside={
          <div className="aspect-[4/3] overflow-hidden rounded-media">
            <img
              src={networkSecurityImg}
              alt={t.imageAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        }
      />

      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="t-h2 max-w-[28ch] text-ink">{t.story.statement}</p>
            </Reveal>
            <div className="space-y-5 lg:col-span-5">
              <p className="measure">{t.story.p1}</p>
              <p className="measure">{t.story.p2}</p>
            </div>
          </div>

          <dl className="mt-16 grid gap-x-8 gap-y-8 sm:mt-20 sm:grid-cols-3">
            {t.facts.items.map((item) => (
              <div key={item.label} className="flex flex-col-reverse border-t border-mist/60 pt-5">
                <dt className="mt-1 text-slate">{item.label}</dt>
                <dd className="font-display text-3xl font-semibold text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-20 sm:py-28 lg:py-32">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="t-h2 lg:col-span-4">{t.values.title}</h2>
          <dl className="grid gap-x-12 sm:grid-cols-2 lg:col-span-8">
            {t.values.items.map((item) => (
              <div key={item.title} className="border-t border-mist/60 py-6">
                <dt className="t-h3 text-ink">{item.title}</dt>
                <dd className="mt-2">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="t-h2">{t.where.title}</h2>
            <p className="measure mt-5">{t.where.text}</p>
          </div>
          <div className="space-y-10 lg:col-span-6 lg:col-start-7">
            <dl>
              <div className="border-t border-mist/60 py-5">
                <dt className="font-display font-semibold text-ink">{t.where.addressLabel}</dt>
                <dd className="mt-1">
                  <address className="not-italic">{COMPANY.address[lang]}</address>
                  <a
                    href={COMPANY.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link mt-2 inline-block"
                  >
                    {t.where.mapLink}
                  </a>
                </dd>
              </div>
            </dl>
            <div>
              <h3 className="t-h3">{t.where.hoursLabel}</h3>
              <dl className="mt-3">
                {COMPANY.hours[lang].map(([day, time]) => (
                  <div
                    key={day}
                    className="flex justify-between gap-6 border-t border-mist/60 py-3"
                  >
                    <dt>{day}</dt>
                    <dd className="font-medium text-ink">{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="on-ink py-20 sm:py-28 lg:py-32">
        <div className="container-site grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="t-h2">{t.cta.title}</h2>
            <p className="t-lede measure mt-4">{t.cta.text}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <Button to={to('contact')}>{t.cta.primary}</Button>
            <Button href={COMPANY.whatsappHref} variant="onInk">
              {t.cta.whatsapp}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
