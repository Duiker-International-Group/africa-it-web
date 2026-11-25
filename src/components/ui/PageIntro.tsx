import type { ReactNode } from 'react'
import { motion } from 'motion/react'

/**
 * Opening block for inner pages: ink surface, title, intro paragraph and an
 * optional aside (image, contact strip). Leaves room for the fixed header.
 */
export default function PageIntro({
  title,
  intro,
  aside,
  children,
}: {
  title: string
  intro: ReactNode
  aside?: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="on-ink relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:items-end">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="t-h1 max-w-[16ch]">{title}</h1>
          <div className="t-lede measure mt-6">{intro}</div>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </motion.div>
        {aside && (
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {aside}
          </motion.div>
        )}
      </div>
    </section>
  )
}
