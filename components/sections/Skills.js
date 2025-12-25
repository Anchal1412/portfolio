'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/SectionWrapper'
import {
  Code,
  Database,
  Smartphone,
  GitBranch,
  Layers,
  Cloud,
  Sparkles,
} from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500',
      description: 'Modern UI/UX development',
    },
    {
      title: 'Backend',
      icon: Layers,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io'],
      color: 'from-purple-500 to-pink-500',
      description: 'Scalable server architecture',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'MySQL'],
      color: 'from-green-500 to-emerald-500',
      description: 'Data persistence & management',
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      skills: ['Android', 'Kotlin'],
      color: 'from-orange-500 to-red-500',
      description: 'Native mobile development',
    },
    {
      title: 'Tools & Platforms',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
      color: 'from-indigo-500 to-blue-500',
      description: 'Development workflow',
    },
    {
      title: 'Languages',
      icon: Cloud,
      skills: ['JavaScript', 'C/C++', 'Kotlin', 'Java'],
      color: 'from-teal-500 to-cyan-500',
      description: 'Core programming languages',
    },
  ]

  return (
    <SectionWrapper id="skills" className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
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
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Comprehensive Tech Stack
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={categoryIndex}
                className="group relative p-6 rounded-2xl glass border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient Overlay on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={false}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {category.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-3 py-1.5 rounded-lg text-sm font-medium glass border border-gray-200/30 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 hover:border-blue-500/50 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 0.3
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          borderColor: 'rgb(59, 130, 246)',
                          y: -2
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  initial={false}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
