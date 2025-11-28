import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  children: ReactNode
  level?: 2 | 3
  className?: string
  id?: string
}

/**
 * Semantic section heading component (RSC)
 * Ensures consistent typography and accessibility
 * Based on HOUSESTYLE.md typography guidelines
 */
export const SectionHeading = ({
  children,
  level = 2,
  className,
  id,
}: SectionHeadingProps) => {
  const Component = `h${level}` as const

  const baseStyles = cn(
    // Base heading styles applied via globals.css
    // Additional component-specific styles
    'text-text-primary',
    'mb-6 md:mb-8',
  )

  return (
    <Component id={id} className={cn(baseStyles, className)}>
      {children}
    </Component>
  )
}
