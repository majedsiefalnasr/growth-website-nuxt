/* global defineNuxtConfig */
import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/seo',
    // ...other modules
  ],
  css: ['~/assets/css/app.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  // Nuxt SEO: site-wide metadata configuration
  site: {
    url: 'https://growth.example.com', // Update with your production domain
    name: 'Growth',
    description: 'Growth is a platform to empower individuals and small businesses online.',
    defaultLocale: 'en',
    image: {
      url: '/favicon.ico',
      alt: 'Growth logo',
      width: 512,
      height: 512,
      type: 'image/x-icon',
    },
    author: {
      name: 'Growth Team',
      url: 'https://growth.example.com/about',
    },
    social: {
      twitter: 'https://twitter.com/growthplatform',
      // Add more social links as needed
    },
  },
  // Example: enable/disable submodules as needed
  seo: {
    enabled: true,
    title: 'Growth',
    description: 'Growth is a platform to empower individuals and small businesses online.',
    ogSiteName: 'Growth',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterSite: '@growthplatform', // Update with your Twitter handle
    canonical: 'https://growth.example.com', // Update with your domain
    themeColor: '#0ea5e9',
    language: 'en',
    image: {
      url: '/favicon.ico',
      alt: 'Growth logo',
      width: 512,
      height: 512,
      type: 'image/x-icon',
    },
    author: 'Growth Team',
    keywords: ['growth', 'business', 'platform', 'academy', 'blog', 'contact', 'pricing'],
    robots: 'index, follow',
    // Add more SEO options as needed
  },
  ogImage: {
    enabled: true,
    // You can customize OG image generation here
    // See https://github.com/harlan-zw/nuxt-og-image for advanced options
    // Example:
    // provider: 'browser',
    // options: { ... }
  },
  sitemap: {
    enabled: true,
    siteUrl: 'https://growth.example.com',
    autoLastmod: true,
    exclude: ['/secret/**'],
    // Add more sitemap options as needed
  },
  robots: {
    enabled: true,
    blockAiBots: true,
    groups: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://growth.example.com/sitemap.xml',
    // Add more robots options as needed
  },
  schemaOrg: {
    enabled: true,
    canonicalHost: 'https://growth.example.com',
    defaultLanguage: 'en',
    identity: {
      name: 'Growth',
      logo: '/favicon.ico',
      url: 'https://growth.example.com',
      sameAs: [
        'https://twitter.com/growthplatform',
        // Add more as needed
      ],
      description: 'Growth is a platform to empower individuals and small businesses online.',
    },
    organization: {
      name: 'Growth',
      url: 'https://growth.example.com',
      logo: '/favicon.ico',
      description: 'Growth is a platform to empower individuals and small businesses online.',
    },
    webSite: {
      name: 'Growth',
      url: 'https://growth.example.com',
      description: 'Growth is a platform to empower individuals and small businesses online.',
      inLanguage: 'en',
    },
    // Add more schema.org options as needed
  },
  linkChecker: {
    // enabled: false,
  },
  // ESLint configuration
  eslint: {
    // options here
  },
  // You can add more Nuxt 4 options here as needed
})
