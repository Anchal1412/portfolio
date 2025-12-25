'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/SectionWrapper'
import { Briefcase, Calendar, MapPin, Rocket, Award } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      company: 'Drema AI',
      role: 'ReactJS Developer Intern',
      location: 'Remote',
      duration: 'Dec 2024 - Feb 2025',
      technologies: ['React', 'TypeScript', 'Frontend Development'],
      achievements: [
        'Contributed to Valify, a business management application for a US-based client, enabling efficient business progress tracking',
        'Designed and optimized responsive UI components to enhance user experience and accessibility',
        'Collaborated with the team to develop scalable and maintainable frontend solutions, ensuring long-term efficiency and performance',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      icon: Rocket,
    },
    {
      company: 'Novem Controls',
      role: 'PHP Trainee',
      location: 'India',
      duration: 'June 2023 - Aug 2023',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP'],
      achievements: [
        'Designed and developed a responsive car rental website using Bootstrap framework, ensuring seamless user experience across all devices',
        'Elevated user engagement through implementation of interactive functionalities utilizing JavaScript, fostering seamless and intuitive interactions',
      ],
      gradient: 'from-purple-500 to-pink-500',
      icon: Award,
    },
  ]

  return (
    <SectionWrapper id="experience" className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
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
            <Briefcase className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Professional Journey
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building real-world applications and solving complex problems in professional environments
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Timeline line */}
          <motion.div
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 rounded-full"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              return (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-8"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10 shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.3 }}
                  />

                  {/* Content Card */}
                  <div
                    className={`flex-1 ml-16 md:ml-0 group ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <motion.div
                      className="relative p-8 rounded-2xl glass border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      {/* Gradient overlay */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        initial={false}
                      />

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                          <div className="flex items-start gap-4">
                            <motion.div
                              className={`p-3 rounded-xl bg-gradient-to-br ${exp.gradient} shadow-lg`}
                              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Icon className="w-6 h-6 text-white" />
                            </motion.div>
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                {exp.role}
                              </h3>
                              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                                <Briefcase size={18} />
                                <span>{exp.company}</span>
                              </div>
                            </div>
                          </div>
                          <div className={`flex flex-col gap-2 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                              <Calendar size={18} />
                              <span className="font-medium">{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                              <MapPin size={18} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="px-3 py-1.5 rounded-lg text-sm font-medium glass border border-gray-200/30 dark:border-gray-700/30 text-gray-700 dark:text-gray-300"
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

                        {/* Achievements */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: achIndex * 0.1 }}
                              >
                                <motion.div
                                  className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.gradient}`}
                                  whileHover={{ scale: 1.5 }}
                                />
                                <span className="flex-1 leading-relaxed">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        initial={false}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
