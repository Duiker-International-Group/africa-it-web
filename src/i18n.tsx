// Lightweight bilingual routing. Portuguese is the default and lives at the
// root (/servicos); English lives under /en (/en/services).
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export type Lang = 'pt' | 'en'
export type RouteKey = 'home' | 'services' | 'about' | 'contact' | 'faq'

/** A value in both languages. Every user-visible string must be one of these. */
export type Bilingual<T> = { pt: T; en: T }

export const ROUTES: Record<RouteKey, Bilingual<string>> = {
  home: { pt: '/', en: '/en' },
  services: { pt: '/servicos', en: '/en/services' },
  about: { pt: '/sobre', en: '/en/about' },
  contact: { pt: '/contacto', en: '/en/contact' },
  faq: { pt: '/perguntas-frequentes', en: '/en/faq' },
}

export const SITE_URL = 'https://africait.co.mz'

export const langFromPath = (pathname: string): Lang =>
  pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'pt'

export function routeKeyFromPath(pathname: string): RouteKey | null {
  const clean = pathname.replace(/\/+$/, '') || '/'
  for (const key of Object.keys(ROUTES) as RouteKey[]) {
    if (ROUTES[key].pt === clean || ROUTES[key].en === clean) return key
  }
  return null
}

/** Current language, derived from the URL. */
export function useLang(): Lang {
  return langFromPath(useLocation().pathname)
}

/** Pick the current language's value: `const t = useCopy(copy)`. */
export function useCopy<T>(copy: Bilingual<T>): T {
  return copy[useLang()]
}

/** Localised path builder: `const to = useTo(); <Link to={to('contact')}>`. */
export function useTo() {
  const lang = useLang()
  return (key: RouteKey, hash?: string) => ROUTES[key][lang] + (hash ? `#${hash}` : '')
}

/** The same page in the other language (falls back to that language's home). */
export function useAlternatePath(): { lang: Lang; path: string } {
  const { pathname, hash } = useLocation()
  const other: Lang = langFromPath(pathname) === 'pt' ? 'en' : 'pt'
  const key = routeKeyFromPath(pathname)
  return { lang: other, path: (key ? ROUTES[key][other] : ROUTES.home[other]) + (key ? hash : '') }
}

function setMeta(selector: string, attr: string, value: string, create: () => HTMLElement) {
  let el = document.head.querySelector<HTMLElement>(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

/**
 * Per-page document metadata: <title>, description, <html lang>, canonical,
 * hreflang alternates and Open Graph. Call once at the top of every page.
 */
export function useSeo(meta: Bilingual<{ title: string; description: string }>) {
  const lang = useLang()
  const { pathname } = useLocation()
  const { title, description } = meta[lang]
  useEffect(() => {
    const key = routeKeyFromPath(pathname)
    const full = key === 'home' ? title : `${title} | Africa IT Solutions`
    document.title = full
    document.documentElement.lang = lang === 'pt' ? 'pt-MZ' : 'en'
    const mk = (tag: string, attrs: Record<string, string>) => () => {
      const el = document.createElement(tag)
      for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v)
      return el
    }
    setMeta('meta[name="description"]', 'content', description, mk('meta', { name: 'description' }))
    setMeta('meta[property="og:title"]', 'content', full, mk('meta', { property: 'og:title' }))
    setMeta('meta[property="og:description"]', 'content', description, mk('meta', { property: 'og:description' }))
    setMeta('meta[property="og:locale"]', 'content', lang === 'pt' ? 'pt_PT' : 'en_GB', mk('meta', { property: 'og:locale' }))
    if (key) {
      setMeta('link[rel="canonical"]', 'href', SITE_URL + ROUTES[key][lang], mk('link', { rel: 'canonical' }))
      setMeta('meta[property="og:url"]', 'content', SITE_URL + ROUTES[key][lang], mk('meta', { property: 'og:url' }))
      setMeta('link[hreflang="pt"]', 'href', SITE_URL + ROUTES[key].pt, mk('link', { rel: 'alternate', hreflang: 'pt' }))
      setMeta('link[hreflang="en"]', 'href', SITE_URL + ROUTES[key].en, mk('link', { rel: 'alternate', hreflang: 'en' }))
      setMeta('link[hreflang="x-default"]', 'href', SITE_URL + ROUTES[key].pt, mk('link', { rel: 'alternate', hreflang: 'x-default' }))
    }
  }, [lang, pathname, title, description])
}
