# tadema.dev House Style Guide

A comprehensive design system for tadema.dev — a personal website and portfolio for a senior software engineer and frontend architect.

---

## 1. Brand Overview

### Brand Essence
**Approachable Expert** — Friendly but authoritative. Technical depth delivered with accessibility. Professional credibility without corporate stiffness.

### Brand Attributes
- **Precise**: Clean geometry, intentional spacing, no clutter
- **Modern**: Current tech aesthetic, dark-first design
- **Trustworthy**: Consistent, predictable patterns
- **Approachable**: Warm accents, readable typography, conversational tone

### Target Audience
Technical decision-makers, hiring managers, fellow developers, and potential clients seeking enterprise-level frontend expertise.

---

## 2. Logo

### Description
Five rounded squares arranged in a cross/T pattern: three across the top row, two below (center column). Forms a minimalist "T" symbol representing structure, precision, and organization. Corner radius ~6.76px on the small version, ~27.41px on the 512px icon.

### Logo Files
```
/assets/
├── logo/
│   ├── tadema-icon-512x512.svg          # Icon - light bg (navy squares)
│   ├── tadema-icon-512x512.png
│   ├── tadema-icon-dark-512x512.svg     # Icon - dark bg (white squares, blue border, shadow)
│   ├── tadema-icon-dark-512x512.png
│   ├── tadema-full-logo-400x160.svg     # Full logo - light bg
│   ├── tadema-full-logo-400x160.png
│   ├── tadema-full-logo-dark-400x160.svg # Full logo - dark bg
│   └── tadema-full-logo-dark-400x160.png
├── favicon/
│   ├── favicon.svg                       # Vector favicon
│   ├── favicon.ico                       # Legacy favicon
│   ├── favicon-96x96.png                 # Standard favicon
│   ├── apple-touch-icon.png              # iOS home screen
│   ├── web-app-manifest-192x192.png      # PWA small
│   ├── web-app-manifest-512x512.png      # PWA large
│   └── tadema-og-image-1200x630.png      # Social sharing OG image
└── images/
    ├── lars_1200x1200.jpg                # Profile photo (original)
    └── lars_1200x1200.webp               # Profile photo (optimized)
```

### Logo Variants

| Variant | Background | Squares | Border | Use Case |
|---------|------------|---------|--------|----------|
| Light mode | Light/white | Navy (#00073a) | None | Light backgrounds |
| Dark mode | Dark/navy | White (#fff) | Blue (#204bd1) + shadow | Dark backgrounds (default) |

### Clear Space
Minimum clear space around logo equals the height of one dot in the grid pattern.

### Minimum Sizes
- Digital: 32px height minimum
- Print: 12mm height minimum

### Usage Rules
**Do:**
- Use on solid backgrounds with sufficient contrast
- Maintain aspect ratio
- Use approved color variations only

**Don't:**
- Stretch or distort
- Add effects (shadows, glows, outlines)
- Place on busy backgrounds
- Rotate or skew
- Change the arrangement of dots

---

## 3. Color System

### Philosophy
Dark mode is the default experience. Colors are designed for WCAG AA compliance on dark backgrounds.

### Core Palette

```css
:root {
  /* Brand Colors */
  --color-primary: #00073a;      /* Deep Navy - main brand, prominent in surfaces */
  --color-accent: #204bd1;       /* Bright Blue - interactive elements only */

  /* Backgrounds (Dark Mode - Default) - Deep abyss base */
  --bg-primary: #020610;         /* Ultra-deep page background (near-black with navy undertone) */
  --bg-secondary: #00073a;       /* Cards, elevated surfaces (brand navy is now visible) */
  --bg-tertiary: #0a1628;        /* Hover states, subtle borders */
  --bg-elevated: #142238;        /* Modals, dropdowns */

  /* Backgrounds (Light Mode) */
  --bg-primary-light: #fafbfe;   /* Crisp off-white with subtle warmth */
  --bg-secondary-light: #f0f4f8;
  --bg-tertiary-light: #e2e8f0;

  /* Text (on dark backgrounds) */
  --text-primary: #ffffff;       /* ~15:1 contrast */
  --text-secondary: #a3b8d4;     /* ~7:1 contrast */
  --text-tertiary: #6b7c94;      /* ~4.5:1 contrast */
  --text-muted: #4a5568;         /* Decorative only */

  /* Text (on light backgrounds) */
  --text-primary-light: #0f172a;
  --text-secondary-light: #475569;
  --text-tertiary-light: #94a3b8;

  /* Accent States */
  --accent-default: #204bd1;
  --accent-hover: #3b6ce8;       /* Lighter for hover */
  --accent-active: #1a3ba6;      /* Darker for pressed */
  --accent-subtle: #204bd115;    /* 8% opacity for backgrounds */

  /* Semantic Colors */
  --color-success: #22c55e;
  --color-success-subtle: #22c55e20;
  --color-warning: #f59e0b;
  --color-warning-subtle: #f59e0b20;
  --color-error: #ef4444;
  --color-error-subtle: #ef444420;
  --color-info: #3b82f6;
  --color-info-subtle: #3b82f620;

  /* Borders */
  --border-subtle: #ffffff10;
  --border-default: #ffffff20;
  --border-strong: #ffffff30;
  --border-accent: var(--accent-default);
}
```

### Contrast Requirements
| Text Type | Minimum Ratio | Our Target |
|-----------|---------------|------------|
| Body text | 4.5:1 (AA) | 7:1+ |
| Large text (18px+) | 3:1 (AA) | 4.5:1+ |
| UI components | 3:1 (AA) | 4:1+ |
| Decorative | N/A | N/A |

### Color Usage Guidelines
- **Primary backgrounds**: Use `--bg-primary` for main page areas
- **Elevated surfaces**: Use `--bg-secondary` for cards, distinguishing content layers
- **Interactive elements**: Use `--accent-default` for buttons, links, focus states
- **Text hierarchy**: Use text colors to create clear visual hierarchy
- **Semantic colors**: Reserve for status indicators, never for decoration

---

## 4. Typography

### Font Stack

```css
:root {
  /* Primary Fonts */
  --font-heading: 'Montserrat', system-ui, sans-serif;
  --font-body: 'Raleway', system-ui, sans-serif;
  --font-mono: 'Source Code Pro', 'JetBrains Mono', monospace;

  /* Fallback Stack */
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### Google Fonts Import
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Raleway:wght@400;500;600&family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet">
```

### Type Scale (Major Third - 1.25 ratio)

```css
:root {
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  --text-6xl: 3.75rem;   /* 60px */
}
```

### Line Heights

```css
:root {
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
}
```

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, paragraphs |
| Medium | 500 | Emphasized body, subheadings |
| Semibold | 600 | Section headings, buttons |
| Bold | 700 | Page titles, hero text |
| Extrabold | 800 | Display text, special emphasis |

### Typography Rules
- **Headings**: Montserrat, 700 weight, tight line-height (1.1-1.25)
- **Body**: Raleway, 400 weight, relaxed line-height (1.5-1.625)
- **Code**: Source Code Pro, 400 weight, normal line-height
- **Max line length**: 65-75 characters for readability
- **Paragraph spacing**: 1.5em between paragraphs

### Heading Styles

```css
h1 {
  font-family: var(--font-heading);
  font-size: var(--text-5xl);
  font-weight: 700;
  line-height: var(--leading-tight);
  letter-spacing: -0.02em;
}

h2 {
  font-family: var(--font-heading);
  font-size: var(--text-4xl);
  font-weight: 700;
  line-height: var(--leading-tight);
  letter-spacing: -0.01em;
}

h3 {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: 600;
  line-height: var(--leading-snug);
}

h4 {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 600;
  line-height: var(--leading-snug);
}
```

---

## 5. Spacing System

### Base Unit
4px base unit for consistent rhythm.

### Spacing Scale

```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
}
```

### Usage Guidelines
| Context | Recommended Spacing |
|---------|-------------------|
| Inline elements | space-1 to space-2 |
| Form inputs | space-2 to space-3 |
| Card padding | space-4 to space-6 |
| Section gaps | space-12 to space-20 |
| Page margins | space-4 (mobile) to space-16 (desktop) |

---

## 6. Layout

### Container Widths

```css
:root {
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;
  --container-prose: 65ch;  /* Optimal reading width */
}
```

### Breakpoints

```css
/* Mobile first approach */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### Grid System
Use CSS Grid with 12-column layout for complex layouts, flexbox for simpler arrangements.

---

## 7. Border Radius & Shadows

### Border Radius (Small Rounded Style)

```css
:root {
  --radius-none: 0;
  --radius-sm: 0.25rem;    /* 4px */
  --radius-default: 0.375rem; /* 6px */
  --radius-md: 0.5rem;     /* 8px */
  --radius-lg: 0.75rem;    /* 12px */
  --radius-xl: 1rem;       /* 16px */
  --radius-2xl: 1.5rem;    /* 24px */
  --radius-full: 9999px;
}
```

### Component Radius Guidelines
| Component | Radius |
|-----------|--------|
| Buttons (small) | radius-default |
| Buttons (large) | radius-md |
| Cards | radius-lg |
| Input fields | radius-default |
| Chips/Tags | radius-full |
| Modals | radius-xl |
| Avatars | radius-full |

### Shadows (for dark mode)

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3);
  --shadow-default: 0 1px 3px 0 rgb(0 0 0 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.4);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.4);

  /* Glow effect for accent elements */
  --shadow-glow: 0 0 20px var(--accent-default);
  --shadow-glow-sm: 0 0 10px var(--accent-subtle);
}
```

---

## 8. Animation & Motion

### Philosophy
Motion adds delight and guides attention. Respect user preferences. Performance over flair.

### Core Principles
1. **Respect `prefers-reduced-motion`** — Always check and provide alternatives
2. **Performance budget** — Animations must not cause jank (< 16ms frame time)
3. **Purposeful motion** — Every animation should serve UX, not just aesthetics
4. **Consistency** — Use standard easings and durations across the site

### Duration Scale

```css
:root {
  --duration-instant: 50ms;
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 700ms;
}
```

### Easing Functions

```css
:root {
  /* Standard easings */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  /* Expressive easings */
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

### Animation Patterns

| Pattern | Duration | Easing | Use Case |
|---------|----------|--------|----------|
| Hover state | fast | ease-out | Buttons, links |
| Focus ring | instant | linear | Accessibility |
| Modal open | normal | ease-out | Dialogs, sheets |
| Modal close | fast | ease-in | Dialogs, sheets |
| Page transition | slow | ease-in-out | Route changes |
| Stagger reveal | normal | ease-out | Lists, grids |
| Micro-interaction | fast | ease-bounce | Success states |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Motion Library (motion 12.23)
Use Motion for complex animations. Keep CSS for simple hover/focus states.

```tsx
// Standard fade-in
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
/>

// Staggered children
<motion.ul variants={containerVariants}>
  {items.map((item, i) => (
    <motion.li
      key={item.id}
      variants={itemVariants}
      custom={i}
    />
  ))}
</motion.ul>
```

---

## 9. Iconography

### Icon System
Use Lucide React icons for consistency and tree-shaking support.

### Sizing

```css
:root {
  --icon-xs: 12px;
  --icon-sm: 16px;
  --icon-md: 20px;
  --icon-lg: 24px;
  --icon-xl: 32px;
}
```

### Usage Guidelines
- Icons should be recognizable at 16px
- Always pair icons with labels for accessibility (or use aria-label)
- Use `currentColor` for fill to inherit text color
- Maintain 2px stroke width for visual consistency

---

## 10. Voice & Tone

### Brand Voice: Approachable Expert

| Attribute | Description | Example |
|-----------|-------------|---------|
| **Knowledgeable** | Demonstrates expertise without condescension | "Here's how I approach complex state management..." |
| **Direct** | Gets to the point, respects reader's time | "This reduces bundle size by 40%." |
| **Friendly** | Warm but professional, not overly casual | "Let's build something great together." |
| **Confident** | States opinions clearly, backs them up | "TypeScript isn't optional—it's essential for enterprise apps." |

### Writing Guidelines

**Do:**
- Use active voice
- Lead with the benefit
- Be specific with numbers and results
- Use "I" for personal experience, "we" when collaborating
- Break up long paragraphs

**Don't:**
- Use jargon without explanation
- Be self-deprecating
- Use filler words ("just", "actually", "basically")
- Overuse exclamation points
- Write walls of text

### Sentence Structure
- Headlines: 3-8 words, action-oriented
- Subheadings: Clarify, don't repeat
- Body: 15-25 words per sentence average
- CTAs: Start with verb, be specific

---

## 11. Accessibility

### Core Requirements
- WCAG 2.1 AA compliance minimum
- Keyboard navigation for all interactive elements
- Screen reader compatibility
- Reduced motion support

### Focus States

```css
:focus-visible {
  outline: 2px solid var(--accent-default);
  outline-offset: 2px;
}

/* Remove default outline when using :focus-visible */
:focus:not(:focus-visible) {
  outline: none;
}
```

### Touch Targets
- Minimum 44x44px for touch targets
- Adequate spacing between interactive elements

### Color Accessibility
- Never rely on color alone to convey information
- Provide text labels or patterns as alternatives
- Test with color blindness simulators

### Screen Reader Considerations
- Use semantic HTML elements
- Provide alt text for all meaningful images
- Use ARIA labels where semantic HTML is insufficient
- Test with VoiceOver/NVDA

---

## 12. Component Guidelines

### Buttons

```css
.button {
  font-family: var(--font-body);
  font-weight: 600;
  border-radius: var(--radius-default);
  transition: all var(--duration-fast) var(--ease-out);
}

.button-primary {
  background: var(--accent-default);
  color: white;
}

.button-primary:hover {
  background: var(--accent-hover);
}

.button-secondary {
  background: transparent;
  border: 1px solid var(--border-default);
  color: var(--text-primary);
}
```

### Cards

```css
.card {
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-subtle);
  padding: var(--space-6);
}

.card:hover {
  border-color: var(--border-default);
  box-shadow: var(--shadow-md);
}
```

### Links

```css
a {
  color: var(--accent-default);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color var(--duration-fast) var(--ease-out);
}

a:hover {
  color: var(--accent-hover);
}
```

### Form Inputs

```css
.input {
  background: var(--bg-tertiary);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-default);
  padding: var(--space-3) var(--space-4);
  color: var(--text-primary);
  font-family: var(--font-body);
}

.input:focus {
  border-color: var(--accent-default);
  box-shadow: 0 0 0 3px var(--accent-subtle);
}
```

---

## 13. Code Blocks

### Syntax Highlighting Theme
Use a dark theme consistent with brand colors.

```css
.code-block {
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  overflow-x: auto;
}

/* Token colors */
--code-comment: #6b7c94;
--code-keyword: #c792ea;
--code-string: #c3e88d;
--code-function: #82aaff;
--code-variable: #f78c6c;
--code-operator: #89ddff;
```

---

## 14. File Naming

### Assets
```
/assets/
├── images/
│   └── [descriptive-name].[webp|jpg]
├── favicon/
│   └── [as defined in Logo section]
└── logo/
    └── [as defined in Logo section]
```

### Naming Convention
- Lowercase with hyphens: `my-component.tsx`
- Descriptive and specific: `project-card.tsx` not `card.tsx`
- Include size/variant in image names: `hero-mobile.webp`

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-11-28 | Initial house style guide |

---

*This document is the single source of truth for visual and brand decisions on tadema.dev. All implementations should reference this guide.*
