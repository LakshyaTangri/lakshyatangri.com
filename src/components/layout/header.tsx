'use client'

import { useEffect, useLayoutEffect, useState } from 'react'
import { MailIcon, MenuIcon } from 'lucide-react'

import ThemeToggle from '@/components/layout/theme-toggle'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

type HeaderProps = {
  className?: string
}

const Header = ({ className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Only handle scroll-based active section on the home page
      const path = window.location.pathname

      if (path !== '/') {
        return
      }

      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = section as HTMLElement
        const { offsetTop, offsetHeight } = element

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          if (element.id !== activeSection) {
            setActiveSection(element.id)
          }

          break
        }
      }
    }

    // Initial check
    handleScroll()

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeSection])

  useLayoutEffect(() => {
    // Update activeSection based on the current route using window.location.pathname
    const path = window.location.pathname

    setTimeout(() => {
      if (path === '/' || path === '/#home') {
        setActiveSection('home')
      } else if (path.startsWith('/blog/')) {
        setActiveSection('') // Don't show any active state on blog post pages
      } else if (path.startsWith('/contact')) {
        setActiveSection('') // Don't show any active state on contact page
      } else {
        setActiveSection('') // Default case for other routes
      }
    }, 0)
  }, [])

  return (
    <header
      className={cn(
        'bg-background sticky top-0 z-50 h-16 w-full transition-all duration-300',
        {
          'shadow-sm': isScrolled
        },
        className
      )}
    >
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <a href='/#home' className='flex items-center gap-3'>
          <span className='text-primary text-[20px] font-semibold'>LT</span>
        </a>

        {/* Actions */}
        <div className='flex gap-3'>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
