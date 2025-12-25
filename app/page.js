// app/page.js
'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Section } from '@/components/ui/section'

// Dynamically import components
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })
const VSCodeHero = dynamic(() => import('@/components/sections/VSCodeHero'), { ssr: false })
const About = dynamic(() => import('@/components/sections/About'), { ssr: false })
const Skills = dynamic(() => import('@/components/sections/Skills'), { ssr: false })
const Experience = dynamic(() => import('@/components/sections/Experience'), { ssr: false })
const Projects = dynamic(() => import('@/components/sections/Projects'), { ssr: false })
const Contact = dynamic(() => import('@/components/sections/Contact'), { ssr: false })

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      <Navbar />
      
      <main className="flex-1">
        <VSCodeHero />
        
        <Section id="about">
          <About />
        </Section>

        <Section id="skills">
          <Skills />
        </Section>

        <Section id="experience">
          <Experience />
        </Section>

        <Section id="projects">
          <Projects />
        </Section>

        <Section id="contact">
          <Contact />
        </Section>
      </main>

      <Footer />

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
        style={{ scaleX, transformOrigin: '0%' }}
      />
    </>
  )
}