'use client'

import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { cn } from '@/lib/utils'

interface FloatingSquaresProps {
  className?: string
  variant?: 'hero' | 'section' | 'minimal'
}

interface Square {
  size: string
  position: string
  rotation: string
  opacity: string
  accent?: boolean
  // Hide on mobile for performance
  hideOnMobile?: boolean
  // CSS animation config
  animation: {
    name: string
    duration: string
    delay: string
  }
}

/**
 * Floating decorative squares with CSS animations for better performance
 * Uses GPU-accelerated transforms and reduced squares on mobile
 */
export function FloatingSquares({
  className,
  variant = 'hero',
}: FloatingSquaresProps) {
  const prefersReducedMotion = useReducedMotion()

  const squares: Record<'hero' | 'section' | 'minimal', Square[]> = {
    hero: [
      // Large squares - slow orbits (visible on all screens)
      {
        size: 'w-80 h-80',
        position: 'absolute -top-20 -right-20',
        rotation: 'rotate-12',
        opacity: 'opacity-[0.04]',
        animation: { name: 'float-1', duration: '45s', delay: '0s' },
      },
      {
        size: 'w-64 h-64',
        position: 'absolute top-1/3 -left-32',
        rotation: '-rotate-6',
        opacity: 'opacity-[0.03]',
        hideOnMobile: true,
        animation: { name: 'float-2', duration: '55s', delay: '5s' },
      },
      // Medium squares - hidden on mobile for perf
      {
        size: 'w-48 h-48',
        position: 'absolute bottom-1/4 right-1/3',
        rotation: 'rotate-3',
        opacity: 'opacity-[0.05]',
        hideOnMobile: true,
        animation: { name: 'float-3', duration: '40s', delay: '10s' },
      },
      {
        size: 'w-32 h-32',
        position: 'absolute top-1/2 right-1/4',
        rotation: '-rotate-12',
        opacity: 'opacity-[0.06]',
        hideOnMobile: true,
        animation: { name: 'float-1', duration: '35s', delay: '3s' },
      },
      // Small accent squares
      {
        size: 'w-16 h-16',
        position: 'absolute top-1/4 right-1/2',
        rotation: 'rotate-45',
        opacity: 'opacity-[0.08]',
        accent: true,
        animation: { name: 'float-2', duration: '25s', delay: '2s' },
      },
      {
        size: 'w-12 h-12',
        position: 'absolute bottom-1/2 left-1/3',
        rotation: '-rotate-12',
        opacity: 'opacity-[0.06]',
        accent: true,
        hideOnMobile: true,
        animation: { name: 'float-3', duration: '22s', delay: '6s' },
      },
    ],
    section: [
      {
        size: 'w-48 h-48',
        position: 'absolute -top-12 -right-12',
        rotation: 'rotate-6',
        opacity: 'opacity-[0.03]',
        animation: { name: 'float-1', duration: '40s', delay: '0s' },
      },
      {
        size: 'w-32 h-32',
        position: 'absolute bottom-0 -left-8',
        rotation: '-rotate-12',
        opacity: 'opacity-[0.04]',
        hideOnMobile: true,
        animation: { name: 'float-2', duration: '50s', delay: '5s' },
      },
      {
        size: 'w-20 h-20',
        position: 'absolute top-1/2 right-1/4',
        rotation: 'rotate-12',
        opacity: 'opacity-[0.05]',
        accent: true,
        hideOnMobile: true,
        animation: { name: 'float-3', duration: '30s', delay: '2s' },
      },
    ],
    minimal: [
      {
        size: 'w-24 h-24',
        position: 'absolute -top-6 -right-6',
        rotation: 'rotate-12',
        opacity: 'opacity-[0.04]',
        animation: { name: 'float-1', duration: '35s', delay: '0s' },
      },
      {
        size: 'w-16 h-16',
        position: 'absolute bottom-0 -left-4',
        rotation: '-rotate-6',
        opacity: 'opacity-[0.03]',
        hideOnMobile: true,
        animation: { name: 'float-2', duration: '45s', delay: '3s' },
      },
    ],
  }

  const selectedSquares = squares[variant]

  return (
    <div
      className={cn(
        'absolute inset-0 overflow-hidden pointer-events-none',
        className,
      )}
      aria-hidden="true"
    >
      {selectedSquares.map((square, index) => (
        <div
          key={`${square.position}-${index}`}
          className={cn(
            square.size,
            square.position,
            square.rotation,
            square.opacity,
            'rounded-2xl',
            'will-change-transform',
            square.accent
              ? 'bg-accent border border-accent/20'
              : 'bg-foreground/5 border border-foreground/5',
            // Hide on mobile if specified
            square.hideOnMobile && 'hidden md:block',
          )}
          style={
            prefersReducedMotion
              ? {}
              : {
                  animation: `${square.animation.name} ${square.animation.duration} ${square.animation.delay} infinite ease-in-out`,
                }
          }
        />
      ))}
    </div>
  )
}
