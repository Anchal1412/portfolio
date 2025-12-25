'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function SectionWrapper({ children, id, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])

  return (
    <section 
      id={id} 
      ref={ref}
      className={`section-container relative ${className}`}
    >
      <motion.div
        style={{ opacity, y }}
        initial={{ opacity: 0 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  )
}
