'use client'

import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { cn } from '@/lib/utils'

interface SkillBadgeProps {
  skill: string
  className?: string
}

/**
 * Individual skill badge with subtle hover interaction
 */
export function SkillBadge({ skill, className }: SkillBadgeProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      whileHover={prefersReducedMotion ? undefined : { scale: 1.05, y: -2 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.15 }}
    >
      <Badge
        variant="secondary"
        className={cn(
          'px-3 py-1.5 text-sm font-medium',
          'bg-bg-tertiary/60 hover:bg-accent/15',
          'text-text-secondary hover:text-accent',
          'border border-border-subtle hover:border-accent/30',
          'transition-colors duration-150',
          'cursor-default select-none',
          className,
        )}
      >
        {skill}
      </Badge>
    </motion.div>
  )
}
