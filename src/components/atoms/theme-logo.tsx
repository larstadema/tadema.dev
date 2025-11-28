'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface ThemeLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeConfig = {
  sm: { height: 32, width: 80 },
  md: { height: 40, width: 100 },
  lg: { height: 48, width: 120 },
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

  const { height, width } = sizeConfig[size]

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div
        className={cn('inline-block', className)}
        style={{ height, width }}
      />
    )
  }

  const isLight = theme === 'light'
  const logoSrc = isLight
    ? '/logo/tadema-full-logo-light-400x160.svg'
    : '/logo/tadema-full-logo-dark-400x160.svg'

  return (
    <Image
      src={logoSrc}
      alt="Tadema"
      width={width}
      height={height}
      className={cn(className)}
      priority
    />
  )
}
