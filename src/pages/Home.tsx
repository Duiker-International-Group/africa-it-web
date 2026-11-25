import { Link } from 'react-router-dom'
import HomeHero from '../components/HomeHero'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { useCopy, useSeo, useTo } from '../i18n'
import { COMPANY } from '../content/company'
import starlinkImg from '../assets/IMG_1585-2.avif'

const copy = {
  pt: {
    seo: {
      title: 'Starlink e serviços de TI em Maputo | Africa IT Solutions',
      description:
        'Revendedor autorizado Starlink em Maputo. Kit, instalação e suporte, mais redes, software, equipamento informático e formação para empresas em Moçambique.',
    },
    starlink: {
      title: 'Starlink para onde a fibra não chega',
      body: 'Fornecemos o kit original, instalamos no local e ficamos disponíveis para suporte. Confirmamos consigo o preço atual do kit e as opções de plano antes de avançar.',
      who: [
        ['Casas', 'Internet estável para a família, o teletrabalho e as aulas.'],
        ['Escritórios', 'Uma ligação de reserva quando a rede principal falha.'],
        ['Lodges', 'Wi-Fi para os hóspedes, mesmo longe de tudo.'],
        ['Machambas e quintas', 'Cobertura em campo aberto, sem depender de torres.'],
        ['ONG', 'Ligação rápida para equipas em projetos no terreno.'],
        ['Minas e obras', 'Internet em locais remotos e temporários.'],
        ['Viaturas e embarcações', 'Starlink Mini, leve e fácil de levar consigo.'],
      ],
      primary: 'Pedir Starlink',
      secondary: 'Ver como funciona',
      imgAlt: 'Técnico a instalar uma antena Starlink no telhado de um edifício',
    },
    more: {
      title: 'E o resto da tecnologia da sua empresa',
      intro: 'A mesma equipa trata da rede, do software, do equipamento e da formação.',
      more: 'Saber mais',
      items: [
        {
          id: 'redes',
          name: 'Redes e infraestrutura',
          text: 'Desenho, cablagem, Wi-Fi, firewalls e segurança de rede para escritórios e armazéns.',
          aria: 'Saber mais sobre redes e infraestrutura',
        },
        {
          id: 'software',
          name: 'Desenvolvimento de software',
          text: 'Sites, aplicações móveis e sistemas de gestão feitos à medida do seu negócio.',
          aria: 'Saber mais sobre desenvolvimento de software',
        },
        {
          id: 'equipamento',
          name: 'Equipamento e suporte',
          text: 'Computadores, servidores e periféricos, com manutenção e assistência técnica.',
          aria: 'Saber mais sobre equipamento e suporte',
        },
        {
          id: 'formacao',
          name: 'Formação em TI',
          text: 'Cursos para equipas e preparação para certificações.',
          aria: 'Saber mais sobre formação em TI',
        },
      ],
    },
    why: {
      title: 'Uma equipa em Maputo que fica depois da instalação',
      body: 'Quando a internet falha às oito da manhã, é útil falar com alguém que está na mesma cidade e fala a sua língua.',
      facts: 'Mais de 50 projetos concluídos por uma equipa de mais de 18 pessoas, em mais de 2 anos de atividade.',
      reasons: [
        ['Equipa local', 'Estamos em Maputo e atendemos em português.'],
        ['Equipamento autorizado', 'Revendedor autorizado Starlink, com equipamento original e garantia.'],
        ['Instalamos e acompanhamos', 'Não entregamos uma caixa e desaparecemos. Voltamos quando é preciso.'],
        ['Um só parceiro', 'Internet, rede e equipamento tratados por quem já conhece o seu local.'],
      ],
    },
    cta: {
      title: 'Diga-nos onde está e o que precisa',
      body: 'Respondemos normalmente no mesmo dia útil, com uma proposta clara.',
      whatsapp: 'Falar no WhatsApp',
      phone: 'Ligar',
      phoneLabel: 'Ligar para',
      form: 'Prefere escrever? Use o formulário de contacto.',
    },
  },
  en: {
    seo: {
      title: 'Starlink and IT services in Maputo | Africa IT Solutions',
      description:
        'Authorised Starlink retailer in Maputo. Kit, installation and support, plus networking, software, hardware and IT training for businesses across Mozambique.',
    },
    starlink: {
      title: 'Starlink for places the fibre does not reach',
      body: 'We supply the genuine kit, install it on site and stay on call for support. We confirm the current kit price and plan options with you before you commit.',
      who: [
        ['Homes', 'Steady internet for the family, remote work and school.'],
        ['Offices', 'A backup connection for when the main line goes down.'],
        ['Lodges', 'Guest Wi-Fi, even far from everything.'],
        ['Farms and machambas', 'Coverage in open country, no towers needed.'],
        ['NGOs', 'Fast connections for teams on field projects.'],
        ['Mines and building sites', 'Internet in remote and temporary locations.'],
        ['Vehicles and boats', 'Starlink Mini, light and easy to take along.'],
      ],
      primary: 'Get Starlink',
      secondary: 'See how it works',
      imgAlt: 'Technician setting up a Starlink dish on a building roof',
    },
    more: {
      title: 'And the rest of your business technology',
      intro: 'The same team looks after your network, software, hardware and training.',
      more: 'Learn more',
      items: [
        {
          id: 'redes',
          name: 'Networking and infrastructure',
          text: 'Design, cabling, Wi-Fi, firewalls and network security for offices and warehouses.',
          aria: 'Learn more about networking and infrastructure',
        },
        {
          id: 'software',
          name: 'Software development',
          text: 'Websites, mobile apps and business systems built around how you work.',
          aria: 'Learn more about software development',
        },
        {
          id: 'equipamento',
          name: 'Hardware and support',
          text: 'Computers, servers and peripherals, with maintenance and technical support.',
          aria: 'Learn more about hardware and support',
        },
        {
          id: 'formacao',
          name: 'IT training',
          text: 'Courses for your staff and preparation for certifications.',
          aria: 'Learn more about IT training',
        },
      ],
    },
    why: {
      title: 'A team in Maputo that stays after the install',
      body: 'When the internet drops at eight in the morning, it helps to talk to someone in the same city who speaks your language.',
      facts: 'More than 50 projects delivered by a team of more than 18 people, over more than 2 years of work.',
      reasons: [
        ['A local team', 'We are based in Maputo and answer in Portuguese.'],
        ['Authorised equipment', 'Authorised Starlink retailer, with genuine equipment and warranty.'],
        ['We install and we stay', 'We do not hand over a box and disappear. We come back when needed.'],
        ['One partner', 'Internet, network and devices handled by people who already know your site.'],
      ],
    },
    cta: {
      title: 'Tell us where you are and what you need',
      body: 'We usually reply the same working day, with a clear proposal.',
      whatsapp: 'Chat on WhatsApp',
      phone: 'Call',
      phoneLabel: 'Call',
      form: 'Prefer to write? Use the contact form.',
    },
  },
}

export default function Home() {
  const t = useCopy(copy)
  const to = useTo()
  useSeo({ pt: copy.pt.seo, en: copy.en.seo })

  return (
    <>
      <HomeHero />

      {/* Starlink */}
      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-media bg-fog">
              <img
                src={starlinkImg}
                alt={t.starlink.imgAlt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-start-7 lg:col-span-6">
            <h2 className="t-h1 text-ink">{t.starlink.title}</h2>
            <p className="t-lede measure mt-5">{t.starlink.body}</p>

            <dl className="mt-10 grid border-t border-mist/60 sm:grid-cols-2 sm:gap-x-10">
              {t.starlink.who.map(([name, detail]) => (
                <div key={name} className="border-b border-mist/60 py-4">
                  <dt className="font-display text-lg font-semibold text-ink">{name}</dt>
                  <dd className="mt-1 text-sm">{detail}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button to={to('contact')}>{t.starlink.primary}</Button>
              <Button to={to('services', 'starlink')} variant="secondary">
                {t.starlink.secondary}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What else we do */}
      <section className="bg-paper py-20 sm:py-28 lg:py-32">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <h2 className="t-h1 text-ink">{t.more.title}</h2>
            <p className="t-lede measure mt-5">{t.more.intro}</p>
          </Reveal>

          <ul className="mt-12 divide-y divide-mist/60 border-y border-mist/60 lg:mt-16">
            {t.more.items.map((item) => (
              <li
                key={item.id}
                className="group relative grid gap-3 py-8 lg:grid-cols-12 lg:gap-10 lg:py-10"
              >
                <h3 className="t-h3 text-ink transition-colors duration-200 group-hover:text-jacaranda lg:col-span-5">
                  <span className="bg-linear-to-r from-jacaranda to-jacaranda bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-300 ease-out group-hover:bg-[length:100%_1px]">
                    {item.name}
                  </span>
                </h3>
                <div className="lg:col-start-7 lg:col-span-6">
                  <p className="measure">{item.text}</p>
                  <Link
                    to={to('services', item.id)}
                    aria-label={item.aria}
                    className="link mt-3 inline-block after:absolute after:inset-0 after:content-['']"
                  >
                    {t.more.more}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why us */}
      <section className="on-ink py-20 sm:py-28 lg:py-32">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 className="t-h1">{t.why.title}</h2>
            <p className="t-lede measure mt-5">{t.why.body}</p>
            <p className="measure mt-8 text-sm">{t.why.facts}</p>
          </Reveal>

          <dl className="divide-y divide-white/15 border-y border-white/15 lg:col-start-7 lg:col-span-6">
            {t.why.reasons.map(([name, detail]) => (
              <div key={name} className="py-6">
                <dt className="t-h3 text-white">{name}</dt>
                <dd className="mt-2 measure">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="bg-paper py-20 sm:py-28 lg:py-32">
        <div className="container-site">
          <div className="max-w-2xl">
            <h2 className="t-h1 text-ink">{t.cta.title}</h2>
            <p className="t-lede measure mt-5">{t.cta.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={COMPANY.whatsappHref}>{t.cta.whatsapp}</Button>
              <Button href={COMPANY.phoneHref} variant="secondary">
                {t.cta.phone} {COMPANY.phoneDisplay}
              </Button>
            </div>
            <p className="mt-6 text-sm">
              <Link to={to('contact')} className="link">
                {t.cta.form}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
