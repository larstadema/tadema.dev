import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'icon' | 'full'
  size?: number
}

/**
 * Tadema logo SVG component (RSC)
 * Five rounded squares in T pattern
 * Based on HOUSESTYLE.md logo specifications
 */
export const Logo = ({ className, variant = 'icon', size = 48 }: LogoProps) => {
  if (variant === 'full') {
    // Full logo with text - using the SVG from public/logo
    return (
      <svg
        width={size * 2}
        height={size}
        viewBox="0 0 400 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('text-white', className)}
        role="img"
        aria-label="Tadema"
      >
        <title>Tadema</title>
        {/* Icon squares */}
        <rect
          x="8.27"
          y="8.27"
          width="30.48"
          height="30.48"
          rx="7.72"
          className="fill-accent"
        />
        <rect
          x="48.76"
          y="8.27"
          width="30.48"
          height="30.48"
          rx="7.72"
          className="fill-accent"
        />
        <rect
          x="89.25"
          y="8.27"
          width="30.48"
          height="30.48"
          rx="7.72"
          className="fill-accent"
        />
        <rect
          x="48.76"
          y="48.76"
          width="30.48"
          height="30.48"
          rx="7.72"
          className="fill-accent"
        />
        <rect
          x="48.76"
          y="89.25"
          width="30.48"
          height="30.48"
          rx="7.21"
          className="fill-accent"
        />
        {/* Text would be added here for full logo variant */}
      </svg>
    )
  }

  // Icon only - simplified T pattern
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('text-white', className)}
      role="img"
      aria-label="Tadema logo"
    >
      <title>Tadema logo</title>
      {/* Top row - 3 squares */}
      <rect
        x="8.27"
        y="8.27"
        width="30.48"
        height="30.48"
        rx="7.72"
        className="fill-current"
      />
      <rect
        x="48.76"
        y="8.27"
        width="30.48"
        height="30.48"
        rx="7.72"
        className="fill-current"
      />
      <rect
        x="89.25"
        y="8.27"
        width="30.48"
        height="30.48"
        rx="7.72"
        className="fill-current"
      />

      {/* Middle square */}
      <rect
        x="48.76"
        y="48.76"
        width="30.48"
        height="30.48"
        rx="7.72"
        className="fill-current"
      />

      {/* Bottom square */}
      <rect
        x="48.76"
        y="89.25"
        width="30.48"
        height="30.48"
        rx="7.21"
        className="fill-current"
      />
    </svg>
  )
}
