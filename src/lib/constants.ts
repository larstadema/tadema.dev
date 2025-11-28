export const PROFILE = {
  name: 'Lars Tadema',
  title: 'Senior Software Engineer & Team Lead',
  tagline:
    'Building scalable, enterprise-grade applications with TypeScript, React, and Node.js',
  email: 'info@tadema.dev',
  about: `I architect frontend systems that scale from startup to enterprise.

With over 10 years of full-stack software development experience, I specialize in TypeScript, React, GraphQL and Node.js, helping organizations create robust frontend solutions and streamline their development workflows.

As a Frontend Architect for the past 4 years, I've established technical guidelines and standards for enterprise applications, ensuring scalability, maintainability, and team efficiency.`,
  aboutShort:
    'Senior Software Engineer & Tech Lead with 10+ years of full-stack experience, specializing in TypeScript, React, GraphQL, and Node.js. Focused on building scalable enterprise applications and mentoring high-performance teams.',
} as const

export const SKILLS = {
  frontend: [
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
  backend: [
    'Node.js',
    'NestJS',
    'Express.js',
    'GraphQL',
    'REST API',
    'Microservices',
  ],
  tools: [
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
} as const

export type ContactType = 'email' | 'linkedin' | 'github'

export interface Contact {
  type: ContactType
  href: string
  label: string
  newTab?: boolean
}

export const CONTACTS: Contact[] = [
  {
    type: 'email',
    href: 'mailto:lars@tadema.dev',
    label: 'Email',
    newTab: false,
  },
  {
    type: 'linkedin',
    href: 'https://www.linkedin.com/in/lars-tadema',
    label: 'LinkedIn',
    newTab: true,
  },
  {
    type: 'github',
    href: 'https://github.com/larstadema',
    label: 'GitHub',
    newTab: true,
  },
] as const

export type SkillCategory = keyof typeof SKILLS
