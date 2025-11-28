/**
 * Content module - Single source of truth for all copy/translations
 *
 * Usage:
 *   import { content } from '@/content'
 *   const { profile, hero } = content
 *
 * Future i18n:
 *   import { getContent } from '@/content'
 *   const content = getContent('nl')
 */

import type { ContactType, Content, SkillCategory } from './en'
import { en } from './en'

// Current locale (future: detect from request/cookie/URL)
const currentLocale = 'en' as const

// Locale map for future expansion
const locales = {
  en,
  // nl: nl, // Add when ready
} as const

type Locale = keyof typeof locales

/**
 * Get content for a specific locale
 * @param locale - Locale code (default: 'en')
 */
export function getContent(locale: Locale = 'en'): Content {
  return locales[locale]
}

// Default export for convenience
export const content = locales[currentLocale]

// Re-export types
export type { Content, ContactType, SkillCategory }
export type { Locale }
