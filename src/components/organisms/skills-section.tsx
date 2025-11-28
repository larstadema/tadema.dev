'use client'

import { Code2, Database, Wrench } from 'lucide-react'
import { motion } from 'motion/react'
import { FloatingSquares } from '@/components/atoms/floating-squares'
import { SectionContainer } from '@/components/layout/section-container'
import { content, type SkillCategory } from '@/content'
import { cn } from '@/lib/utils'

interface SkillsSectionProps {
  className?: string
}

const categoryIcons: Record<SkillCategory, typeof Code2> = {
  frontend: Code2,
  backend: Database,
  tools: Wrench,
}

/**
 * Skills section - Clean cards with subtle reveals
 */
export function SkillsSection({ className }: SkillsSectionProps) {
  const categories = Object.keys(content.skills.categories) as SkillCategory[]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  }

  return (
    <SectionContainer
      id="skills"
      as="section"
      maxWidth="xl"
      className={cn('relative overflow-hidden', className)}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern-sm opacity-20" />
        <FloatingSquares variant="section" />
      </div>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.span
          className={cn(
            'inline-block px-4 py-1.5 mb-6',
            'text-xs font-medium uppercase tracking-widest',
            'text-accent/80 bg-accent/10',
            'rounded-full border border-accent/20',
          )}
        >
          {content.skills.sectionLabel}
        </motion.span>

        <h2
          className={cn(
            'text-4xl md:text-5xl font-bold',
            'tracking-tight',
            'text-foreground mb-6',
          )}
        >
          {content.skills.heading}
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {content.skills.description}
        </p>
      </motion.div>

      {/* Skills grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid md:grid-cols-3 gap-6 lg:gap-8"
      >
        {categories.map((category) => {
          const categoryContent = content.skills.categories[category]
          const Icon = categoryIcons[category]

          return (
            <motion.div
              key={category}
              variants={cardVariants}
              className={cn(
                'group relative',
                'p-8 rounded-3xl',
                'bg-card/40 backdrop-blur-sm',
                'border border-border hover:border-accent/30',
                'transition-colors duration-300',
                'overflow-hidden',
              )}
            >
              {/* Corner accent */}
              <div
                className={cn(
                  'absolute -top-12 -right-12 w-32 h-32',
                  'bg-accent/5 rounded-3xl',
                  'rotate-12',
                )}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={cn(
                    'inline-flex items-center justify-center',
                    'w-14 h-14 mb-6',
                    'rounded-2xl',
                    'bg-accent/10',
                    'border border-accent/20',
                  )}
                >
                  <Icon className="w-7 h-7 text-accent" />
                </div>

                {/* Header */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {categoryContent.label}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {categoryContent.description}
                </p>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {categoryContent.skills.map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        'px-3 py-1.5 text-sm font-medium',
                        'bg-secondary/60 hover:bg-accent/10',
                        'text-muted-foreground hover:text-accent',
                        'rounded-lg',
                        'border border-border hover:border-accent/20',
                        'transition-colors duration-200',
                        'cursor-default',
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionContainer>
  )
}
