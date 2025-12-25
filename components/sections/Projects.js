'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/SectionWrapper'
import { Github, ExternalLink, Code, Zap, MessageSquare, ArrowRight, Star } from 'lucide-react'
import { useState } from 'react'

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      title: 'NewsMonkey',
      description:
        'A dynamic news aggregation platform designed with React JS and Bootstrap. This cutting-edge application delivers unparalleled real-time news updates sourced from diverse channels, ensuring users stay informed with the latest happenings across the globe.',
      techStack: ['React.js', 'REST API', 'Bootstrap', 'JavaScript'],
      features: [
        'Real-time news updates from multiple sources',
        'Responsive design with Bootstrap',
        'Seamless API integration for up-to-the-minute data',
        'Enhanced user retention through engaging interface',
      ],
      githubUrl: '#',
      liveUrl: '#',
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-500',
      accent: 'blue',
      stats: { users: '10K+', performance: '98%' },
    },
    {
      title: 'Online Cafe',
      description:
        'A MERN-based microservices application to digitize and streamline form-filling at Common Service Centers. Designed with a scalable microservices architecture to ensure efficient service management and seamless system performance.',
      techStack: ['MERN Stack', 'JWT', 'Socket.io', 'Microservices', 'Node.js'],
      features: [
        'Microservices architecture for scalable performance',
        'JWT authentication for secure access',
        'Real-time one-to-one messaging with Socket.io',
        'Zero reported security breaches during tenure',
      ],
      githubUrl: '#',
      liveUrl: '#',
      icon: MessageSquare,
      gradient: 'from-purple-500 to-pink-500',
      accent: 'purple',
      stats: { users: '5K+', performance: '99.9%' },
    },
  ]

  return (
    <SectionWrapper id="projects" className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
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
            <Star className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Production-Ready Applications
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real-world applications built with modern technologies, deployed in production environments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => {
            const Icon = project.icon
            const isHovered = hoveredProject === index
            
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                {/* Card */}
                <motion.div
                  className="relative h-full rounded-2xl overflow-hidden glass border border-gray-200/50 dark:border-gray-700/50"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  {/* Gradient Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    initial={false}
                  />

                  {/* Top Section with Icon and Stats */}
                  <div className="relative p-8 pb-6">
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        className={`p-4 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg`}
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <div className="flex gap-3">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg glass border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="View source code"
                        >
                          <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </motion.a>
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg glass border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="View live site"
                        >
                          <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className="flex gap-4 mb-6">
                      <div className="px-4 py-2 rounded-lg glass border border-gray-200/30 dark:border-gray-700/30">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Users</div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">{project.stats.users}</div>
                      </div>
                      <div className="px-4 py-2 rounded-lg glass border border-gray-200/30 dark:border-gray-700/30">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Uptime</div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">{project.stats.performance}</div>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Content Section */}
                  <div className="relative px-8 pb-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1.5 rounded-lg text-sm font-medium glass border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: techIndex * 0.05 }}
                            whileHover={{ scale: 1.1, borderColor: 'rgb(59, 130, 246)' }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                        <Code className="w-5 h-5 text-blue-500" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: featureIndex * 0.1 }}
                          >
                            <motion.div
                              className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${project.gradient}`}
                              whileHover={{ scale: 1.5 }}
                            />
                            <span className="flex-1">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Shine Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    initial={false}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
