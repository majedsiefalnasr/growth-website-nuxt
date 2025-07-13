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
    '@nuxt/ui',
    // ...other modules
  ],
  css: ['~/assets/css/app.css', '~/assets/css/fonts.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  // App-level HTML head configuration
  app: {
    head: {
      meta: [
        {
          'http-equiv': 'Content-Security-Policy',
          content: `
            default-src 'self' https: http:;
            script-src 'self' 'unsafe-inline' 'unsafe-eval' https: http: *.googletagmanager.com *.mutinycdn.com;
            style-src 'self' 'unsafe-inline' https: http:;
            object-src https: http:;
            base-uri 'self';
            connect-src 'self' https: http: wss: ws: *.google-analytics.com *.analytics.google.com *.googletagmanager.com *.mutinyhq.com *.mutinyhq.io *.mutinycdn.com;
            frame-src 'self' https: http:;
            img-src 'self' https: http: data: *.google-analytics.com *.googletagmanager.com *.mutinycdn.com;
            manifest-src 'self'; media-src 'self' https: http:;
            child-src 'self' blob: https: http:;
            font-src 'self' https: http: data:;
          `,
        },
        { name: 'format-detection', content: 'telephone=no' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'Growth' },
      ],
      link: [
        // Favicon and icons
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon/favicon-96x96.png',
          sizes: '96x96',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon/favicon.svg',
        },
        { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png',
        },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
      ],
    },
  },
  // Nuxt SEO: site-wide metadata configuration
  site: {
    url: 'https://growth.example.com', // Update with your production domain
    name: 'Growth',
    description: 'Growth is a platform to empower individuals and small businesses online.',
    defaultLocale: 'en',
    image: {
      url: '/favicon/favicon.ico',
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
      url: '/favicon/favicon.ico',
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
      logo: '/favicon/favicon.ico',
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
