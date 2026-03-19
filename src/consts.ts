// Site Configuration
// Centralized configuration for site metadata, SEO, and branding

export const SITE_TITLE = 'Lakshya Tangri | Enterprise Architect - Solution Architect - Consulting'
export const SITE_DESCRIPTION =
  'TOGAF 10-certified Enterprise Architect with a career built progressively from software development and business architecture to enterprise-scale programme delivery and technology strategy.'

export const GITHUB_URL = 'https://github.com/lakshyatangri'
export const SITE_URL = 'https://lakshyatangri.com/' // Replace with actual URL

export const SITE_METADATA = {
  title: {
    default: SITE_TITLE,
    template: `%s | Lakshya Tangri`
  },
  description:
    'TOGAF 10-certified Enterprise Architect with a career built progressively from software development and business architecture to enterprise-scale programme delivery and technology strategy.',
  keywords: [
    'Enterprise Architect',
    'Solution Architect',
    'Consulting',
    'TOGAF 10',
    'Technology Strategy',
    'Digital Transformation',
    'Defence IT',
    'Government Consulting',
    'LeanIX',
    'Sparx EA',
    'ArchiMate 3',
    'Business Capability Mapping',
    'Target Operating Model',
    'Architecture Governance'
  ],
  authors: [{ name: 'Lakshya Tangri', url: SITE_URL }],
  creator: 'Lakshya Tangri',
  publisher: 'Lakshya Tangri',
  robots: {
    index: true,
    follow: true
  },
  language: 'en-GB',
  locale: 'en_GB',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Lakshya Tangri',
    title: 'Lakshya Tangri | Enterprise Architect - Solution Architect - Consulting',
    description:
      'TOGAF 10-certified Enterprise Architect specializing in enterprise-scale programme delivery and technology strategy across defence, government, and financial services.',
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
    title: 'Lakshya Tangri | Enterprise Architect - Solution Architect - Consulting',
    description:
      'TOGAF 10-certified Enterprise Architect specializing in enterprise-scale programme delivery and technology strategy across defence, government, and financial services.',
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
  linkedin: 'https://linkedin.com/in/lakshyatangri',

}

// Company information for structured data
export const COMPANY_INFO = {
  name: 'Lakshya Tangri',
  legalName: 'Lakshya Tangri',
  url: SITE_URL,
  logo: `/images/site-logo.png`,
  foundingDate: '2024',
  address: {
    streetAddress: 'Birmingham',
    addressLocality: 'Birmingham',
    addressRegion: 'UK',
    postalCode: '',
    addressCountry: 'UK'
  },
  contactPoint: {
    telephone: '',
    contactType: 'professional inquiry',
    email: 'lakshyatangri1@gmail.com'
  },
  sameAs: Object.values(SOCIAL_LINKS)
}
