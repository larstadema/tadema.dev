import { ThemeToggle } from '@/components/atoms/theme-toggle'
import { content } from '@/content'
import { cn } from '@/lib/utils'

interface PageHeaderProps {
  className?: string
}

/**
 * Page header with skip-to-content link and theme toggle
 */
export const PageHeader = ({ className }: PageHeaderProps) => {
  return (
    <header className={cn('relative', className)}>
      {/* Skip to main content link - visible on focus for keyboard users */}
      <a
        href="#main-content"
        className={cn(
          'sr-only focus:not-sr-only',
          'focus:absolute focus:top-4 focus:left-4 focus:z-50',
          'focus:px-4 focus:py-2',
          'focus:bg-accent focus:text-accent-foreground',
          'focus:rounded-md',
          'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        )}
      >
        {content.common.skipToContent}
      </a>

      {/* Theme toggle - fixed position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
    </header>
  )
}
