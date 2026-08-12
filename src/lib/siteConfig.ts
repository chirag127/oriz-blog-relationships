export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'between',
  name: 'Between',
  origin: 'https://relationships-blog.oriz.in',
  tagline: 'Practical letters on the space between two people',
  description:
    'Between is a relationships letter — practical, warm writing on communication, distance, and boundaries.',
}
