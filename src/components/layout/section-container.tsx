import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionContainerProps {
  children: ReactNode
  className?: string
  id?: string
  as?: 'section' | 'div' | 'article' | 'aside'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'prose' | 'full'
}

/**
 * Reusable section container (RSC)
 * Provides consistent spacing and max-width for sections
 * Based on HOUSESTYLE.md spacing and container guidelines
 */
export const SectionContainer = ({
  children,
  className,
  id,
  as: Component = 'section',
  maxWidth = 'xl',
}: SectionContainerProps) => {
  const maxWidthClasses = {
    sm: 'max-w-[640px]',
    md: 'max-w-[768px]',
    lg: 'max-w-[1024px]',
    xl: 'max-w-[1280px]',
    '2xl': 'max-w-[1536px]',
    prose: 'max-w-[65ch]',
    full: 'max-w-full',
  }

  return (
    <Component
      id={id}
      className={cn(
        // Vertical spacing
        'py-12 md:py-16 lg:py-20',
        // Horizontal spacing and centering
        'px-4 md:px-8 lg:px-16',
        'mx-auto',
        // Max width
        maxWidthClasses[maxWidth],
        // Custom classes
        className,
      )}
    >
      {children}
    </Component>
  )
}
