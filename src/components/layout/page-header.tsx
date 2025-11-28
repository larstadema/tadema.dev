'use client'

import { useEffect, useState } from 'react'
import { ThemeLogo } from '@/components/atoms/theme-logo'
import { ThemeToggle } from '@/components/atoms/theme-toggle'
import { content } from '@/content'
import { cn } from '@/lib/utils'

interface PageHeaderProps {
  className?: string
}

/**
 * Page header with glass morphism effect
 * Reveals background on scroll for depth
 */
export const PageHeader = ({ className }: PageHeaderProps) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-300 ease-out',
        className,
      )}
    >
      {/* Background with glass effect - reveals on scroll */}
      <div
        className={cn(
          'absolute inset-0 transition-all duration-300',
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5'
            : 'bg-transparent',
        )}
      />

      {/* Content */}
      <div className="relative px-5 sm:px-6 md:px-8 py-4 md:py-5">
        {/* Skip to main content link */}
        <a
          href="#main-content"
          className={cn(
            'sr-only focus:not-sr-only',
            'focus:absolute focus:top-4 focus:left-4 focus:z-50',
            'focus:px-4 focus:py-2',
            'focus:bg-accent focus:text-accent-foreground',
            'focus:rounded-md',
            'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          )}
        >
          {content.common.skipToContent}
        </a>

        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
          {/* Logo */}
          <ThemeLogo size="md" />

          {/* Theme toggle with subtle background */}
          <div
            className={cn(
              'p-1 rounded-full transition-colors duration-300',
              scrolled ? 'bg-transparent' : 'bg-background/30 backdrop-blur-sm',
            )}
          >
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
