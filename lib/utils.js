// lib/utils.js
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Format date
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Generate gradient
export function generateGradient(id) {
  const gradients = [
    'from-blue-500 to-purple-600',
    'from-pink-500 to-rose-500',
    'from-emerald-500 to-cyan-600',
    'from-amber-500 to-orange-600',
    'from-violet-500 to-fuchsia-600',
  ]
  return gradients[id % gradients.length]
}