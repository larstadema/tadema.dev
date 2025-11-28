'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { FloatingSquares } from '@/components/atoms/floating-squares'
import { ThemeLogo } from '@/components/atoms/theme-logo'
import { ProfileImage } from '@/components/molecules/profile-image'
import { Button } from '@/components/ui/button'
import { content } from '@/content'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  className?: string
}

/**
 * Hero section - Clean professional aesthetic
 * Subtle animations, focus on content
 */
export function HeroSection({ className }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion()

  const emailContact = content.contacts.find((c) => c.type === 'email')
  const linkedinContact = content.contacts.find((c) => c.type === 'linkedin')

  // Simple fade-in sequence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
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

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  }

  return (
    <section
      id="hero"
      className={cn(
        'relative min-h-screen flex items-center overflow-hidden',
        'bg-background',
        className,
      )}
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-mesh-gradient" />

        {/* Radial gradient spotlight */}
        <div
          className={cn(
            'absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[800px]',
            'bg-gradient-radial from-accent/10 via-accent/5 to-transparent',
            'blur-3xl',
          )}
        />

        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Floating squares */}
      <FloatingSquares variant="hero" />

      {/* Content */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial={prefersReducedMotion ? 'visible' : 'hidden'}
            animate="visible"
            className="space-y-8 lg:space-y-10"
          >
            {/* Logo */}
            <motion.div variants={itemVariants}>
              <ThemeLogo size="lg" />
            </motion.div>

            {/* Name - dramatic display */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1
                className={cn(
                  'text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
                  'font-extrabold tracking-tighter',
                  'leading-[0.9]',
                  'text-foreground',
                )}
              >
                {content.profile.firstName}
                <br />
                <span className="text-gradient-accent">
                  {content.profile.lastName}
                </span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants}>
              <p
                className={cn(
                  'text-xl sm:text-2xl font-medium',
                  'text-accent/90 tracking-wide',
                  'border-l-2 border-accent/50 pl-4',
                )}
              >
                {content.profile.title}
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className={cn(
                'text-lg sm:text-xl',
                'text-muted-foreground leading-relaxed',
                'max-w-lg',
              )}
            >
              {content.profile.tagline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              {emailContact && (
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    'px-8 py-6 text-base font-semibold',
                    'bg-accent hover:bg-accent-hover active:bg-accent-active',
                    'shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30',
                    'transition-all duration-300',
                    'group',
                  )}
                >
                  <a href={emailContact.href}>
                    {content.actions.getInTouch}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              )}
              {linkedinContact && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className={cn(
                    'px-8 py-6 text-base font-semibold',
                    'border-border hover:border-accent/50',
                    'bg-transparent hover:bg-accent/5',
                    'backdrop-blur-sm',
                    'transition-all duration-300',
                  )}
                >
                  <a
                    href={linkedinContact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.actions.linkedin}
                  </a>
                </Button>
              )}
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className={cn(
                'flex items-center gap-8 pt-8',
                'border-t border-border',
              )}
            >
              <div>
                <p className="text-3xl font-bold text-foreground">
                  {content.hero.stats[0].value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {content.hero.stats[0].label}
                </p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">
                  {content.hero.stats[1].value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {content.hero.stats[1].label}
                </p>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="hidden sm:block">
                <p className="text-3xl font-bold text-accent">
                  {content.hero.stats[2].value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {content.hero.stats[2].label}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile image section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end"
          >
            {/* Subtle decorative ring */}
            <div
              className={cn(
                'absolute inset-0 flex items-center justify-center',
              )}
            >
              <div
                className={cn(
                  'w-[320px] h-80 sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px]',
                  'rounded-full',
                  'border border-border',
                )}
              />
            </div>

            {/* Subtle glow behind image */}
            <div
              className={cn(
                'absolute inset-0 flex items-center justify-center',
              )}
            >
              <div
                className={cn(
                  'w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80',
                  'bg-linear-to-br from-accent/15 via-accent/5 to-transparent',
                  'rounded-full blur-3xl',
                )}
              />
            </div>

            <ProfileImage
              src="/images/lars_1200x1200.webp"
              alt={`${content.profile.name} - ${content.profile.title}`}
              priority
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 z-10"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={cn(
          'absolute bottom-8 left-1/2 -translate-x-1/2',
          'flex flex-col items-center gap-2',
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          {content.common.scroll}
        </span>
        <div className="w-px h-8 bg-linear-to-b from-accent/50 to-transparent" />
      </motion.div>

      {/* Bottom fade */}
      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 h-48',
          'bg-linear-to-t from-background via-background/50 to-transparent',
          'pointer-events-none',
        )}
      />
    </section>
  )
}
