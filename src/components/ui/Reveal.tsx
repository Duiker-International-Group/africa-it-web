import { motion, type HTMLMotionProps } from 'motion/react'

/**
 * A single, quiet entrance (fade + 16px rise) when the element scrolls into view.
 * Use sparingly: at most one or two per section, never on every card.
 * Respects prefers-reduced-motion via <MotionConfig reducedMotion="user"> in App.
 */
export default function Reveal({ delay = 0, ...props }: HTMLMotionProps<'div'> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      {...props}
    />
  )
}
