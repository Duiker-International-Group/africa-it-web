import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'onInk'

const base =
  'inline-flex items-center justify-center gap-2 rounded-control px-5 py-3 text-sm font-semibold ' +
  'transition-[background-color,color,box-shadow,transform] duration-200 ease-out active:translate-y-px ' +
  'disabled:pointer-events-none disabled:opacity-60 min-h-11'

const variants: Record<Variant, string> = {
  // Jacaranda: the main action on a page (one per view)
  primary: 'bg-jacaranda text-white hover:bg-jacaranda-deep shadow-[0_1px_0_rgba(15,30,51,.25)]',
  // Quiet outline action on light surfaces
  secondary: 'text-ink ring-1 ring-inset ring-mist hover:ring-ink hover:bg-white',
  // Light action on ink surfaces
  onInk: 'text-white ring-1 ring-inset ring-white/30 hover:ring-white hover:bg-white/5',
}

type Props = {
  variant?: Variant
  children: ReactNode
  className?: string
} & (
  | { to: string; href?: never; type?: never; onClick?: never; disabled?: never }
  | { href: string; to?: never; type?: never; onClick?: never; disabled?: never }
  | { to?: never; href?: never; type?: 'button' | 'submit'; onClick?: () => void; disabled?: boolean }
)

/** Button or link styled as a button. `to` = internal route, `href` = external. */
export default function Button({ variant = 'primary', className = '', children, ...rest }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`
  if ('to' in rest && rest.to) return <Link to={rest.to} className={cls}>{children}</Link>
  if ('href' in rest && rest.href) {
    const external = /^https?:/.test(rest.href)
    return (
      <a href={rest.href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    )
  }
  const { type = 'button', onClick, disabled } = rest as { type?: 'button' | 'submit'; onClick?: () => void; disabled?: boolean }
  return <button type={type} onClick={onClick} disabled={disabled} className={cls}>{children}</button>
}
