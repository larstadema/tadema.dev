import { ContactLink } from '@/components/atoms/contact-link'
import { Logo } from '@/components/atoms/logo'
import { CONTACTS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface PageFooterProps {
  className?: string
}

/**
 * Page footer with logo, contact links, business details, and copyright
 */
export const PageFooter = ({ className }: PageFooterProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={cn(
        'py-12 px-4 md:px-8',
        'border-t border-border',
        'bg-card/30',
        className,
      )}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Logo & business info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo size={32} className="text-accent" />
              <span className="text-foreground font-medium">tadema.dev</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Creating software, mobile apps, and websites that make an impact.
            </p>
          </div>

          {/* Business details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 text-sm">
            <div>
              <span className="text-muted-foreground">KVK:</span>{' '}
              <span className="text-foreground">98309773</span>
            </div>
            <div>
              <span className="text-muted-foreground">BTW-ID:</span>{' '}
              <span className="text-foreground">NL005323761B53</span>
            </div>
            <div>
              <span className="text-muted-foreground">Location:</span>{' '}
              <span className="text-foreground">Haarlem, Netherlands</span>
            </div>
            <div>
              <span className="text-muted-foreground">Email:</span>{' '}
              <a
                href="mailto:info@tadema.dev"
                className="text-foreground hover:text-accent transition-colors"
              >
                info@tadema.dev
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {CONTACTS.map((contact) => (
              <ContactLink
                key={contact.type}
                type={contact.type}
                href={contact.href}
                label={contact.label}
                newTab={contact.newTab}
                variant="icon-only"
              />
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {currentYear} Lars Tadema. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
