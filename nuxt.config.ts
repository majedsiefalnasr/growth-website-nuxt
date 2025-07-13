/* global defineNuxtConfig */
/**
 * Nuxt configuration for Growth platform
 *
 * - Maintains all site-wide constants at the top for easy updates
 * - Groups related configuration for clarity
 * - Adds comments and JSDoc for maintainability
 * - Includes runtimeConfig placeholder for secrets and environment variables
 *
 * @see https://nuxt.com/docs/api/configuration/nuxt-config
 */

// === Site-wide constants for maintainability ===
const SITE_URL = 'https://growth.example.com' // Update with your production domain
const SITE_NAME = 'Growth'
const SITE_DESCRIPTION = 'Growth is a platform to empower individuals and small businesses online.'
const SITE_IMAGE = {
  url: '/favicon/favicon.ico',
  alt: 'Growth logo',
  width: 512,
  height: 512,
  type: 'image/x-icon',
}
const SITE_AUTHOR = {
  name: 'Growth Team',
  url: `${SITE_URL}/about`,
}
const SITE_TWITTER = 'https://twitter.com/growthplatform'
const SITE_TWITTER_HANDLE = '@growthplatform'
const SITE_FACEBOOK = 'https://www.facebook.com/growthplatform'
const SITE_LINKEDIN = 'https://www.linkedin.com/company/growthplatform'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /**
   * Runtime config for secrets and environment variables Use this section to securely manage API
   * keys and other sensitive data. Values in `public` are exposed to the client; others are
   * server-only.
   *
   * @see https://nuxt.com/docs/guide/going-further/runtime-config
   */
  runtimeConfig: {
    // Example: apiSecret: process.env.API_SECRET,
    public: {
      // Example: publicApiBase: process.env.PUBLIC_API_BASE || ''
    },
  },

  /**
   * Nuxt compatibility date for future-proof builds
   *
   * @see https://nuxt.com/docs/guide/going-further/compatibility-date
   */
  compatibilityDate: '2025-07-13',

  // === Nuxt 4 configuration options ===
  future: {
    compatibilityVersion: 4,
  },

  // === Enable Nuxt DevTools for development convenience ===
  devtools: { enabled: true },

  // === Nuxt modules to enhance project functionality ===
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/seo',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/i18n',
    // ...add or remove modules as needed
  ],

  // === Nuxt UI configuration ===
  css: ['~/assets/css/app.css', '~/assets/css/fonts.css'],

  // === Router configuration ===
  router: {
    options: {
      strict: false, // Treat /page and /page/ as distinct
    },
  },

  // === Components auto-import configuration ===
  components: [
    {
      path: '~/components',
      pathPrefix: false, // No path prefix for components
    },
  ],

  // === Nuxt Image module configuration ===
  image: {
    // See https://image.nuxt.com/getting-started/configuration for all options
    // Default provider is 'ipx', which works out of the box
    // You can add domains, presets, and more as needed
    format: ['avif', 'webp'], // will default to original format if optimization not possible
    quality: 80, // Set global quality for images - small enough quality change that it should not impact ux
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
    // Add more options as needed
  },

  /**
   * Color mode configuration
   *
   * @see https://github.com/nuxt-modules/color-mode
   */
  colorMode: {
    preference: 'light', // Set light as the default color mode
    fallback: 'light',
    classSuffix: '',
  },

  // === App-level HTML head configuration ===
  app: {
    head: {
      meta: [
        {
          'http-equiv': 'Content-Security-Policy',
          content: `
            default-src 'self' https: http;;
            script-src 'self' 'unsafe-inline' 'unsafe-eval' https: http: *.googletagmanager.com *.mutinycdn.com;
            style-src 'self' 'unsafe-inline' https: http;;
            object-src https: http;;
            base-uri 'self';
            connect-src 'self' https: http: wss: ws: *.google-analytics.com *.analytics.google.com *.googletagmanager.com *.mutinyhq.com *.mutinyhq.io *.mutinycdn.com;
            frame-src 'self' https: http;;
            img-src 'self' https: http: data: *.google-analytics.com *.googletagmanager.com *.mutinycdn.com;
            manifest-src 'self'; media-src 'self' https: http;;
            child-src 'self' blob: https: http;;
            font-src 'self' https: http: data;;
          `,
        },
        { name: 'format-detection', content: 'telephone=no' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: SITE_NAME },
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

  // === Nuxt SEO: site-wide metadata configuration ===
  site: {
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    defaultLocale: 'ar',
    image: SITE_IMAGE,
    author: SITE_AUTHOR,
    social: {
      twitter: SITE_TWITTER,
      facebook: SITE_FACEBOOK,
      linkedIn: SITE_LINKEDIN,
      // Add more social links as needed
    },
  },

  // === SEO module configuration ===
  seo: {
    enabled: true,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    ogSiteName: SITE_NAME,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterSite: SITE_TWITTER_HANDLE, // Twitter handle
    canonical: SITE_URL,
    themeColor: '#0ea5e9',
    language: 'ar',
    image: SITE_IMAGE,
    author: SITE_AUTHOR.name,
    keywords: ['growth', 'business', 'platform', 'academy', 'blog', 'contact', 'pricing'],
    robots: 'index, follow',
    // Add more SEO options as needed
  },

  // === Additional modules for SEO, OG image generation, sitemap, robots.txt, and schema.org ===
  ogImage: {
    enabled: true,
    // You can customize OG image generation here
    // See https://github.com/harlan-zw/nuxt-og-image for advanced options
    // Example:
    // provider: 'browser',
    // options: { ... }
  },

  // === Sitemap configuration ===
  sitemap: {
    enabled: true,
    siteUrl: SITE_URL,
    autoLastmod: true,
    exclude: ['/secret/**'],
    // Add more sitemap options as needed
  },

  // === Robots.txt configuration ===
  robots: {
    enabled: true,
    blockAiBots: true,
    groups: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    // Add more robots options as needed
  },

  // === Schema.org structured data for SEO ===
  schemaOrg: {
    enabled: true,
    canonicalHost: SITE_URL,
    defaultLanguage: 'ar',
    identity: {
      name: SITE_NAME,
      logo: '/favicon.ico',
      url: SITE_URL,
      sameAs: [SITE_TWITTER, SITE_FACEBOOK, SITE_LINKEDIN],
      description: SITE_DESCRIPTION,
    },
    organization: {
      name: SITE_NAME,
      url: SITE_URL,
      logo: '/favicon/favicon.ico',
      description: SITE_DESCRIPTION,
    },
    webSite: {
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: 'ar',
    },
    // Add more schema.org options as needed
  },

  // === Link checker configuration ===
  linkChecker: {
    // enabled: false,
  },

  // === ESLint configuration ===
  eslint: {
    // options here
  },

  // Internationalization settings
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
    defaultLocale: 'ar',
    locales: [
      {
        code: 'en',
        language: 'en',
        label: 'English',
        langLabel: 'Language',
        file: 'en.json',
        dir: 'ltr',
      },
      {
        code: 'ar',
        language: 'ar',
        label: 'Arabic',
        langLabel: 'اللغة',
        file: 'ar.json',
        dir: 'rtl',
      },
    ],
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    vueI18n: 'i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root', // or 'always' to always redirect
      fallbackLocale: 'ar',
    },
  },

  // === Add more Nuxt 4 options here as needed ===
})
