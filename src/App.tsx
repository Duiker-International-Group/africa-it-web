import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import NotFound from './pages/NotFound'
import { ROUTES, type Lang } from './i18n'

const PAGES = { home: Home, services: Services, about: About, contact: Contact, faq: FAQ } as const

// Old English-only URLs from the previous site keep working.
const LEGACY: [string, string][] = [
  ['/services', ROUTES.services.en],
  ['/about', ROUTES.about.en],
  ['/contact', ROUTES.contact.en],
  ['/faq', ROUTES.faq.en],
]

/** On navigation: jump to #hash if present, otherwise to the top. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      // wait for the page transition to mount the target
      const t = window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 120)
      return () => window.clearTimeout(t)
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])
  return null
}

function AppRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        id="main"
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        <Routes location={location}>
          {(['pt', 'en'] as Lang[]).flatMap((lang) =>
            (Object.keys(PAGES) as (keyof typeof PAGES)[]).map((key) => {
              const Page = PAGES[key]
              return <Route key={`${lang}-${key}`} path={ROUTES[key][lang]} element={<Page />} />
            }),
          )}
          {LEGACY.map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          <Route path="/en/*" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollManager />
        <div className="flex min-h-dvh flex-col">
          <Header />
          <div className="flex-1">
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </MotionConfig>
  )
}
