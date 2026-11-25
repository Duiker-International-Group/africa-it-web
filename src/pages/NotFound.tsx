import { useEffect } from 'react'
import { useCopy, useSeo, useTo } from '../i18n'
import Button from '../components/ui/Button'

const copy = {
  pt: {
    seo: {
      title: 'Página não encontrada',
      description:
        'A página que procura não existe ou mudou de endereço. Volte ao início ou fale connosco sobre Starlink e serviços de TI em Maputo.',
    },
    title: 'Página não encontrada',
    text: 'A página que procura não existe ou mudou de endereço. Volte ao início ou fale connosco.',
    home: 'Voltar ao início',
    contact: 'Fale connosco',
  },
  en: {
    seo: {
      title: 'Page not found',
      description:
        'The page you are looking for does not exist or has moved. Go back home or talk to us about Starlink and IT services in Maputo.',
    },
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has moved. Go back home or get in touch.',
    home: 'Back to home',
    contact: 'Get in touch',
  },
}

export default function NotFound() {
  const t = useCopy(copy)
  const to = useTo()
  useSeo({ pt: copy.pt.seo, en: copy.en.seo })

  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    return () => {
      meta.remove()
    }
  }, [])

  return (
    <section className="on-ink min-h-[70vh] pt-40 pb-24">
      <div className="container-site">
        <h1 className="t-h1 max-w-[16ch]">{t.title}</h1>
        <p className="t-lede measure mt-6">{t.text}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to={to('home')}>{t.home}</Button>
          <Button to={to('contact')} variant="onInk">
            {t.contact}
          </Button>
        </div>
      </div>
    </section>
  )
}
