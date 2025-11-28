'use client'

import { Quote } from 'lucide-react'
import { motion } from 'motion/react'
import { FloatingSquares } from '@/components/atoms/floating-squares'
import { SectionContainer } from '@/components/layout/section-container'
import { PROFILE } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface AboutSectionProps {
  className?: string
}

/**
 * About section - Editorial layout with pull quote
 */
export function AboutSection({ className }: AboutSectionProps) {
  // Split about text into paragraphs
  const paragraphs = PROFILE.about.split('\n\n').filter(Boolean)

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

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
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
      id="about"
      as="section"
      maxWidth="xl"
      className={cn('relative overflow-hidden', className)}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <FloatingSquares variant="minimal" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start"
      >
        {/* Left column - Heading and decorative elements */}
        <motion.div variants={itemVariants} className="lg:sticky lg:top-32">
          {/* Section label */}
          <span
            className={cn(
              'inline-block px-4 py-1.5 mb-6',
              'text-xs font-medium uppercase tracking-widest',
              'text-accent/80 bg-accent/10',
              'rounded-full border border-accent/20',
            )}
          >
            About Me
          </span>

          <h2
            className={cn(
              'text-4xl md:text-5xl font-bold',
              'tracking-tight leading-tight',
              'text-foreground mb-8',
            )}
          >
            From Concept
            <br />
            <span className="text-gradient-accent">to Production</span>
          </h2>

          {/* Accent line */}
          <div
            className={cn(
              'w-24 h-1 rounded-full mb-8',
              'bg-linear-to-r from-accent via-accent/50 to-transparent',
            )}
          />

          {/* Pull quote */}
          <div className="relative pl-6 border-l-2 border-accent/30">
            <Quote
              className={cn(
                'absolute -left-4 -top-2 w-8 h-8',
                'text-accent/20',
              )}
            />
            <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
              &ldquo;The best code is the code your team can maintain.&rdquo;
            </blockquote>
          </div>
        </motion.div>

        {/* Right column - Content */}
        <motion.div variants={containerVariants} className="space-y-8">
          {/* Paragraphs */}
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={`paragraph-${paragraph.slice(0, 20)}`}
              variants={itemVariants}
              className={cn(
                'text-lg leading-relaxed',
                index === 0
                  ? 'text-foreground text-xl font-medium'
                  : 'text-muted-foreground',
              )}
            >
              {paragraph}
            </motion.p>
          ))}

          {/* Stats grid */}
          <motion.div
            variants={itemVariants}
            className={cn(
              'grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 mt-8',
              'border-t border-border',
            )}
          >
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '4+', label: 'As Architect' },
              { value: '50+', label: 'Projects' },
              { value: '100%', label: 'Remote Ready' },
            ].map((stat) => (
              <div
                key={stat.label}
                className={cn(
                  'p-4 rounded-2xl',
                  'bg-card/30 hover:bg-card/50',
                  'border border-border hover:border-accent/20',
                  'transition-colors duration-300',
                  'text-center',
                )}
              >
                <p className="text-2xl sm:text-3xl font-bold text-accent mb-1">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Expertise highlight */}
          <motion.div
            variants={itemVariants}
            className={cn(
              'relative p-8 rounded-3xl mt-8',
              'bg-linear-to-br from-accent/10 via-card/50 to-card/30',
              'border border-accent/20',
              'overflow-hidden',
            )}
          >
            {/* Corner decoration */}
            <div
              className={cn(
                'absolute -top-8 -right-8 w-24 h-24',
                'bg-accent/10 rounded-2xl rotate-12',
              )}
            />
            <div
              className={cn(
                'absolute -bottom-6 -left-6 w-16 h-16',
                'bg-accent/5 rounded-xl -rotate-6',
              )}
            />

            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'TypeScript',
                  'React',
                  'Next.js',
                  'Node.js',
                  'GraphQL',
                  'System Design',
                  'Team Leadership',
                  'Enterprise Architecture',
                ].map((skill) => (
                  <span
                    key={skill}
                    className={cn(
                      'px-4 py-2 text-sm font-medium',
                      'bg-background/50 backdrop-blur-sm',
                      'text-foreground',
                      'rounded-full',
                      'border border-accent/30',
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}
