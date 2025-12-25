'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Terminal, GitBranch, X, Github, Linkedin, Twitter, User, Briefcase, Code2, Mail, ArrowRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const VSCodeHero = () => {
  const [showLivePreview, setShowLivePreview] = useState(false)
  const [terminalOutput, setTerminalOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const outputRef = useRef(null)
  const { theme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState('about')
  const [showCursor, setShowCursor] = useState(true)
  const [isInView, setIsInView] = useState(false)
  
  // Intersection observer for home section
  const { ref: homeRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
    onChange: (inView) => {
      setIsInView(inView)
    }
  })

  // Initialize theme and run application immediately
  useEffect(() => {
    setTheme('dark')
    runApplication()
  }, [setTheme])

  useEffect(() => {
    if (!isRunning) return

    // Show live preview immediately with minimal build steps
    const buildSteps = [
      { text: '> npm install', delay: 50 },
      { text: '\n> next build', delay: 20 },
      { text: '\n> Ready on http://localhost:3000', delay: 0, callback: () => setShowLivePreview(true) },
    ]

    let currentStep = 0
    let currentChar = 0
    let currentText = ''

    const typeNextStep = () => {
      if (currentStep >= buildSteps.length) {
        setIsRunning(false)
        return
      }

      const step = buildSteps[currentStep]
      if (currentChar < step.text.length) {
        currentText += step.text.charAt(currentChar)
        setTerminalOutput(prev => prev + step.text.charAt(currentChar))
        currentChar++
        setTimeout(typeNextStep, 10)
      } else {
        currentStep++
        currentChar = 0
        if (step.callback) step.callback()
        setTimeout(typeNextStep, step.delay)
      }
    }

    setTerminalOutput('')
    setShowLivePreview(false)
    typeNextStep()
  }, [isRunning])

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [terminalOutput])

  const runApplication = () => {
    setIsRunning(true)
  }

  const LivePreview = () => {
    if (!isInView) return null
    
    return (
    <motion.div 
      className="fixed top-24 right-8 w-[calc(100%-4rem)] max-w-2xl h-[70vh] bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-300 flex flex-col z-50"
      style={{ maxHeight: 'calc(100vh - 8rem)' }}
      initial={{ opacity: 1, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex space-x-2 mr-3">
            <div 
              className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-300 transition-colors cursor-pointer flex items-center justify-center"
              onClick={() => setShowLivePreview(false)}
            >
              <X className="w-2 h-2 text-red-800 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-300 transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-300 transition-colors cursor-pointer"></div>
          </div>
          <span className="text-sm font-medium text-white">http://localhost:3000 - Live Preview</span>
        </div>
        <button 
          onClick={() => setShowLivePreview(false)}
          className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
          aria-label="Close preview"
        >
          <X size={16} />
        </button>
      </div>
      
      <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
        <div className="w-16 bg-gray-50 border-r border-gray-200 flex flex-col items-center py-4 space-y-4 px-2">
          <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
            <User className="w-5 h-5" />
          </div>
          <div className="p-2 rounded-lg text-gray-500 hover:bg-gray-100">
            <Briefcase className="w-5 h-5" />
          </div>
          <div className="p-2 rounded-lg text-gray-500 hover:bg-gray-100">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="p-2 rounded-lg text-gray-500 hover:bg-gray-100">
            <Mail className="w-5 h-5" />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto bg-white p-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/assets/images/img1.jpeg"
                  alt="Anchal Singh"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Anchal Singh
                </h1>
                <p className="text-gray-600">Full Stack Developer</p>
                <p className="text-gray-500 text-xs mt-1 max-w-xs text-center">
                  Crafting beautiful, responsive web applications with modern technologies
                </p>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  <a href="https://github.com/Anchal1412" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/anchal-singh-a02968261/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )} // Added closing brace here

  return (
    <div 
      ref={homeRef}
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8 pt-24 md:pt-32"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="w-full h-[70vh] rounded-xl overflow-hidden border border-gray-700 flex flex-col bg-gray-900/80 backdrop-blur-sm shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-800/90 border-b border-gray-700 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-sm text-gray-300">VSCode - Portfolio</span>
            </div>
            <button 
              onClick={runApplication}
              className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded flex items-center space-x-1"
            >
              <Terminal className="w-3 h-3" />
              <span>Run</span>
            </button>
          </div>
          
          <div className="flex-1 overflow-hidden flex">
            <div className="w-12 bg-gray-800/80 border-r border-gray-700 flex flex-col items-center py-4 space-y-6">
              <div className="p-2 rounded-md bg-blue-900/50 text-blue-400">
                <FileText className="w-5 h-5" />
              </div>
              <div className="p-2 rounded-md text-gray-400 hover:bg-gray-700/50">
                <Terminal className="w-5 h-5" />
              </div>
            </div>
            
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="bg-gray-800/50 border-b border-gray-700 flex items-center">
                <div className="px-4 py-2 text-sm border-r border-gray-700 text-gray-300 bg-gray-800">
                  about.js
                </div>
              </div>
              
              <div className="flex-1 overflow-auto bg-gray-900/50 p-4 font-mono text-sm text-gray-300">
                <pre className="whitespace-pre-wrap">
                  <code>
{`// about.js
import { useState } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Twitter, User, Briefcase, Code2, Mail } from 'lucide-react'

export default function About() {
  const [activeTab, setActiveTab] = useState('about')
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto p-6">
        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-full w-16 bg-gray-800 flex flex-col items-center py-6 space-y-6">
          <div className="p-2 rounded-lg bg-blue-600 text-white">
            <User className="w-5 h-5" />
          </div>
          <div className="p-2 rounded-lg text-gray-400 hover:bg-gray-700">
            <Briefcase className="w-5 h-5" />
          </div>
          <div className="p-2 rounded-lg text-gray-400 hover:bg-gray-700">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="p-2 rounded-lg text-gray-400 hover:bg-gray-700">
            <Mail className="w-5 h-5" />
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-20">
          <div className="flex flex-col items-center text-center md:flex-row md:text-left gap-8 py-12">
            {/* Profile Image */}
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/assets/images/img1.jpeg"
                alt="Anchal Singh"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Anchal Singh
              </h1>
              <p className="text-xl text-gray-600 mt-2">Full Stack Developer</p>
              <p className="text-gray-500 mt-4 max-w-lg">
                Crafting beautiful, responsive web applications with modern technologies
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center md:justify-start gap-4 mt-6">
                <a href="https://github.com/Anchal1412" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/anchal-singh-a02968261/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}`}
                  </code>
                </pre>
              </div>
              
              <div className="h-1/3 bg-gray-900/80 border-t border-gray-700 flex flex-col">
                <div className="bg-gray-800/90 px-4 py-2 text-sm text-gray-300 border-b border-gray-700 flex items-center">
                  <Terminal className="w-4 h-4 mr-2" />
                  <span>Terminal</span>
                </div>
                <div 
                  ref={outputRef}
                  className="flex-1 p-4 overflow-auto font-mono text-sm text-green-400 whitespace-pre"
                >
                  {terminalOutput}
                  {showCursor && <span className="animate-pulse">▋</span>}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-600/90 px-4 py-1 text-xs text-white flex justify-between items-center">
            <div className="flex items-center">
              <GitBranch className="w-3.5 h-3.5 mr-2" />
              <span>main</span>
              <span className="mx-2">•</span>
              <span>Next.js</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>Ln 1, Col 1</span>
              <span>UTF-8</span>
              <span>JavaScript</span>
            </div>
          </div>
        </motion.div>
        
        <AnimatePresence>
          {showLivePreview && <LivePreview />}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default VSCodeHero