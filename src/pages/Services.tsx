import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { useCopy, useSeo, useTo } from '../i18n'
import { COMPANY } from '../content/company'
import Button from '../components/ui/Button'
import PageIntro from '../components/ui/PageIntro'
import Reveal from '../components/ui/Reveal'
import starlinkVanImg from '../assets/starlink-yuh.webp'
import starlinkLandscapeImg from '../assets/spacex_gives_discounted_starlink_roam_a_spin_in_canada_edited_1761742300.webp'
import networkingImg from '../assets/Networking-IT-Infrastructure.webp'
import appDevImg from '../assets/app-development.webp'
import itInfraImg from '../assets/it-infrastructure.webp'
import trainingImg from '../assets/training-programs.webp'

type Block = { title: string; text: string }
type Simple = { title: string; text: string; items: string[]; alt: string; link: string }

const copy = {
  pt: {
    seo: {
      title: 'Serviços: Starlink, redes, software e formação',
      description:
        'Revendedor autorizado Starlink em Maputo. Instalamos kits Standard e Mini e prestamos serviços de redes, software, equipamento informático e formação.',
    },
    intro: {
      title: 'Starlink primeiro. Depois, tudo o que a sua TI precisa.',
      text: 'Somos revendedor autorizado Starlink em Maputo e atuamos em todo o país. Vendemos e instalamos kits Starlink e tratamos também de redes, software, equipamento e formação para a sua equipa.',
      quote: 'Pedir orçamento',
      whatsapp: 'Falar no WhatsApp',
    },
    navLabel: 'Secções desta página',
    nav: [
      { id: 'starlink', label: 'Starlink' },
      { id: 'redes', label: 'Redes' },
      { id: 'software', label: 'Software' },
      { id: 'equipamento', label: 'Equipamento' },
      { id: 'formacao', label: 'Formação' },
    ],
    starlink: {
      title: 'Starlink instalado por quem conhece o terreno',
      text: 'Onde não chega fibra nem cabo, o Starlink liga a sua casa, lodge, machamba ou escritório à internet. Tratamos de tudo, do kit à ativação, e ficamos por perto depois.',
      provideTitle: 'O que fornecemos',
      provide: [
        {
          title: 'Kit Standard',
          text: 'Para casas, escritórios, lodges e quintas com ponto fixo. Antena, router e cabos incluídos.',
        },
        {
          title: 'Kit Mini',
          text: 'Compacto e portátil, pensado para viaturas, barcos, acampamentos e trabalho em movimento.',
        },
        {
          title: 'Instalação e fixação profissional',
          text: 'Escolhemos o ponto com céu limpo e fixamos a antena em telhado, parede ou poste, bem firme contra vento e chuva.',
        },
        {
          title: 'Cablagem',
          text: 'Passagem e acabamento dos cabos, com o comprimento e a proteção certos para o local.',
        },
        {
          title: 'Extensão de Wi-Fi',
          text: 'Cobertura para todo o espaço: vários pisos, anexos, receção e áreas exteriores.',
        },
        {
          title: 'Ajuda na ativação',
          text: 'Ajudamos a criar a conta, escolher o plano e ligar o kit, sem confusões.',
        },
        {
          title: 'Apoio pós-venda',
          text: 'Se algo falhar ou quiser mudar de plano, fale connosco. Resolvemos em Maputo, no local ou à distância.',
        },
      ] as Block[],
      priceNote:
        'O preço do kit e os planos disponíveis mudam com o tempo. Confirmamos os valores atuais quando pedir orçamento.',
      altVan: 'Antena Starlink montada junto a uma autocaravana, num bosque',
      altLandscape: 'Antena Starlink instalada numa paisagem aberta e seca',
      forTitle: 'Para quem é',
      forText: 'Qualquer lugar onde a ligação atual não chega ou não aguenta.',
      forList: [
        { title: 'Lodges e turismo', text: 'Wi-Fi fiável para hóspedes e para a gestão, longe da cidade.' },
        { title: 'Machambas e agroindústria', text: 'Ligação no campo para operações, contabilidade e monitorização.' },
        { title: 'ONG, projetos e obras', text: 'Escritórios de campo e equipas em províncias sem boa cobertura.' },
        { title: 'Minas e acampamentos', text: 'Ligação estável em locais remotos, com o kit Standard ou Mini.' },
        { title: 'Barcos e viaturas', text: 'Com o kit Mini, internet em movimento.' },
        { title: 'Casas e pequenos escritórios', text: 'Em Maputo, Matola e nas restantes províncias, como alternativa ou reforço da ligação atual.' },
      ] as Block[],
      processTitle: 'Como funciona, passo a passo',
      process: [
        { title: 'Fale connosco e visita ao local', text: 'Diga-nos onde quer a internet. Analisamos o local, o céu livre e a melhor posição para a antena.' },
        { title: 'Escolha do kit e do plano', text: 'Recomendamos o kit Standard ou Mini e as opções de plano. Confirmamos os valores atuais.' },
        { title: 'Instalação', text: 'Montamos e fixamos a antena, passamos os cabos e instalamos o Wi-Fi.' },
        { title: 'Ativação e entrega', text: 'Ativamos o serviço, testamos a ligação consigo presente e mostramos como usar.' },
        { title: 'Apoio contínuo', text: 'Ficamos disponíveis para dúvidas, ajustes e assistência sempre que precisar.' },
      ] as Block[],
      cta: 'Pedir Starlink',
    },
    sections: {
      redes: {
        title: 'Redes e infraestrutura',
        text: 'Desenhamos, instalamos e mantemos a rede que sustenta o seu escritório, loja ou fábrica, para que o trabalho não pare.',
        items: [
          'Desenho e planeamento de redes',
          'Cablagem estruturada e instalação de switches e routers',
          'Wi-Fi profissional com boa cobertura em todo o espaço',
          'Firewalls e segurança de rede',
          'Monitorização e apoio técnico',
        ],
        alt: 'Equipamento de rede e cablagem numa sala técnica',
        link: 'Pedir proposta de rede',
      },
      software: {
        title: 'Desenvolvimento de software',
        text: 'Criamos software à medida do seu negócio: do site à aplicação móvel e aos sistemas internos, ligados ao que já usa.',
        items: [
          'Sites e aplicações web',
          'Aplicações móveis',
          'Sistemas de gestão para empresas',
          'APIs e ligação entre sistemas',
          'Integração com sistemas já existentes',
        ],
        alt: 'Programador a trabalhar numa aplicação',
        link: 'Falar sobre o seu projeto',
      },
      equipamento: {
        title: 'Equipamento e assistência técnica',
        text: 'Fornecemos computadores, servidores e periféricos de fornecedores de confiança, e cuidamos deles depois da compra.',
        items: [
          'Computadores, servidores e periféricos',
          'Instalação e configuração',
          'Manutenção preventiva',
          'Reparações rápidas',
          'Apoio técnico para a sua equipa',
        ],
        alt: 'Servidores e equipamento informático numa sala de infraestrutura',
        link: 'Pedir orçamento de equipamento',
      },
      formacao: {
        title: 'Formação em informática para equipas',
        text: 'Equipas que dominam as ferramentas trabalham melhor. Preparamos cursos para o seu pessoal, na sua empresa ou à distância.',
        items: [
          'Programas de formação à medida de cada função',
          'Preparação para certificações',
          'Formação presencial no local ou remota',
          'Apoio e materiais depois do curso',
        ],
        alt: 'Formador a dar uma aula de informática a uma equipa',
        link: 'Falar sobre formação',
      },
    },
    cta: {
      title: 'Diga-nos o que precisa. Respondemos com um plano claro.',
      text: 'Starlink, rede, software, equipamento ou formação: fale connosco por WhatsApp, telefone ou formulário e recebe uma proposta sem compromisso.',
      quote: 'Pedir orçamento',
      call: 'Ligar agora',
    },
  },
  en: {
    seo: {
      title: 'Services: Starlink, networking, software, training',
      description:
        'Authorised Starlink Retailer in Maputo. We install Standard and Mini kits and provide networking, software, IT hardware and training across Mozambique.',
    },
    intro: {
      title: 'Starlink first. Then everything else your IT needs.',
      text: 'We are an Authorised Starlink Retailer in Maputo, working across Mozambique. We sell and install Starlink kits, and also handle networking, software, hardware and training for your team.',
      quote: 'Request a quote',
      whatsapp: 'Chat on WhatsApp',
    },
    navLabel: 'Sections on this page',
    nav: [
      { id: 'starlink', label: 'Starlink' },
      { id: 'redes', label: 'Networking' },
      { id: 'software', label: 'Software' },
      { id: 'equipamento', label: 'Hardware' },
      { id: 'formacao', label: 'Training' },
    ],
    starlink: {
      title: 'Starlink installed by people who know the ground',
      text: 'Where fibre and cable do not reach, Starlink connects your home, lodge, farm or office. We handle everything from kit to activation, and stay close afterwards.',
      provideTitle: 'What we provide',
      provide: [
        {
          title: 'Standard kit',
          text: 'For homes, offices, lodges and farms with a fixed location. Dish, router and cables included.',
        },
        {
          title: 'Mini kit',
          text: 'Compact and portable, made for vehicles, boats, camps and work on the move.',
        },
        {
          title: 'Professional installation and mounting',
          text: 'We pick a spot with a clear sky and mount the dish on a roof, wall or pole, secure against wind and rain.',
        },
        {
          title: 'Cabling',
          text: 'Cable runs and finishing, with the right length and protection for the site.',
        },
        {
          title: 'Wi-Fi extension',
          text: 'Coverage across the whole space: several floors, outbuildings, reception and outdoor areas.',
        },
        {
          title: 'Activation help',
          text: 'We help you create the account, pick the plan and bring the kit online, without the hassle.',
        },
        {
          title: 'After-sales support',
          text: 'If something fails or you want to change plan, talk to us. We solve it in Maputo, on site or remotely.',
        },
      ] as Block[],
      priceNote:
        'Kit prices and available plans change over time. We confirm the current figures when you request a quote.',
      altVan: 'Starlink dish set up next to a camper van in a forest',
      altLandscape: 'Starlink dish installed in an open, dry landscape',
      forTitle: 'Who it is for',
      forText: 'Anywhere your current connection does not reach or cannot cope.',
      forList: [
        { title: 'Lodges and tourism', text: 'Reliable Wi-Fi for guests and management, far from the city.' },
        { title: 'Farms and agribusiness', text: 'Connectivity in the field for operations, accounts and monitoring.' },
        { title: 'NGOs, projects and building sites', text: 'Field offices and teams in provinces with weak coverage.' },
        { title: 'Mines and camps', text: 'Stable connectivity in remote places, with the Standard or Mini kit.' },
        { title: 'Boats and vehicles', text: 'With the Mini kit, internet on the move.' },
        { title: 'Homes and small offices', text: 'In Maputo, Matola and the other provinces, as an alternative to or backup for your current line.' },
      ] as Block[],
      processTitle: 'How it works, step by step',
      process: [
        { title: 'Talk to us and a site check', text: 'Tell us where you want internet. We look at the site, the open sky and the best position for the dish.' },
        { title: 'Choose your kit and plan', text: 'We recommend the Standard or Mini kit and the plan options. We confirm current prices.' },
        { title: 'Installation', text: 'We mount and secure the dish, run the cables and set up the Wi-Fi.' },
        { title: 'Activation and handover', text: 'We activate the service, test the connection with you present and show you how to use it.' },
        { title: 'Ongoing support', text: 'We stay available for questions, adjustments and help whenever you need it.' },
      ] as Block[],
      cta: 'Request Starlink',
    },
    sections: {
      redes: {
        title: 'Networking and infrastructure',
        text: 'We design, install and maintain the network behind your office, shop or factory, so work does not stop.',
        items: [
          'Network design and planning',
          'Structured cabling and switch and router installation',
          'Professional Wi-Fi with good coverage throughout',
          'Firewalls and network security',
          'Monitoring and technical support',
        ],
        alt: 'Network equipment and cabling in a technical room',
        link: 'Request a network proposal',
      },
      software: {
        title: 'Software development',
        text: 'We build software around your business: from websites to mobile apps and internal systems, connected to what you already use.',
        items: [
          'Websites and web applications',
          'Mobile apps',
          'Business management systems',
          'APIs and system-to-system links',
          'Integration with existing systems',
        ],
        alt: 'Developer working on an application',
        link: 'Talk about your project',
      },
      equipamento: {
        title: 'Hardware and technical support',
        text: 'We supply computers, servers and peripherals from trusted vendors, and look after them after the sale.',
        items: [
          'Computers, servers and peripherals',
          'Installation and configuration',
          'Preventive maintenance',
          'Fast repairs',
          'Technical support for your team',
        ],
        alt: 'Servers and computer equipment in an infrastructure room',
        link: 'Request a hardware quote',
      },
      formacao: {
        title: 'IT training for teams',
        text: 'Teams that know their tools work better. We prepare courses for your staff, at your company or remotely.',
        items: [
          'Training programmes tailored to each role',
          'Certification preparation',
          'On-site or remote sessions',
          'Support and materials after the course',
        ],
        alt: 'Trainer giving an IT class to a team',
        link: 'Talk about training',
      },
    },
    cta: {
      title: 'Tell us what you need. We reply with a clear plan.',
      text: 'Starlink, networking, software, hardware or training: reach us by WhatsApp, phone or the form and get a no-obligation proposal.',
      quote: 'Request a quote',
      call: 'Call now',
    },
  },
}

const SECTION_IDS = ['starlink', 'redes', 'software', 'equipamento', 'formacao'] as const

function SectionNav({ label, items }: { label: string; items: { id: string; label: string }[] }) {
  const [active, setActive] = useState<string>(SECTION_IDS[0])

  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label={label}
      className="sticky top-20 z-30 border-b border-mist/60 bg-white/95 backdrop-blur-none"
    >
      <div className="container-site">
        <ul className="-mx-5 flex overflow-x-auto px-5 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative flex min-h-12 items-center px-4 text-sm font-semibold transition-colors first:pl-0 sm:first:pl-0 ${
                    isActive ? 'text-ink' : 'text-slate hover:text-ink'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="services-nav-indicator"
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-jacaranda"
                      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

function ServiceSection({
  id,
  data,
  image,
  flip,
  tone,
  contactTo,
}: {
  id: string
  data: Simple
  image: string
  flip: boolean
  tone: 'paper' | 'white'
  contactTo: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-36 py-20 sm:py-28 lg:py-32 ${tone === 'paper' ? 'bg-paper' : 'bg-white'}`}
    >
      <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className={flip ? 'lg:col-span-6 lg:col-start-1 lg:row-start-1' : 'lg:col-span-6 lg:col-start-7'}>
          <div className="aspect-[4/3] overflow-hidden rounded-media">
            <img src={image} alt={data.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
          </div>
        </Reveal>
        <div className={flip ? 'lg:col-span-5 lg:col-start-8 lg:row-start-1' : 'lg:col-span-5 lg:col-start-1 lg:row-start-1'}>
          <h2 id={`${id}-title`} className="t-h2">{data.title}</h2>
          <p className="measure mt-4">{data.text}</p>
          <ul className="mt-8 divide-y divide-mist/60 border-y border-mist/60">
            {data.items.map((item) => (
              <li key={item} className="flex items-start gap-3 py-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-jacaranda" aria-hidden="true" />
                <span className="text-ink">{item}</span>
              </li>
            ))}
          </ul>
          <Link to={contactTo} className="link mt-6 inline-flex min-h-11 items-center font-semibold">
            {data.link}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  const t = useCopy(copy)
  const to = useTo()
  const { hash } = useLocation()
  useSeo({ pt: copy.pt.seo, en: copy.en.seo })

  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) el.scrollIntoView()
  }, [hash])

  const s = t.starlink
  const sec = t.sections

  return (
    <>
      <PageIntro title={t.intro.title} intro={t.intro.text}>
        <Button to={to('contact')}>{t.intro.quote}</Button>
        <Button href={COMPANY.whatsappHref} variant="onInk">{t.intro.whatsapp}</Button>
      </PageIntro>

      <SectionNav label={t.navLabel} items={t.nav} />

      {/* Starlink: the richest section */}
      <section id="starlink" aria-labelledby="starlink-title" className="scroll-mt-36 bg-paper py-20 sm:py-28 lg:py-32">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <h2 id="starlink-title" className="t-h2">{s.title}</h2>
            <p className="mt-4 text-lg">{s.text}</p>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h3 className="t-h3">{s.provideTitle}</h3>
              <dl className="mt-6 divide-y divide-mist/60 border-y border-mist/60">
                {s.provide.map((p) => (
                  <div key={p.title} className="grid gap-1 py-5 sm:grid-cols-12 sm:gap-6">
                    <dt className="font-display text-lg font-semibold text-ink sm:col-span-5">{p.title}</dt>
                    <dd className="sm:col-span-7">{p.text}</dd>
                  </div>
                ))}
              </dl>
              <p className="measure mt-6 text-sm">{s.priceNote}</p>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden rounded-media">
                <img src={starlinkVanImg} alt={s.altVan} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-20 grid items-start gap-12 lg:mt-28 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] overflow-hidden rounded-media">
                <img src={starlinkLandscapeImg} alt={s.altLandscape} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <h3 className="t-h3">{s.forTitle}</h3>
              <p className="measure mt-3">{s.forText}</p>
              <ul className="mt-6 divide-y divide-mist/60 border-y border-mist/60">
                {s.forList.map((f) => (
                  <li key={f.title} className="py-4">
                    <p className="font-semibold text-ink">{f.title}</p>
                    <p className="mt-1 text-sm">{f.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 lg:mt-28">
            <h3 className="t-h3">{s.processTitle}</h3>
            <ol className="mt-8 grid gap-0 divide-y divide-mist/60 border-y border-mist/60 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
              {s.process.map((step, i) => (
                <li key={step.title} className="flex gap-4 py-6 lg:block lg:px-6 lg:first:pl-0 lg:last:pr-0">
                  <span className="font-display text-3xl font-semibold leading-none text-jacaranda lg:block" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div className="lg:mt-4">
                    <p className="font-display text-lg font-semibold text-ink">{step.title}</p>
                    <p className="mt-2 text-sm">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <Button to={to('contact')}>{s.cta}</Button>
            </div>
          </div>
        </div>
      </section>

      <ServiceSection id="redes" data={sec.redes} image={networkingImg} flip={false} tone="white" contactTo={to('contact')} />
      <ServiceSection id="software" data={sec.software} image={appDevImg} flip tone="paper" contactTo={to('contact')} />
      <ServiceSection id="equipamento" data={sec.equipamento} image={itInfraImg} flip={false} tone="white" contactTo={to('contact')} />
      <ServiceSection id="formacao" data={sec.formacao} image={trainingImg} flip tone="paper" contactTo={to('contact')} />

      <section className="on-ink py-20 sm:py-28 lg:py-32">
        <div className="container-site">
          <div className="max-w-2xl">
            <h2 className="t-h2">{t.cta.title}</h2>
            <p className="t-lede mt-4">{t.cta.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to={to('contact')}>{t.cta.quote}</Button>
              <Button href={COMPANY.phoneHref} variant="onInk">{t.cta.call} {COMPANY.phoneDisplay}</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
