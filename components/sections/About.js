'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import SectionWrapper from '@/components/SectionWrapper'
import { Code, Rocket, Target, Award, GraduationCap, TrendingUp, Users, Zap } from 'lucide-react'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])

  const highlights = [
    {
      icon: Code,
      title: 'Production-Ready Code',
      description: 'Writing maintainable, scalable code following industry best practices',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.1,
    },
    {
      icon: Rocket,
      title: 'Modern Tech Stack',
      description: 'Expert in React, Next.js, MERN stack, and real-time technologies',
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.2,
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: '800+ DSA problems solved, 4th rank in university GFG leaderboard',
      gradient: 'from-orange-500 to-red-500',
      delay: 0.3,
    },
  ]

  const achievements = [
    { icon: GraduationCap, label: 'Master\'s Degree', value: '8.13 CGPA', color: 'blue' },
    { icon: Award, label: 'GFG Rank', value: '4th', color: 'purple' },
    { icon: TrendingUp, label: 'DSA Problems', value: '800+', color: 'orange' },
    { icon: Users, label: 'Real Projects', value: 'Production', color: 'green' },
  ]

  return (
    <SectionWrapper id="about" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 mb-6"
          >
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Building Impactful Digital Solutions
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Full Stack Developer specializing in MERN & Next.js
          </p>
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column - Text Content */}
          <motion.div
            style={{ y, opacity }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                I'm a passionate <span className="font-semibold text-gray-900 dark:text-white">Full Stack Developer</span> with expertise in MERN, Next.js,
                and the MERN stack. I have completed my <span className="font-semibold text-gray-900 dark:text-white">Master of Computer Applications (MCA) </span>
                from Kurukshetra University with an impressive <span className="font-semibold text-blue-600 dark:text-blue-400">CGPA of 8.13/10</span>.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                With hands-on experience building responsive web applications and
                microservices architectures, I specialize in creating seamless user
                experiences that drive business growth. My work includes developing
                scalable frontend solutions for US-based clients and implementing
                real-time features using modern web technologies.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                Beyond development, I'm an active competitive programmer with <span className="font-semibold text-purple-600 dark:text-purple-400">800+ solved problems</span> on LeetCode and GeeksforGeeks, ranking <span className="font-semibold text-orange-600 dark:text-orange-400">4th on GFG</span> in
                my university. This problem-solving mindset translates directly into
                building robust, efficient applications.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              const colorClasses = {
                blue: 'from-blue-500 to-cyan-500',
                purple: 'from-purple-500 to-pink-500',
                orange: 'from-orange-500 to-red-500',
                green: 'from-green-500 to-emerald-500',
              }
              
              return (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl glass border border-gray-200/50 dark:border-gray-700/50 group hover:border-blue-500/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${colorClasses[achievement.color]} mb-4 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Highlights Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                className="group relative p-8 rounded-2xl glass border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: item.delay, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient Overlay on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={false}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.gradient} mb-4 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
