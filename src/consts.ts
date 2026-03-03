// Site Configuration
// Centralized configuration for site metadata, SEO, and branding

export const SITE_TITLE = 'Lakshya Tangri | Solution Architect & GenAI Strategist'
export const SITE_DESCRIPTION =
  'I design systems that think, scale, and endure. Exploring High-Level System Design, Enterprise GenAI architecture patterns, Cloud-native platform blueprints on AWS, MLOps, and Architecture governance.'

export const GITHUB_URL = 'https://github.com/lakshyatangri'
export const SITE_URL = 'https://lakshyatangri.com/' // Replace with actual URL

export const SITE_METADATA = {
  title: {
    default: 'Lakshya Tangri | Solution Architect & GenAI Strategist'
  },
  description:
    'I design systems that think, scale, and endure. Exploring High-Level System Design, Enterprise GenAI architecture patterns, Cloud-native platform blueprints on AWS, MLOps, and Architecture governance.',
  keywords: [
    'Solution Architect',
    'Enterprise Architect',
    'TOGAF',
    'GenAI',
    'MLOps',
    'Data Engineering',
    'RESHADED framework',
    'AWS Cloud',
    'Cloud-native',
    'AI-enabled operating models',
    'System Design'
  ],
  authors: [{ name: 'Lakshya Tangri', url: SITE_URL }],
  creator: 'Lakshya Tangri',
  publisher: 'Lakshya Tangri',
  robots: {
    index: true,
    follow: true
  },
  language: 'en-US',
  locale: 'en_US',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }]
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Lakshya Tangri',
    title: 'Lakshya Tangri | Solution Architect & GenAI Strategist',
    description:
      'I design systems that think, scale, and endure. Exploring High-Level System Design, Enterprise GenAI architecture patterns, Cloud-native platform blueprints on AWS, MLOps, and Architecture governance.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lakshya Tangri',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lakshyatangri',
    creator: '@lakshyatangri',
    title: 'Lakshya Tangri | Solution Architect & GenAI Strategist',
    description:
      'I design systems that think, scale, and endure. Exploring High-Level System Design, Enterprise GenAI architecture patterns, Cloud-native platform blueprints on AWS, MLOps, and Architecture governance.',
    images: ['/images/og-image.png']
  },
  verification: {
    google: '', // Add your Google verification code
    yandex: '', // Add your Yandex verification code
    bing: '' // Add your Bing verification code
  }
}

// Social media links
export const SOCIAL_LINKS = {
  github: GITHUB_URL,
  twitter: 'https://twitter.com/lakshyatangri',
  linkedin: 'https://linkedin.com/in/lakshyatangri',
  youtube: 'https://youtube.com/@lakshyatangri'
}

// Company information for structured data
export const COMPANY_INFO = {
  name: 'Lakshya Tangri',
  legalName: 'Lakshya Tangri',
  url: SITE_URL,
  logo: `/images/site-logo.png`,
  foundingDate: '2024',
  address: {
    streetAddress: 'London',
    addressLocality: 'London',
    addressRegion: 'UK',
    postalCode: '',
    addressCountry: 'UK'
  },
  contactPoint: {
    telephone: '',
    contactType: 'professional inquiry',
    email: 'lakshya@example.com' // Replace with actual email
  },
  sameAs: Object.values(SOCIAL_LINKS)
}
