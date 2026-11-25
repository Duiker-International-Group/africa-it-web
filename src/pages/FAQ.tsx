import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { useCopy, useLang, useSeo, useTo } from '../i18n'
import { COMPANY } from '../content/company'
import Button from '../components/ui/Button'
import PageIntro from '../components/ui/PageIntro'
import Reveal from '../components/ui/Reveal'
import starlinkImg from '../assets/starlink-yuh.webp'

type QA = { q: string; a: string }
type Group = { id: string; title: string; items: QA[] }

const hoursText = (lang: 'pt' | 'en', joiner: string) =>
  COMPANY.hours[lang].map(([d, h]) => `${d}: ${h}`).join(joiner)

const copy = {
  pt: {
    seo: {
      title: 'Perguntas frequentes sobre Starlink e TI',
      description:
        'Respostas sobre Starlink em Moçambique: instalação, Standard e Mini, roaming, cortes de energia, pagamento, e sobre os nossos serviços de TI em Maputo.',
    },
    title: 'Perguntas frequentes',
    intro:
      'Respostas curtas sobre Starlink e serviços de TI. Se a sua dúvida não estiver aqui, fale connosco.',
    imageAlt: 'Antena Starlink instalada',
    groups: [
      {
        id: 'starlink',
        title: 'Starlink',
        items: [
          {
            q: 'A Africa IT Solutions é Revendedor Autorizado Starlink?',
            a: 'Sim. Somos Revendedor Autorizado Starlink e vendemos kits, instalação, montagem e suporte em Moçambique.',
          },
          {
            q: 'O que é a Starlink?',
            a: 'A Starlink fornece internet de alta velocidade e baixa latência através de uma constelação de satélites. É especialmente útil onde a fibra e o ADSL não chegam, como zonas rurais, machambas, lodges e obras.',
          },
          {
            q: 'Porque comprar a Starlink à Africa IT Solutions?',
            a: 'Porque entregamos a solução completa: kit, montagem, configuração e suporte, com uma equipa local em Maputo. Para pedidos sobre Starlink, escreva para ' +
              COMPANY.emailStarlink +
              '.',
          },
          {
            q: 'Fazem instalação fora de Maputo?',
            a: 'Sim, trabalhamos em todo o país. Instalações fora de Maputo e Matola são combinadas caso a caso, consoante o local e a deslocação da equipa. Diga-nos onde está e confirmamos a disponibilidade.',
          },
          {
            q: 'Quanto tempo demora a instalação?',
            a: 'Depende do local e do tipo de montagem. Um kit com vista limpa para o céu fica normalmente pronto no próprio dia; telhados, mastros ou cablagem mais longa podem levar mais tempo. Confirmamos o prazo ao marcar a instalação.',
          },
          {
            q: 'Qual a diferença entre a Starlink Standard e a Mini?',
            a: 'A Standard é a antena para uso fixo em casa, escritório, lodge ou machamba, com maior cobertura de Wi-Fi. A Mini é mais pequena e leve, pensada para transportar e para uso em viagem ou em veículos e barcos. Ajudamos a escolher consoante o seu uso.',
          },
          {
            q: 'Posso usar a Starlink quando viajo ou em roaming?',
            a: 'Sim, com o plano e a antena adequados. A Mini é a mais prática para viajar. As condições de roaming e de utilização fora do país são definidas pela Starlink e mudam com o tempo, por isso confirmamos consigo o que está disponível antes de comprar.',
          },
          {
            q: 'O que acontece durante os cortes de energia?',
            a: 'A Starlink precisa de eletricidade para funcionar, por isso sem energia fica sem internet. Para manter a ligação durante cortes, recomendamos uma UPS ou um sistema solar com bateria. Podemos dimensionar a solução para o seu local.',
          },
          {
            q: 'Posso levar o equipamento logo após o pagamento?',
            a: 'Sim. Pode levar o kit logo após o pagamento e a nossa equipa ajuda a pô-lo a funcionar o mais depressa possível.',
          },
          {
            q: 'Como funcionam o pagamento e a subscrição?',
            a: 'Os planos e as mensalidades são definidos pela Starlink e podem mudar. Nós vendemos o kit, ao preço praticado pela Starlink, e ajudamos a ativar a conta e a escolher o plano. Pode pagar o kit em dinheiro ou com mobile money, sem cartão de crédito ou débito. Confirmamos o preço atual do kit e as opções de plano ao pedir um orçamento.',
          },
        ],
      },
      {
        id: 'ti',
        title: 'Serviços de TI',
        items: [
          {
            q: 'Que serviços de TI prestam?',
            a: 'Para além da Starlink, fazemos redes e infraestrutura (desenho, cablagem, Wi-Fi, firewalls e segurança), desenvolvimento de software (web, móvel e sistemas de gestão), venda e suporte de hardware, e formação em TI para equipas.',
          },
          {
            q: 'Desenvolvem software à medida?',
            a: 'Sim. Desenvolvemos aplicações web e móveis, software empresarial, APIs e integração de sistemas, ajustados ao modo de trabalho da sua empresa.',
          },
          {
            q: 'Conseguem integrar sistemas novos com os que já temos?',
            a: 'Sim, a integração de sistemas é uma das nossas áreas fortes. Ligamos aplicações novas aos sistemas existentes sem parar a sua operação.',
          },
          {
            q: 'Que hardware vendem e reparam?',
            a: 'Computadores, servidores, periféricos e equipamento de rede, além dos kits Starlink. Tratamos da aquisição, instalação, configuração, manutenção e reparação.',
          },
          {
            q: 'Oferecem formação em TI para equipas?',
            a: 'Sim. Organizamos cursos para equipas, ajustados às funções e aos objetivos de cada uma, incluindo preparação para certificações, presencialmente ou à distância.',
          },
          {
            q: 'Trabalham com empresas de todas as dimensões?',
            a: 'Sim, desde pequenos negócios e famílias a lodges, ONG e grandes organizações. Ajustamos a solução às necessidades e ao orçamento de cada cliente.',
          },
        ],
      },
      {
        id: 'apoio',
        title: 'Contacto e apoio',
        items: [
          {
            q: 'Como peço um orçamento?',
            a: 'Use o formulário do site, escreva para ' +
              COMPANY.emailSales +
              ' (ou ' +
              COMPANY.emailStarlink +
              ' para Starlink), envie uma mensagem por WhatsApp ou ligue para ' +
              COMPANY.phoneDisplay +
              '. Percebemos o que precisa e respondemos com uma proposta.',
          },
          {
            q: 'Qual é o horário de atendimento?',
            a: hoursText('pt', '. ') + '. Para assuntos urgentes, contacte-nos e fazemos o possível por ajudar.',
          },
          {
            q: 'Onde ficam as vossas instalações?',
            a: 'Estamos em Maputo: ' + COMPANY.address.pt + '. Atendemos clientes em todo o país.',
          },
          {
            q: 'Há quanto tempo existem?',
            a: 'Temos mais de 2 anos de atividade, mais de 50 projetos concluídos e uma equipa com mais de 18 profissionais.',
          },
        ],
      },
    ] as Group[],
    closing: {
      title: 'Não encontrou a resposta?',
      text: 'Diga-nos o que precisa. Respondemos pelo canal que preferir.',
      cta: 'Fale connosco',
      whatsapp: 'Escrever no WhatsApp',
    },
  },
  en: {
    seo: {
      title: 'Starlink and IT services FAQ',
      description:
        'Answers about Starlink in Mozambique: installation, Standard vs Mini, roaming, power cuts, payment, plus our IT services in Maputo.',
    },
    title: 'Frequently asked questions',
    intro:
      'Short answers about Starlink and our IT services. If your question is not here, get in touch.',
    imageAlt: 'An installed Starlink dish',
    groups: [
      {
        id: 'starlink',
        title: 'Starlink',
        items: [
          {
            q: 'Is Africa IT Solutions an Authorised Starlink Retailer?',
            a: 'Yes. We are an Authorised Starlink Retailer and offer kits, installation, mounting and support across Mozambique.',
          },
          {
            q: 'What is Starlink?',
            a: 'Starlink delivers high-speed, low-latency internet through a satellite constellation. It is especially useful where fibre and ADSL do not reach, such as rural areas, farms, lodges and building sites.',
          },
          {
            q: 'Why buy Starlink from Africa IT Solutions?',
            a: 'Because we deliver the whole solution: kit, mounting, setup and support, with a local team in Maputo. For Starlink enquiries, write to ' +
              COMPANY.emailStarlink +
              '.',
          },
          {
            q: 'Do you install outside Maputo?',
            a: 'Yes, we work across the country. Installations outside Maputo and Matola are arranged case by case, depending on the site and the team’s travel. Tell us where you are and we will confirm availability.',
          },
          {
            q: 'How long does installation take?',
            a: 'It depends on the site and the type of mounting. A kit with a clear view of the sky is usually ready the same day; roofs, masts or longer cable runs can take more time. We confirm the timing when we book the installation.',
          },
          {
            q: 'What is the difference between Starlink Standard and Mini?',
            a: 'Standard is the dish for fixed use at a home, office, lodge or farm, with wider Wi-Fi coverage. Mini is smaller and lighter, made to be carried and used when travelling or on vehicles and boats. We help you choose based on how you will use it.',
          },
          {
            q: 'Can I use Starlink while travelling or roaming?',
            a: 'Yes, with the right plan and dish. Mini is the most practical for travel. Roaming terms and use outside the country are set by Starlink and change over time, so we confirm what is available with you before you buy.',
          },
          {
            q: 'What happens during power cuts?',
            a: 'Starlink needs electricity to run, so without power you have no internet. To stay online during cuts, we recommend a UPS or a solar system with a battery. We can size the setup for your site.',
          },
          {
            q: 'Can I take the kit as soon as I pay?',
            a: 'Yes. You can collect the kit right after payment, and our team helps you get it running as quickly as possible.',
          },
          {
            q: 'How do payment and the subscription work?',
            a: 'Plans and monthly fees are set by Starlink and can change. We sell the kit at the price Starlink sets, and help you activate the account and choose a plan. You can pay for the kit in cash or by mobile money, no credit or debit card needed. We confirm the current kit price and plan options when you ask for a quote.',
          },
        ],
      },
      {
        id: 'it',
        title: 'IT services',
        items: [
          {
            q: 'What IT services do you provide?',
            a: 'Besides Starlink, we do networking and infrastructure (design, cabling, Wi-Fi, firewalls and security), software development (web, mobile and business systems), hardware sales and support, and IT training for teams.',
          },
          {
            q: 'Do you build custom software?',
            a: 'Yes. We build web and mobile apps, business software, APIs and system integrations, shaped around how your company works.',
          },
          {
            q: 'Can you connect new systems to the ones we already have?',
            a: 'Yes, system integration is one of our strengths. We link new applications to existing systems without stopping your operation.',
          },
          {
            q: 'What hardware do you sell and repair?',
            a: 'Computers, servers, peripherals and network equipment, as well as Starlink kits. We handle procurement, installation, configuration, maintenance and repairs.',
          },
          {
            q: 'Do you offer IT training for teams?',
            a: 'Yes. We run courses for teams, tailored to each role and goal, including certification prep, on site or remotely.',
          },
          {
            q: 'Do you work with businesses of all sizes?',
            a: 'Yes, from small businesses and households to lodges, NGOs and large organisations. We fit the solution to each client’s needs and budget.',
          },
        ],
      },
      {
        id: 'support',
        title: 'Contact and support',
        items: [
          {
            q: 'How do I get a quote?',
            a: 'Use the contact form on the site, write to ' +
              COMPANY.emailSales +
              ' (or ' +
              COMPANY.emailStarlink +
              ' for Starlink), message us on WhatsApp or call ' +
              COMPANY.phoneDisplay +
              '. We learn what you need and reply with a proposal.',
          },
          {
            q: 'What are your opening hours?',
            a: hoursText('en', '. ') + '. For urgent matters, contact us and we will do our best to help.',
          },
          {
            q: 'Where are you located?',
            a: 'We are in Maputo: ' + COMPANY.address.en + '. We serve clients across the country.',
          },
          {
            q: 'How long have you been in business?',
            a: 'We have over 2 years of activity, 50+ projects completed and a team of 18+ professionals.',
          },
        ],
      },
    ] as Group[],
    closing: {
      title: 'Did not find your answer?',
      text: 'Tell us what you need. We reply on whichever channel suits you.',
      cta: 'Get in touch',
      whatsapp: 'Message on WhatsApp',
    },
  },
}

function Item({ qa }: { qa: QA }) {
  const [open, setOpen] = useState(false)
  const uid = useId()
  const btnId = `${uid}-btn`
  const panelId = `${uid}-panel`
  return (
    <div>
      <h3 className="m-0">
        <button
          type="button"
          id={btnId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className="group flex min-h-14 w-full items-start justify-between gap-6 py-5 text-left"
        >
          <span className="t-h3 text-lg text-ink transition-colors group-hover:text-jacaranda">{qa.q}</span>
          <Plus
            aria-hidden
            className={`mt-1 h-5 w-5 shrink-0 text-jacaranda transition-transform duration-300 ease-out ${
              open ? 'rotate-45' : ''
            }`}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="measure pb-6 pr-10">{qa.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const t = useCopy(copy)
  const lang = useLang()
  const to = useTo()
  useSeo({ pt: copy.pt.seo, en: copy.en.seo })

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang === 'pt' ? 'pt-MZ' : 'en',
    mainEntity: t.groups.flatMap((g) =>
      g.items.map((i) => ({
        '@type': 'Question',
        name: i.q,
        acceptedAnswer: { '@type': 'Answer', text: i.a },
      })),
    ),
  }).replace(/</g, '\\u003c')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <PageIntro
        title={t.title}
        intro={t.intro}
        aside={
          <div className="aspect-[4/3] overflow-hidden rounded-media">
            <img
              src={starlinkImg}
              alt={t.imageAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        }
      />

      <section className="bg-paper py-20 sm:py-28 lg:py-32">
        <div className="container-site space-y-16 lg:space-y-24">
          {t.groups.map((g, idx) => (
            <div key={g.id} className="grid gap-6 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                {idx === 0 ? (
                  <Reveal>
                    <h2 className="t-h2 lg:sticky lg:top-28">{g.title}</h2>
                  </Reveal>
                ) : (
                  <h2 className="t-h2 lg:sticky lg:top-28">{g.title}</h2>
                )}
              </div>
              <div className="divide-y divide-mist/60 border-y border-mist/60 lg:col-span-8">
                {g.items.map((qa) => (
                  <Item key={qa.q} qa={qa} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="on-ink py-20 sm:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="t-h2">{t.closing.title}</h2>
            <p className="measure mt-4">{t.closing.text}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <Button to={to('contact')}>{t.closing.cta}</Button>
            <Button href={COMPANY.whatsappHref} variant="onInk">
              {t.closing.whatsapp}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
