'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface ThemeLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

/**
 * Theme-aware logo - switches between light/dark SVG variants
 */
export function ThemeLogo({ className, size = 'md' }: ThemeLogoProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className={cn(sizeClasses[size], 'w-auto', className)} />
  }

  const isLight = theme === 'light'
  const logoSrc = isLight
    ? '/logo/tadema-full-logo-light-400x160.svg'
    : '/logo/tadema-full-logo-dark-400x160.svg'

  return (
    <img
      src={logoSrc}
      alt="Tadema"
      className={cn(sizeClasses[size], 'w-auto', className)}
    />
  )
}
