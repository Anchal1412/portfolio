'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/SectionWrapper'
import { Trophy, Code2, TrendingUp, Award, ExternalLink, Sparkles } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: '4th Rank',
      description: 'GeeksforGeeks University Ranking',
      value: '4th',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Code2,
      title: '800+ Problems',
      description: 'Solved on LeetCode & GeeksforGeeks',
      value: '800+',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Programming',
      description: 'Active problem solver',
      value: 'Active',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'CGPA 8.13/10 in Masters',
      value: '8.13/10',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  const codingProfiles = [
    {
      name: 'LeetCode',
      username: 'singhaj8130',
      url: 'https://leetcode.com/singhaj8130',
      color: 'from-orange-500 to-yellow-500',
      icon: Code2,
    },
    {
      name: 'GeeksforGeeks',
      username: 'singhajzfg',
      url: 'https://auth.geeksforgeeks.org/user/singhajzfg',
      color: 'from-green-500 to-emerald-500',
      icon: TrendingUp,
    },
  ]

  return (
    <SectionWrapper id="achievements" className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
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
              Recognition & Excellence
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recognition for dedication and excellence in programming and academics
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                className="group relative p-8 rounded-2xl glass border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-center overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={false}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="text-4xl font-bold mb-3 gradient-text">
                    {achievement.value}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  initial={false}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Coding Profiles
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            {codingProfiles.map((profile, index) => {
              const ProfileIcon = profile.icon
              return (
                <motion.a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative px-8 py-6 rounded-2xl bg-gradient-to-br ${profile.color} text-white font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-between gap-4 overflow-hidden`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                      <ProfileIcon size={24} />
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-bold">{profile.name}</div>
                      <div className="text-sm opacity-90">@{profile.username}</div>
                    </div>
                  </div>
                  <ExternalLink 
                    size={20} 
                    className="relative z-10 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
