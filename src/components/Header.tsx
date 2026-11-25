import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Logo from './ui/Logo'
import Button from './ui/Button'
import { useAlternatePath, useCopy, useTo, type RouteKey } from '../i18n'
import { COMPANY } from '../content/company'

const copy = {
  pt: {
    nav: [
      ['services', 'Serviços'],
      ['about', 'Sobre nós'],
      ['faq', 'Perguntas'],
      ['contact', 'Contacto'],
    ] as [RouteKey, string][],
    starlink: 'Starlink',
    cta: 'Falar no WhatsApp',
    switchLabel: 'Read in English',
    menu: 'Abrir menu',
    close: 'Fechar menu',
    home: 'Página inicial',
  },
  en: {
    nav: [
      ['services', 'Services'],
      ['about', 'About'],
      ['faq', 'FAQ'],
      ['contact', 'Contact'],
    ] as [RouteKey, string][],
    starlink: 'Starlink',
    cta: 'Chat on WhatsApp',
    switchLabel: 'Ler em português',
    menu: 'Open menu',
    close: 'Close menu',
    home: 'Home',
  },
}

function LangSwitch({ className = '' }: { className?: string }) {
  const t = useCopy(copy)
  const alt = useAlternatePath()
  return (
    <Link
      to={alt.path}
      hrefLang={alt.lang}
      aria-label={t.switchLabel}
      title={t.switchLabel}
      className={`inline-flex h-9 items-center rounded-full px-3 text-sm font-semibold ring-1 ring-inset ring-current/25 transition hover:ring-current ${className}`}
    >
      {alt.lang === 'en' ? 'EN' : 'PT'}
    </Link>
  )
}

export default function Header() {
  const t = useCopy(copy)
  const to = useTo()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Every page opens on an ink surface, so the bar is light-on-dark until it turns solid.
  const solid = scrolled || open
  const navLink = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-mist hover:text-white'}`

  return (
    <header
      className={`on-ink fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        solid ? 'bg-ink/92 shadow-[0_1px_0_rgba(201,210,222,.12)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:bg-white focus:px-4 focus:py-2 focus:text-ink">
        {t.home === 'Home' ? 'Skip to content' : 'Saltar para o conteúdo'}
      </a>
      <nav className="container-site flex h-18 items-center justify-between gap-6 sm:h-20">
        <Link to={to('home')} aria-label={t.home} className="shrink-0 text-white" onClick={() => setOpen(false)}>
          <Logo className="h-9 sm:h-11" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <NavLink to={to('services', 'starlink')} className={() => navLink({ isActive: false })}>
            {t.starlink}
          </NavLink>
          {t.nav.map(([key, label]) => (
            <NavLink key={key} to={to(key)} className={navLink}>
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-jacaranda-light"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LangSwitch className="text-mist hover:text-white" />
          <Button href={COMPANY.whatsappHref} className="hidden sm:inline-flex">
            {t.cta}
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.close : t.menu}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-control text-white lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key={pathname}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-18 bottom-0 overflow-y-auto bg-ink sm:top-20 lg:hidden"
          >
            <ul className="container-site flex flex-col pt-6 pb-10">
              {[['services', t.starlink, 'starlink'] as const, ...t.nav.map(([k, l]) => [k, l, undefined] as const)].map(
                ([key, label, hash], i) => (
                  <motion.li
                    key={`${key}-${label}`}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i + 0.05, duration: 0.35 }}
                    className="border-b border-white/10"
                  >
                    <Link
                      to={to(key, hash)}
                      onClick={() => setOpen(false)}
                      className="block py-5 font-display text-2xl font-semibold text-white"
                    >
                      {label}
                    </Link>
                  </motion.li>
                ),
              )}
            </ul>
            <div className="container-site flex flex-col gap-3 pb-12">
              <Button href={COMPANY.whatsappHref}>{t.cta}</Button>
              <Button href={COMPANY.phoneHref} variant="onInk">
                {COMPANY.phoneDisplay}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
