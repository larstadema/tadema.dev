'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { FloatingSquares } from '@/components/atoms/floating-squares'
import { ProfileImage } from '@/components/molecules/profile-image'
import { Button } from '@/components/ui/button'
import { content } from '@/content'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  className?: string
}

/**
 * Hero section - Mobile-first responsive design
 * Profile image and stats visible on all screen sizes
 */
export function HeroSection({ className }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion()

  const emailContact = content.contacts.find((c) => c.type === 'email')
  const linkedinContact = content.contacts.find((c) => c.type === 'linkedin')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.1,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  }

  return (
    <section
      id="hero"
      className={cn(
        'relative min-h-screen flex flex-col overflow-hidden',
        'bg-background',
        className,
      )}
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-mesh-gradient" />
        <div
          className={cn(
            'absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[800px]',
            'bg-gradient-radial from-accent/10 via-accent/5 to-transparent',
            'blur-3xl',
          )}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <FloatingSquares variant="hero" />

      {/* Main content area - top aligned on mobile, centered on desktop */}
      <div className="relative md:flex-1 flex items-start md:items-center w-full max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 lg:px-20 pt-24 sm:pt-28 md:pt-24">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-center w-full">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial={prefersReducedMotion ? 'visible' : 'hidden'}
            animate="visible"
            className="space-y-5 sm:space-y-6 lg:space-y-8"
          >
            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1
                className={cn(
                  'text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl',
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
                  'text-base sm:text-lg md:text-xl lg:text-2xl font-medium',
                  'text-accent/90 tracking-wide',
                  'border-l-2 border-accent/50 pl-3 sm:pl-4',
                )}
              >
                {content.profile.title}
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className={cn(
                'text-sm sm:text-base md:text-lg lg:text-xl',
                'text-muted-foreground leading-relaxed',
                'max-w-lg',
              )}
            >
              {content.profile.tagline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-1"
            >
              {emailContact && (
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    'h-11 sm:h-12 px-5 sm:px-6 text-sm sm:text-base font-semibold',
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
                    'h-11 sm:h-12 px-5 sm:px-6 text-sm sm:text-base font-semibold',
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

            {/* Stats - 3 column grid on all screens */}
            <motion.div
              variants={itemVariants}
              className={cn(
                'grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-5 sm:pt-6',
                'border-t border-border',
              )}
            >
              {content.hero.stats.map((stat, index) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p
                    className={cn(
                      'text-xl sm:text-2xl md:text-3xl font-bold',
                      index === 2 ? 'text-accent' : 'text-foreground',
                    )}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Desktop: Profile image on right */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative hidden md:flex justify-center lg:justify-end"
          >
            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={cn(
                  'w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px]',
                  'rounded-full',
                  'border border-border',
                )}
              />
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={cn(
                  'w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80',
                  'bg-linear-to-br from-accent/15 via-accent/5 to-transparent',
                  'rounded-full blur-3xl',
                )}
              />
            </div>

            <ProfileImage
              src="/images/lars_new_1200x1200.webp"
              alt={`${content.profile.name} - ${content.profile.title}`}
              priority
              className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 z-10"
            />
          </motion.div>
        </div>
      </div>

      {/* Mobile: Image + scroll indicator at bottom */}
      <div className="relative flex flex-col items-center pt-8 pb-8 md:hidden">
        {/* Mobile profile image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative mb-4"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={cn(
                'w-28 h-28',
                'bg-linear-to-br from-accent/20 via-accent/5 to-transparent',
                'rounded-full blur-xl',
              )}
            />
          </div>
          <ProfileImage
            src="/images/lars_new_1200x1200.webp"
            alt={`${content.profile.name}`}
            priority
            className="relative w-24 h-24 z-10"
          />
        </motion.div>

        {/* Mobile scroll indicator */}
        <motion.div
          className="flex flex-col items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.35 }}
        >
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
            {content.common.scroll}
          </span>
          <div className="w-px h-5 bg-linear-to-b from-accent/50 to-transparent" />
        </motion.div>
      </div>

      {/* Desktop scroll indicator */}
      <motion.div
        className={cn(
          'absolute bottom-8 left-1/2 -translate-x-1/2 z-20',
          'hidden md:flex flex-col items-center gap-2',
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.35 }}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          {content.common.scroll}
        </span>
        <div className="w-px h-8 bg-linear-to-b from-accent/50 to-transparent" />
      </motion.div>

      {/* Bottom fade */}
      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-48',
          'bg-linear-to-t from-background via-background/50 to-transparent',
          'pointer-events-none',
        )}
      />
    </section>
  )
}
