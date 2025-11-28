/**
 * English content - Single source of truth for all copy
 *
 * Structure:
 * - common: Shared/reusable text
 * - sections: Page section content
 * - business: Legal/business information
 *
 * To add a new locale:
 * 1. Create a new file (e.g., nl.ts)
 * 2. Export the same structure with translated values
 * 3. Update index.ts to include the new locale
 */

export const en = {
  // Common/reusable text
  common: {
    skipToContent: 'Skip to main content',
    scroll: 'Scroll',
    allRightsReserved: 'All rights reserved.',
  },

  // Navigation & actions
  actions: {
    getInTouch: 'Get in Touch',
    startConversation: 'Start a Conversation',
    linkedin: 'LinkedIn',
  },

  // Profile information
  profile: {
    name: 'Lars Tadema',
    firstName: 'Lars',
    lastName: 'Tadema',
    title: 'Senior Software Engineer & Tech Lead',
    tagline:
      'Building scalable, enterprise-grade applications with TypeScript, React, and Node.js',
    about: `I architect frontend systems that scale from startup to enterprise.

With over 10 years of full-stack software development experience, I specialize in TypeScript, React, GraphQL and Node.js, helping organizations create robust frontend solutions and streamline their development workflows.

As a Frontend Architect for the past 4 years, I've established technical guidelines and standards for enterprise applications, ensuring scalability, maintainability, and team efficiency.`,
    aboutShort:
      'Senior Software Engineer & Tech Lead with 10+ years of full-stack experience, specializing in TypeScript, React, GraphQL, and Node.js. Focused on building scalable enterprise applications and mentoring high-performance teams.',
    pullQuote: 'The best code is the code your team can maintain.',
  },

  // Hero section
  hero: {
    stats: [
      { value: '10+', label: 'Years Experience' },
      { value: '50+', label: 'Projects Delivered' },
      { value: 'Enterprise', label: 'Scale Solutions' },
    ],
  },

  // About section
  about: {
    sectionLabel: 'About Me',
    heading: {
      line1: 'From Concept',
      line2: 'to Production',
    },
    stats: [
      { value: '10+', label: 'Years Experience' },
      { value: '4+', label: 'As Architect' },
      { value: '50+', label: 'Projects' },
      { value: '100%', label: 'Remote Ready' },
    ],
    expertise: {
      heading: 'Core Expertise',
      skills: [
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'GraphQL',
        'System Design',
        'Team Leadership',
        'Enterprise Architecture',
      ],
    },
  },

  // Skills section
  skills: {
    sectionLabel: 'Technical Expertise',
    heading: 'Skills & Technologies',
    description:
      '10+ years of experience across the full stack, with deep expertise in frontend architecture and TypeScript ecosystems.',
    categories: {
      frontend: {
        label: 'Frontend',
        description: 'Building performant, accessible user interfaces',
        skills: [
          'TypeScript',
          'React',
          'Next.js',
          'Redux',
          'React Native',
          'GraphQL',
          'Apollo Client',
          'Jest',
          'Playwright',
          'React Testing Library',
          'Storybook',
        ],
      },
      backend: {
        label: 'Backend',
        description: 'Creating scalable APIs and services',
        skills: [
          'Node.js',
          'NestJS',
          'Express.js',
          'GraphQL',
          'REST API',
          'Microservices',
        ],
      },
      tools: {
        label: 'Tools & DevOps',
        description: 'Streamlining development workflows',
        skills: [
          'Git',
          'Docker',
          'TurboRepo',
          'Webpack',
          'Rollup',
          'SWC',
          'ESLint',
          'Azure',
          'CI/CD',
          'GitHub Actions',
        ],
      },
    },
  },

  // CTA section
  cta: {
    sectionLabel: 'Get in Touch',
    heading: {
      line1: 'Ready to',
      line2: 'Ship?',
    },
    description:
      "Available for freelance consulting, technical leadership, and frontend architecture projects. Let's discuss how I can help your team succeed.",
  },

  // Footer
  footer: {
    brandName: 'tadema.dev',
    tagline: 'Frontend architecture and consulting for teams that ship.',
    labels: {
      kvk: 'KVK:',
      vatId: 'VAT-ID:',
      location: 'Location:',
      email: 'Email:',
    },
  },

  // Business information (legal/contact)
  business: {
    kvk: '98309773',
    vatId: 'NL005323761B53',
    location: 'Haarlem, Netherlands',
    email: 'info@tadema.dev',
    website: 'https://tadema.dev',
  },

  // Contact links
  contacts: [
    {
      type: 'email' as const,
      href: 'mailto:lars@tadema.dev',
      label: 'Email',
      newTab: false,
    },
    {
      type: 'linkedin' as const,
      href: 'https://www.linkedin.com/in/lars-tadema',
      label: 'LinkedIn',
      newTab: true,
    },
    {
      type: 'github' as const,
      href: 'https://github.com/larstadema',
      label: 'GitHub',
      newTab: true,
    },
  ],
} as const

export type Content = typeof en
export type ContactType = (typeof en.contacts)[number]['type']
export type SkillCategory = keyof typeof en.skills.categories
