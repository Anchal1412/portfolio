'use client'

import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Anchal1412',
      ariaLabel: 'GitHub profile',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/anchal-singh-a02968261/',
      ariaLabel: 'LinkedIn profile',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:singhaj8130@gmail.com',
      ariaLabel: 'Send email',
    },
    {
      name: 'Phone',
      icon: Phone,
      href: 'tel:+917417498255',
      ariaLabel: 'Call phone',
    },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="space-y-4">
              <div className="relative h-20 w-40 md:h-24 md:w-44">
                <Image 
                  src="/Brandlogo.svg" 
                  alt="Anchal Singh" 
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Crafting digital experiences
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Full Stack Developer specializing in MERN and Next.js. Building
                modern, scalable web applications and APIs.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Anchal Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

