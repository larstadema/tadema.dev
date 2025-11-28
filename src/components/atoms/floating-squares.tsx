'use client'

import { motion } from 'motion/react'
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
  // Orbital animation config
  orbit: {
    radiusX: number
    radiusY: number
    duration: number
    delay: number
    direction: 1 | -1 // 1 = clockwise, -1 = counter-clockwise
    rotationAmount: number
  }
}

/**
 * Floating decorative squares with smooth orbital animations
 * Creates depth and visual interest throughout the page
 */
export function FloatingSquares({
  className,
  variant = 'hero',
}: FloatingSquaresProps) {
  const prefersReducedMotion = useReducedMotion()

  const squares: Record<'hero' | 'section' | 'minimal', Square[]> = {
    hero: [
      // Large squares - slow, wide orbits
      {
        size: 'w-80 h-80',
        position: 'absolute -top-20 -right-20',
        rotation: 'rotate-12',
        opacity: 'opacity-[0.04]',
        orbit: {
          radiusX: 40,
          radiusY: 25,
          duration: 45,
          delay: 0,
          direction: 1,
          rotationAmount: 8,
        },
      },
      {
        size: 'w-64 h-64',
        position: 'absolute top-1/3 -left-32',
        rotation: '-rotate-6',
        opacity: 'opacity-[0.03]',
        orbit: {
          radiusX: 35,
          radiusY: 50,
          duration: 55,
          delay: 5,
          direction: -1,
          rotationAmount: 12,
        },
      },
      {
        size: 'w-48 h-48',
        position: 'absolute bottom-1/4 right-1/3',
        rotation: 'rotate-3',
        opacity: 'opacity-[0.05]',
        orbit: {
          radiusX: 30,
          radiusY: 20,
          duration: 40,
          delay: 10,
          direction: 1,
          rotationAmount: 6,
        },
      },
      // Medium squares - medium speed orbits
      {
        size: 'w-32 h-32',
        position: 'absolute top-1/2 right-1/4',
        rotation: '-rotate-12',
        opacity: 'opacity-[0.06]',
        orbit: {
          radiusX: 25,
          radiusY: 35,
          duration: 35,
          delay: 3,
          direction: -1,
          rotationAmount: 15,
        },
      },
      {
        size: 'w-24 h-24',
        position: 'absolute bottom-1/3 left-1/4',
        rotation: 'rotate-6',
        opacity: 'opacity-[0.04]',
        orbit: {
          radiusX: 20,
          radiusY: 30,
          duration: 30,
          delay: 8,
          direction: 1,
          rotationAmount: 10,
        },
      },
      // Small squares - faster, tighter orbits with accent
      {
        size: 'w-16 h-16',
        position: 'absolute top-1/4 right-1/2',
        rotation: 'rotate-45',
        opacity: 'opacity-[0.08]',
        accent: true,
        orbit: {
          radiusX: 15,
          radiusY: 25,
          duration: 25,
          delay: 2,
          direction: -1,
          rotationAmount: 20,
        },
      },
      {
        size: 'w-12 h-12',
        position: 'absolute bottom-1/2 left-1/3',
        rotation: '-rotate-12',
        opacity: 'opacity-[0.06]',
        accent: true,
        orbit: {
          radiusX: 18,
          radiusY: 12,
          duration: 22,
          delay: 6,
          direction: 1,
          rotationAmount: 25,
        },
      },
    ],
    section: [
      {
        size: 'w-48 h-48',
        position: 'absolute -top-12 -right-12',
        rotation: 'rotate-6',
        opacity: 'opacity-[0.03]',
        orbit: {
          radiusX: 25,
          radiusY: 15,
          duration: 40,
          delay: 0,
          direction: 1,
          rotationAmount: 8,
        },
      },
      {
        size: 'w-32 h-32',
        position: 'absolute bottom-0 -left-8',
        rotation: '-rotate-12',
        opacity: 'opacity-[0.04]',
        orbit: {
          radiusX: 20,
          radiusY: 30,
          duration: 50,
          delay: 5,
          direction: -1,
          rotationAmount: 10,
        },
      },
      {
        size: 'w-20 h-20',
        position: 'absolute top-1/2 right-1/4',
        rotation: 'rotate-12',
        opacity: 'opacity-[0.05]',
        accent: true,
        orbit: {
          radiusX: 15,
          radiusY: 20,
          duration: 30,
          delay: 2,
          direction: 1,
          rotationAmount: 15,
        },
      },
    ],
    minimal: [
      {
        size: 'w-24 h-24',
        position: 'absolute -top-6 -right-6',
        rotation: 'rotate-12',
        opacity: 'opacity-[0.04]',
        orbit: {
          radiusX: 15,
          radiusY: 10,
          duration: 35,
          delay: 0,
          direction: 1,
          rotationAmount: 6,
        },
      },
      {
        size: 'w-16 h-16',
        position: 'absolute bottom-0 -left-4',
        rotation: '-rotate-6',
        opacity: 'opacity-[0.03]',
        orbit: {
          radiusX: 12,
          radiusY: 18,
          duration: 45,
          delay: 3,
          direction: -1,
          rotationAmount: 8,
        },
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
        <motion.div
          key={`${square.position}-${index}`}
          className={cn(
            square.size,
            square.position,
            square.rotation,
            square.opacity,
            'rounded-2xl',
            square.accent
              ? 'bg-accent border border-accent/20'
              : 'bg-foreground/5 border border-foreground/5',
          )}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: [
                    0,
                    square.orbit.radiusX * square.orbit.direction,
                    0,
                    -square.orbit.radiusX * square.orbit.direction,
                    0,
                  ],
                  y: [0, -square.orbit.radiusY, 0, square.orbit.radiusY, 0],
                  rotate: [
                    0,
                    square.orbit.rotationAmount * square.orbit.direction,
                    0,
                    -square.orbit.rotationAmount * square.orbit.direction,
                    0,
                  ],
                  scale: [1, 1.02, 1, 0.98, 1],
                }
          }
          transition={{
            duration: square.orbit.duration,
            delay: square.orbit.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
