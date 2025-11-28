import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tadema.dev',
      lastModified: '2025-11-28',
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
