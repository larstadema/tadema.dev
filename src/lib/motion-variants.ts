import type { Variants } from 'motion/react'

/**
 * Animation variants for Motion components
 * Based on HOUSESTYLE.md animation guidelines
 */

// Hero section entrance animation
export const heroVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0, 0, 0.2, 1], // ease-out
    },
  },
  reduced: {
    opacity: 1,
    y: 0,
  },
}

// Section reveal animation (scroll-triggered)
export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0, 0, 0.2, 1], // ease-out
    },
  },
  reduced: {
    opacity: 1,
    y: 0,
  },
}

// Container for staggered children
export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  reduced: {
    opacity: 1,
  },
}

// Badge stagger animation
export const badgeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.15,
      ease: [0, 0, 0.2, 1], // ease-out
    },
  },
  reduced: {
    opacity: 1,
    scale: 1,
  },
}

// Fade in animation (simple)
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0, 0, 0.2, 1],
    },
  },
  reduced: {
    opacity: 1,
  },
}

// Button hover/tap animation (not for reduced motion)
export const buttonVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.15,
      ease: [0, 0, 0.2, 1],
    },
  },
  tap: {
    scale: 0.98,
  },
}
