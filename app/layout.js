// app/layout.js
import './globals.css'
import { Inter, Fira_Code } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500', '600', '700']
})

export const metadata = {
  title: 'Anchal Singh | Full Stack Developer | MERN & Next.js Expert',
  description: 'Portfolio of Anchal Singh - Full Stack Developer specializing in MERN stack and Next.js.',
  keywords: 'Full Stack Developer, MERN Stack, Next.js, React, Node.js, MongoDB, Web Developer',
  authors: [{ name: 'Anchal Singh' }],
  openGraph: {
    title: 'Anchal Singh | Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN stack and Next.js',
    type: 'website',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}