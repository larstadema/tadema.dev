'use client'

import { Github, Linkedin, type LucideIcon, Mail } from 'lucide-react'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import type { ContactType } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface ContactLinkProps {
  type: ContactType
  href: string
  label: string
  newTab?: boolean
  className?: string
  variant?: 'default' | 'icon-only' | 'full'
}

const iconMap: Record<ContactType, LucideIcon> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
}

export function ContactLink({
  type,
  href,
  label,
  newTab = false,
  className,
  variant = 'default',
}: ContactLinkProps) {
  const prefersReducedMotion = useReducedMotion()
  const Icon = iconMap[type]

  const linkProps = newTab
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  if (variant === 'icon-only') {
    return (
      <motion.a
        href={href}
        {...linkProps}
        whileHover={prefersReducedMotion ? undefined : { scale: 1.1 }}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
        className={cn(
          'inline-flex items-center justify-center',
          'w-10 h-10 rounded-full',
          'bg-secondary/50 hover:bg-accent/20',
          'text-muted-foreground hover:text-accent',
          'transition-colors duration-150',
          'ring-1 ring-border hover:ring-accent/30',
          className,
        )}
        aria-label={label}
      >
        <Icon className="w-5 h-5" />
      </motion.a>
    )
  }

  return (
    <motion.a
      href={href}
      {...linkProps}
      whileHover={prefersReducedMotion ? undefined : { x: 4 }}
      className={cn(
        'inline-flex items-center gap-3',
        'text-muted-foreground hover:text-accent',
        'transition-colors duration-150',
        'group',
        className,
      )}
    >
      <span
        className={cn(
          'flex items-center justify-center',
          'w-10 h-10 rounded-full',
          'bg-secondary/50 group-hover:bg-accent/20',
          'transition-colors duration-150',
          'ring-1 ring-border group-hover:ring-accent/30',
        )}
      >
        <Icon className="w-5 h-5" />
      </span>
      {variant === 'full' && (
        <span className="text-base font-medium">{label}</span>
      )}
    </motion.a>
  )
}
