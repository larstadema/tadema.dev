'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { cn } from '@/lib/utils'

interface ProfileImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function ProfileImage({
  src,
  alt,
  className,
  priority = false,
}: ProfileImageProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={
        prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }
      }
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.6,
        delay: prefersReducedMotion ? 0 : 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        'relative overflow-hidden rounded-2xl',
        'ring-1 ring-foreground/10',
        'shadow-2xl shadow-black/20',
        className,
      )}
    >
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-br from-accent/10 via-transparent to-transparent z-10 pointer-events-none" />

      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        priority={priority}
        className="object-cover w-full h-full"
      />
    </motion.div>
  )
}
