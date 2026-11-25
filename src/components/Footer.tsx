import { Link } from 'react-router-dom'
import Logo from './ui/Logo'
import { useCopy, useLang, useTo, type RouteKey } from '../i18n'
import { COMPANY } from '../content/company'

const copy = {
  pt: {
    tagline: 'Revendedor Autorizado Starlink e serviços de TI para empresas e famílias em Moçambique.',
    pages: 'Páginas',
    nav: [
      ['home', 'Início'],
      ['services', 'Serviços'],
      ['about', 'Sobre nós'],
      ['faq', 'Perguntas frequentes'],
      ['contact', 'Contacto'],
    ] as [RouteKey, string][],
    contact: 'Contacto',
    visit: 'Visite-nos',
    hours: 'Horário',
    rights: 'Todos os direitos reservados.',
    starlink: 'Starlink é uma marca registada da Space Exploration Technologies Corp.',
  },
  en: {
    tagline: 'Authorised Starlink Retailer and IT services for businesses and homes in Mozambique.',
    pages: 'Pages',
    nav: [
      ['home', 'Home'],
      ['services', 'Services'],
      ['about', 'About'],
      ['faq', 'FAQ'],
      ['contact', 'Contact'],
    ] as [RouteKey, string][],
    contact: 'Contact',
    visit: 'Visit us',
    hours: 'Opening hours',
    rights: 'All rights reserved.',
    starlink: 'Starlink is a trademark of Space Exploration Technologies Corp.',
  },
}

export default function Footer() {
  const t = useCopy(copy)
  const lang = useLang()
  const to = useTo()
  const heading = 'mb-4 font-display text-base font-semibold text-white'
  const item = 'text-sm text-mist transition-colors hover:text-white'

  return (
    <footer className="on-ink border-t border-white/10">
      <div className="container-site grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to={to('home')} className="inline-block text-white" aria-label="Africa IT Solutions">
            <Logo className="h-12" />
          </Link>
          <p className="mt-5 max-w-xs text-sm">{t.tagline}</p>
        </div>

        <div className="lg:col-span-2">
          <h2 className={heading}>{t.pages}</h2>
          <ul className="space-y-3">
            {t.nav.map(([key, label]) => (
              <li key={key}>
                <Link to={to(key)} className={item}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className={heading}>{t.contact}</h2>
          <ul className="space-y-3">
            <li><a className={item} href={COMPANY.phoneHref}>{COMPANY.phoneDisplay}</a></li>
            <li><a className={item} href={COMPANY.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a className={item} href={`mailto:${COMPANY.emailSales}`}>{COMPANY.emailSales}</a></li>
            <li><a className={item} href={`mailto:${COMPANY.emailStarlink}`}>{COMPANY.emailStarlink}</a></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className={heading}>{t.visit}</h2>
          <a className={`${item} block max-w-xs`} href={COMPANY.mapsHref} target="_blank" rel="noopener noreferrer">
            {COMPANY.address[lang]}
          </a>
          <h2 className={`${heading} mt-8`}>{t.hours}</h2>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
            {COMPANY.hours[lang].map(([d, h]) => (
              <div key={d} className="contents">
                <dt>{d}</dt>
                <dd className="text-white tabular-nums">{h}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-mist/70 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Africa IT Solutions. {t.rights}</p>
          <p>{t.starlink}</p>
        </div>
      </div>
    </footer>
  )
}
