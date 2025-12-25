// components/ui/section.js
'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export function Section({ 
  id, 
  title, 
  description, 
  className, 
  children,
  ...props 
}) {
  return (
    <section
      id={id}
      className={cn('py-16 sm:py-24', className)}
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  )
}