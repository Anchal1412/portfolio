'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/SectionWrapper'
import { Mail, Phone, Send, Linkedin, Github, MapPin, MessageCircle, ArrowRight, MessageSquare } from 'lucide-react'
import Image from 'next/image'
import { Download } from 'lucide-react'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'singhaj8130@gmail.com',
      href: 'mailto:singhaj8130@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gurugram, India',
      href: '#',
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anchal-singh-a02968261/',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Anchal1412',
      gradient: 'from-gray-700 to-gray-900',
    },
    {
    icon: SiLeetcode,
    label: 'LeetCode',
    href: 'https://leetcode.com/u/singhaj8130/',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: SiGeeksforgeeks,
    label: 'GeeksforGeeks',
    href: 'https://www.geeksforgeeks.org/profile/singhajzfg',
    gradient: 'from-green-600 to-emerald-600',
  },
  ]

  return (
    <SectionWrapper id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative overflow-hidden">
        {/* Watermark Logo */}
        <div className="absolute -right-20 -bottom-20 opacity-5 dark:opacity-[0.03] z-0">
          <div className="relative w-96 h-96">
            <Image 
              src="/Brandlogo.svg" 
              alt="" 
              fill
              className="object-contain"
              aria-hidden="true"
            />
          </div>
        </div>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4 flex items-center justify-center gap-3">
              <MessageSquare className="w-8 h-8 text-blue-500" />
              <span>Get In Touch</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20"
          >
            <MessageCircle className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Let's Build Something Amazing
            </span>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Let's Connect
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Feel free to reach out through any of these channels. I'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="group flex items-center gap-4 p-5 rounded-xl glass border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    {/* Gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      initial={false}
                    />
                    
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-br ${info.gradient} shadow-lg group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div className="relative z-10 flex-1">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        {info.label}
                      </div>
                      <div className="text-gray-900 dark:text-white font-semibold text-lg">
                        {info.value}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-4 rounded-xl bg-gradient-to-br ${social.gradient} text-white overflow-hidden`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon size={24} className="relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                )
              })}
            </div> 
               {/* Resume Download Button */}
<motion.a
  href="/pdf/anchal_CV.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="mt-6 inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
>
  <Download size={22} />
  Download Resume
</motion.a>
          </motion.div>
      


          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl glass border border-gray-200/50 dark:border-gray-700/50 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 resize-none placeholder-gray-400"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Send size={20} />
                  Send Message
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  )
}
