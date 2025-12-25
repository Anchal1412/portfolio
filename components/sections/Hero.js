'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Code, Terminal, GitBranch, Github, Linkedin, Mail, FileText } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const codeSnippet = `// Welcome to my portfolio!
const developer = {
  name: 'Anchal Singh',
  role: 'Full Stack Developer',
  location: 'India',
  skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express'],
  experience: '3+ years',
  contact: {
    email: 'anchal@example.com',
    github: 'github.com/anchalsingh',
    linkedin: 'linkedin.com/in/anchalsingh'
  }
};`;

export default function Hero() {
  const [activeTab, setActiveTab] = useState('about.js');
  const [terminalText, setTerminalText] = useState('$ npm start');
  const [showCursor, setShowCursor] = useState(true);
  
  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Terminal typing effect
  useEffect(() => {
    const messages = [
      '> Starting development server...',
      '> Ready on http://localhost:3000',
      '> Building...',
      '> Compiled successfully!'
    ];
    
    let currentMessage = 0;
    let currentChar = 0;
    let isDeleting = false;
    
    const type = () => {
      const currentText = messages[currentMessage];
      
      if (isDeleting) {
        setTerminalText(currentText.substring(0, currentChar - 1));
        currentChar--;
        
        if (currentChar === 0) {
          isDeleting = false;
          currentMessage = (currentMessage + 1) % messages.length;
        }
      } else {
        setTerminalText(currentText.substring(0, currentChar + 1));
        currentChar++;
        
        if (currentChar === currentText.length) {
          isDeleting = true;
          setTimeout(type, 2000); // Pause at the end of message
          return;
        }
      }
      
      const timeout = isDeleting ? 50 : 100;
      setTimeout(type, timeout);
    };
    
    const timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const trustStats = [
    { 
      icon: Code, 
      value: 'Full Stack', 
      label: 'Development', 
      color: 'from-blue-500 to-cyan-500' 
    },
    { 
      icon: GitBranch, 
      value: 'MERN', 
      label: 'Stack Expert', 
      color: 'from-purple-500 to-pink-500' 
    },
    { 
      icon: Terminal, 
      value: 'Scalable', 
      label: 'Solutions', 
      color: 'from-orange-500 to-red-500' 
    },
  ]

  const floatingTech = [
    'React', 'Next.js', 'Node.js', 'MongoDB', 
    'Express', 'TypeScript', 'GraphQL', 'Docker',
    'AWS', 'Microservices', 'REST APIs', 'WebSockets'
  ]

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 overflow-hidden"
    >
      {/* VS Code-like background */}
      <div className="absolute inset-0 bg-[#1e1e1e] opacity-90">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23333333\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>
      
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-500/30 dark:to-purple-500/30 blur-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Animated Grid Background */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"
        style={{
          x: useTransform(mouseX, (x) => (x - 400) / 50),
          y: useTransform(mouseY, (y) => (y - 300) / 50),
        }}
      />
      
      {/* Gradient Orbs with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute top-20 -left-20 w-72 h-72 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2, opacity }}
          className="absolute top-40 -right-20 w-72 h-72 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ 
            x: useTransform(mouseX, (x) => (x - 400) / 30),
            y: useTransform(mouseY, (y) => (y - 300) / 30),
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-t from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="section-container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] py-12 md:py-20">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass border border-blue-500/20"
            >
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
              <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
                Available for React & MERN Opportunities
              </span>
            </motion.div>

            {/* EFFECT 2: Advanced Text Reveal with Glitch Effect */}
            <div className="space-y-2 md:space-y-4">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="block text-gray-900 dark:text-white"
                >
                  Building
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="block gradient-text relative"
                >
                  <span className="relative z-10">Scalable</span>
                  <motion.span
                    className="absolute inset-0 gradient-text blur-sm opacity-50"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      x: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    Scalable
                  </motion.span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="block text-gray-900 dark:text-white"
                >
                  Web Apps
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mt-4 md:mt-6 leading-relaxed"
              >
                Full Stack Developer specializing in{' '}
                <span className="font-semibold text-gray-900 dark:text-white">MERN</span> &{' '}
                <span className="font-semibold text-gray-900 dark:text-white">Next.js</span>
              </motion.p>
            </div>

            {/* Trust Signals - Responsive Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-2 md:pt-4"
            >
              {trustStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    className="p-3 md:p-4 rounded-xl glass border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className={`inline-flex p-1.5 md:p-2 rounded-lg bg-gradient-to-br ${stat.color} mb-1.5 md:mb-2`}>
                      <Icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                    <div className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400 mt-0.5 md:mt-1 leading-tight">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTAs - Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-2 md:pt-4"
            >
              <motion.button
                onClick={scrollToProjects}
                className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  x: useTransform(mouseX, (x) => (x - 400) / 25),
                  y: useTransform(mouseY, (y) => (y - 300) / 25),
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.a
                href="/pdf/anchal_CV.pdf"
                download="Anchal_Singh_Full_Stack_Developer_CV"
                className="px-6 md:px-8 py-3 md:py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                whileHover={{ scale: 1.05, borderColor: 'rgb(59, 130, 246)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">Resume PDF</span>
                <span className="sm:hidden">Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-full min-h-[400px] order-1 lg:order-2"
          >
            {/* Floating Tech Stack Pills - Responsive */}
            {floatingTech.map((tech, index) => {
              const positions = [
                { top: '5%', left: '10%' },
                { top: '15%', right: '5%' },
                { top: '30%', left: '0%' },
                { top: '45%', right: '10%' },
                { top: '60%', left: '15%' },
                { top: '20%', left: '55%' },
                { top: '40%', right: '0%' },
                { top: '70%', right: '25%' },
              ]
              const pos = positions[index % positions.length]
              
              return (
                <motion.div
                  key={tech}
                  className="absolute px-2 py-1 md:px-4 md:py-2 rounded-full glass border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-md"
                  style={pos}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                  }}
                  transition={{
                    delay: 1.5 + index * 0.15,
                    duration: 0.5,
                  }}
                  whileHover={{ scale: 1.15, zIndex: 10, rotate: 5 }}
                  animate={{
                    rotate: [0, -3, 3, -3, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    rotate: {
                      repeat: Infinity,
                      repeatType: 'reverse',
                      duration: 4 + index,
                    },
                    y: {
                      repeat: Infinity,
                      repeatType: 'reverse',
                      duration: 3 + index * 0.5,
                    },
                  }}
                >
                  <span className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200">{tech}</span>
                </motion.div>
              )
            })}

            {/* EFFECT 3: 3D Interactive Code Block Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-72 md:w-80 p-4 md:p-6 rounded-2xl glass border border-gray-200/50 dark:border-gray-700/50 shadow-2xl"
              style={{
                rotateY: useTransform(mouseX, (x) => (x - 400) / 30),
                rotateX: useTransform(mouseY, (y) => -(y - 300) / 30),
                transformStyle: 'preserve-3d',
              }}
              whileHover={{ scale: 1.05, z: 50 }}
            >
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 ml-2">portfolio.tsx</span>
              </div>
              <div className="space-y-1.5 md:space-y-2 font-mono text-xs md:text-sm">
                <div className="text-blue-400">
                  <span className="text-gray-500">const</span> developer
                </div>
                <div className="text-purple-400 ml-3 md:ml-4">= {'{'}</div>
                <div className="text-green-400 ml-6 md:ml-8">name: <span className="text-yellow-300">'Anchal'</span>,</div>
                <div className="text-green-400 ml-6 md:ml-8">stack: <span className="text-yellow-300">'MERN'</span>,</div>
                <div className="text-green-400 ml-6 md:ml-8">experience: <span className="text-yellow-300">'Production'</span></div>
                <div className="text-purple-400 ml-3 md:ml-4">{'};'}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Responsive */}
        <motion.div
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-1 md:gap-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
          >
            <span className="text-[10px] md:text-xs uppercase tracking-wider font-medium">Scroll</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-gray-400 dark:border-gray-500 flex items-start justify-center p-1.5 md:p-2 group-hover:border-blue-600 dark:group-hover:border-blue-400 transition-colors">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 group-hover:bg-blue-600 dark:group-hover:bg-blue-400"
                />
              </div>
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}