import type { Metadata, Viewport } from 'next'
import { Montserrat, Raleway, Source_Code_Pro } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
})

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

const sourceCodePro = Source_Code_Pro({
  variable: '--font-source-code-pro',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

const siteUrl = 'https://tadema.dev'

export const viewport: Viewport = {
  themeColor: '#00073a',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Lars Tadema | Senior Software Engineer & Tech Lead',
    template: '%s | Lars Tadema',
  },
  description:
    'Frontend Architect with 10+ years experience building scalable enterprise applications with TypeScript, React, and Node.js. Available for freelance consulting.',
  keywords: [
    'Frontend Architect',
    'Software Engineer',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Freelance',
    'Consulting',
    'Enterprise Applications',
    'GraphQL',
  ],
  authors: [{ name: 'Lars Tadema', url: siteUrl }],
  creator: 'Lars Tadema',
  publisher: 'Lars Tadema',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png' }],
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Lars Tadema',
    title: 'Lars Tadema | Senior Software Engineer & Tech Lead',
    description:
      'Frontend Architect with 10+ years experience building scalable enterprise applications with TypeScript, React, and Node.js. Available for freelance consulting.',
    images: [
      {
        url: '/favicon/tadema-og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Lars Tadema - Senior Software Engineer & Tech Lead',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lars Tadema | Senior Software Engineer & Tech Lead',
    description:
      'Frontend Architect with 10+ years experience building scalable enterprise applications with TypeScript, React, and Node.js.',
    images: ['/favicon/tadema-og-image-1200x630.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${raleway.variable} ${sourceCodePro.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
