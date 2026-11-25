import logoUrl from '../../assets/logo-white.webp'

/**
 * The company mark, recoloured with CSS (mask) so it works on any surface.
 * Pass a text colour class, e.g. `text-white` on ink or `text-ink` on paper.
 */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Africa IT Solutions"
      className={`inline-block bg-current aspect-[400/229] ${className}`}
      style={{
        WebkitMaskImage: `url(${logoUrl})`,
        maskImage: `url(${logoUrl})`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
      }}
    />
  )
}
