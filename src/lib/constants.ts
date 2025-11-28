/**
 * Constants - Re-exports from centralized content
 *
 * This file maintains backwards compatibility while content
 * lives in src/content/. Prefer importing from @/content directly.
 */

import type { ContactType, SkillCategory } from '@/content'
import { content } from '@/content'

// Re-export profile info
export const PROFILE = {
  name: content.profile.name,
  title: content.profile.title,
  tagline: content.profile.tagline,
  email: content.business.email,
  about: content.profile.about,
  aboutShort: content.profile.aboutShort,
} as const

// Re-export skills
export const SKILLS = {
  frontend: content.skills.categories.frontend.skills,
  backend: content.skills.categories.backend.skills,
  tools: content.skills.categories.tools.skills,
} as const

// Re-export contacts
export const CONTACTS = content.contacts

// Re-export types
export type { ContactType, SkillCategory }

export interface Contact {
  type: ContactType
  href: string
  label: string
  newTab?: boolean
}
