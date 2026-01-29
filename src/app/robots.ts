import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Agar koi hidden page ho to
    },
    sitemap: 'https://fintoolspro.com/sitemap.xml',
  }
}