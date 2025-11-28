'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { cn } from '@/lib/utils'

interface FloatingSquaresProps {
  className?: string
  variant?: 'hero' | 'section' | 'minimal'
}

/**
 * Floating decorative squares echoing the logo's T-pattern
 * Creates depth and visual interest throughout the page
 */
export function FloatingSquares({
  className,
  variant = 'hero',
}: FloatingSquaresProps) {
  const prefersReducedMotion = useReducedMotion()

  const squares = {
    hero: [
      // Large squares - primary layer
      {
        size: 'w-80 h-80',
        position: 'absolute -top-20 -right-20',
        rotation: 'rotate-12',
        delay: 0,
        duration: 8,
        opacity: 'opacity-[0.04]',
      },
      {
        size: 'w-64 h-64',
        position: 'absolute top-1/3 -left-32',
        rotation: '-rotate-6',
        delay: 2,
        duration: 10,
        opacity: 'opacity-[0.03]',
      },
      {
        size: 'w-48 h-48',
        position: 'absolute bottom-1/4 right-1/3',
        rotation: 'rotate-3',
        delay: 4,
        duration: 7,
        opacity: 'opacity-[0.05]',
      },
      // Medium squares - secondary layer
      {
        size: 'w-32 h-32',
        position: 'absolute top-1/2 right-1/4',
        rotation: '-rotate-12',
        delay: 1,
        duration: 9,
        opacity: 'opacity-[0.06]',
      },
      {
        size: 'w-24 h-24',
        position: 'absolute bottom-1/3 left-1/4',
        rotation: 'rotate-6',
        delay: 3,
        duration: 6,
        opacity: 'opacity-[0.04]',
      },
      // Small squares - accent layer
      {
        size: 'w-16 h-16',
        position: 'absolute top-1/4 right-1/2',
        rotation: 'rotate-45',
        delay: 1.5,
        duration: 5,
        opacity: 'opacity-[0.08]',
        accent: true,
      },
      {
        size: 'w-12 h-12',
        position: 'absolute bottom-1/2 left-1/3',
        rotation: '-rotate-12',
        delay: 2.5,
        duration: 7,
        opacity: 'opacity-[0.06]',
        accent: true,
      },
    ],
    section: [
      {
        size: 'w-48 h-48',
        position: 'absolute -top-12 -right-12',
        rotation: 'rotate-6',
        delay: 0,
        duration: 8,
        opacity: 'opacity-[0.03]',
      },
      {
        size: 'w-32 h-32',
        position: 'absolute bottom-0 -left-8',
        rotation: '-rotate-12',
        delay: 2,
        duration: 10,
        opacity: 'opacity-[0.04]',
      },
      {
        size: 'w-20 h-20',
        position: 'absolute top-1/2 right-1/4',
        rotation: 'rotate-12',
        delay: 1,
        duration: 6,
        opacity: 'opacity-[0.05]',
        accent: true,
      },
    ],
    minimal: [
      {
        size: 'w-24 h-24',
        position: 'absolute -top-6 -right-6',
        rotation: 'rotate-12',
        delay: 0,
        duration: 8,
        opacity: 'opacity-[0.04]',
      },
      {
        size: 'w-16 h-16',
        position: 'absolute bottom-0 -left-4',
        rotation: '-rotate-6',
        delay: 2,
        duration: 10,
        opacity: 'opacity-[0.03]',
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
      {selectedSquares.map((square) => (
        <motion.div
          key={square.position}
          className={cn(
            square.size,
            square.position,
            square.rotation,
            square.opacity,
            'rounded-2xl',
            'accent' in square && square.accent
              ? 'bg-accent border border-accent/20'
              : 'bg-foreground/5 border border-foreground/5',
          )}
          initial={{
            y: 0,
            rotate: 0,
          }}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [-10, 10, -10],
                  rotate: [-2, 2, -2],
                }
          }
          transition={{
            duration: square.duration,
            delay: square.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
