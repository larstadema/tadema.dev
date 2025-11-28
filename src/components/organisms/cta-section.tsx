'use client'

import { ArrowRight, Mail, Send } from 'lucide-react'
import { motion } from 'motion/react'
import { FloatingSquares } from '@/components/atoms/floating-squares'
import { SectionContainer } from '@/components/layout/section-container'
import { Button } from '@/components/ui/button'
import { CONTACTS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface CTASectionProps {
  className?: string
}

/**
 * Call-to-action section - Clean centered design
 */
export function CTASection({ className }: CTASectionProps) {
  const emailContact = CONTACTS.find((c) => c.type === 'email')

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
      id="contact"
      as="section"
      maxWidth="lg"
      className={cn('relative overflow-hidden', className)}
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        {/* Radial gradient */}
        <div
          className={cn(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            'w-[600px] h-[600px]',
            'bg-gradient-radial from-accent/15 via-accent/5 to-transparent',
            'blur-3xl',
          )}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern-sm opacity-10" />

        {/* Floating squares */}
        <FloatingSquares variant="minimal" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative flex flex-col items-center text-center"
      >
        {/* Decorative element */}
        <motion.div
          variants={itemVariants}
          className={cn(
            'w-20 h-20 mb-8',
            'flex items-center justify-center',
            'rounded-2xl rotate-6',
            'bg-accent/10 border border-accent/30',
          )}
        >
          <Send className="w-8 h-8 text-accent -rotate-6" />
        </motion.div>

        {/* Section label */}
        <motion.span
          variants={itemVariants}
          className={cn(
            'inline-block px-4 py-1.5 mb-6',
            'text-xs font-medium uppercase tracking-widest',
            'text-accent/80 bg-accent/10',
            'rounded-full border border-accent/20',
          )}
        >
          Get in Touch
        </motion.span>

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className={cn(
            'text-4xl md:text-5xl lg:text-6xl font-bold',
            'tracking-tight leading-[1.1]',
            'text-foreground mb-6',
          )}
        >
          Let&apos;s Build
          <br />
          <span className="text-gradient-accent">Something Great</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Available for freelance consulting, technical leadership, and frontend
          architecture projects. Let&apos;s discuss how I can help your team
          succeed.
        </motion.p>

        {/* Primary CTA */}
        {emailContact && (
          <motion.div variants={itemVariants}>
            <Button
              asChild
              size="lg"
              className={cn(
                'px-10 py-7 text-lg font-semibold',
                'bg-accent hover:bg-accent-hover active:bg-accent-active',
                'shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30',
                'transition-all duration-300',
                'group',
              )}
            >
              <a href={emailContact.href}>
                <Mail className="mr-3 h-5 w-5" />
                Start a Conversation
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        )}

        {/* Decorative lines */}
        <motion.div
          variants={itemVariants}
          className={cn(
            'absolute -left-20 top-1/2 -translate-y-1/2',
            'w-16 h-px bg-gradient-to-r from-transparent to-accent/30',
            'hidden lg:block',
          )}
        />
        <motion.div
          variants={itemVariants}
          className={cn(
            'absolute -right-20 top-1/2 -translate-y-1/2',
            'w-16 h-px bg-gradient-to-l from-transparent to-accent/30',
            'hidden lg:block',
          )}
        />
      </motion.div>
    </SectionContainer>
  )
}
