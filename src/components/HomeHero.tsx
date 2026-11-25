import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import Button from './ui/Button'
import { useCopy, useTo } from '../i18n'
import { COMPANY } from '../content/company'
import dishImg from '../assets/Starlink-Mobile-Regional-roaming-subcription-fees-in-Kenya-1.webp'

const copy = {
  pt: {
    badge: 'Revendedor Autorizado Starlink',
    lines: ['Internet rápida', 'em qualquer ponto', 'de Moçambique.'],
    lede: 'Fornecemos o kit Starlink, instalamos e damos suporte a partir de Maputo. E tratamos da rede, do equipamento e do software da sua empresa.',
    primary: 'Pedir Starlink',
    secondary: 'Ver todos os serviços',
    facts: [
      ['Revendedor autorizado', 'Equipamento original com garantia'],
      ['Instalação incluída', 'Casa, empresa, lodge ou machamba'],
      ['Suporte em Maputo', 'Equipa local, em português'],
    ],
    imgAlt: 'Antena Starlink montada no terreno ao entardecer',
  },
  en: {
    badge: 'Authorised Starlink Retailer',
    lines: ['Fast internet', 'anywhere in', 'Mozambique.'],
    lede: 'We supply the Starlink kit, install it and support it from Maputo. And we look after your business network, hardware and software.',
    primary: 'Get Starlink',
    secondary: 'See all services',
    facts: [
      ['Authorised retailer', 'Genuine equipment with warranty'],
      ['Installation included', 'Homes, offices, lodges and farms'],
      ['Support in Maputo', 'A local team you can call'],
    ],
    imgAlt: 'Starlink dish set up on open ground at dusk',
  },
}

/**
 * Homepage opening. The signature moment of the site: a satellite traces its
 * orbit across the evening sky as the headline settles. Nothing else on the
 * site animates on load like this — keep it that way.
 */
export default function HomeHero() {
  const t = useCopy(copy)
  const to = useTo()
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12])

  const ease = [0.16, 1, 0.3, 1] as const
  const orbit = 'M -80 520 C 260 120, 900 -40, 1520 210'

  return (
    <section ref={ref} className="on-ink relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      {/* Photo, slow parallax */}
      <motion.div className="absolute inset-0 -z-20" style={reduce ? undefined : { y: imgY, scale: imgScale }}>
        <img
          src={dishImg}
          alt={t.imgAlt}
          className="h-full w-full object-cover object-[70%_60%]"
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>
      {/* Readability: ink from the left and from the bottom */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(90deg, rgba(15,30,51,.96) 0%, rgba(15,30,51,.86) 38%, rgba(15,30,51,.35) 72%, rgba(15,30,51,.2) 100%),' +
            'linear-gradient(0deg, rgba(15,30,51,1) 0%, rgba(15,30,51,0) 38%)',
        }}
      />

      {/* The orbit */}
      <svg
        aria-hidden
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[78%] w-full"
      >
        <defs>
          <linearGradient id="orbit-stroke" x1="0" x2="1">
            <stop offset="0" stopColor="#a996f2" stopOpacity="0" />
            <stop offset=".35" stopColor="#a996f2" stopOpacity=".55" />
            <stop offset="1" stopColor="#ffffff" stopOpacity=".9" />
          </linearGradient>
          <radialGradient id="sat-glow">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".95" />
            <stop offset=".35" stopColor="#a996f2" stopOpacity=".5" />
            <stop offset="1" stopColor="#a996f2" stopOpacity="0" />
          </radialGradient>
        </defs>
        <motion.path
          d={orbit}
          fill="none"
          stroke="url(#orbit-stroke)"
          strokeWidth="1.25"
          strokeDasharray="2 7"
          initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease, delay: 0.3 }}
        />
        {!reduce && (
          <g>
            <circle r="18" fill="url(#sat-glow)">
              <animateMotion dur="2.4s" begin="0.3s" fill="freeze" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.16 1 0.3 1" path={orbit} />
            </circle>
            <circle r="3" fill="#fff">
              <animateMotion dur="2.4s" begin="0.3s" fill="freeze" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.16 1 0.3 1" path={orbit} />
            </circle>
          </g>
        )}
        {reduce && <circle cx="1440" cy="190" r="3" fill="#fff" />}
      </svg>

      <div className="container-site flex flex-1 flex-col justify-end pt-32 pb-10 sm:pb-14">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-white/8 py-1.5 pr-4 pl-2 text-sm text-white ring-1 ring-white/15 backdrop-blur"
        >
          <span className="relative flex h-2.5 w-2.5" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
          </span>
          {t.badge}
        </motion.p>

        <h1 className="t-display mt-6 max-w-[14ch] text-white">
          {t.lines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease, delay: 0.45 + i * 0.12 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1 }}
        >
          <p className="t-lede measure mt-6">{t.lede}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to={to('contact')}>{t.primary}</Button>
            <Button to={to('services')} variant="onInk">
              {t.secondary}
            </Button>
            <Button href={COMPANY.phoneHref} variant="onInk" className="sm:hidden">
              {COMPANY.phoneDisplay}
            </Button>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-14 grid gap-6 border-t border-white/12 pt-6 sm:grid-cols-3 sm:gap-10"
        >
          {t.facts.map(([title, detail]) => (
            <div key={title}>
              <dt className="font-display text-lg font-semibold text-white">{title}</dt>
              <dd className="mt-1 text-sm">{detail}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
