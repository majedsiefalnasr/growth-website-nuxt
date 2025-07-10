// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  devtools: {enabled: true},
  modules: [
    '@nuxtjs/tailwindcss',
    // ...other modules
  ],
  // TailwindCSS configuration
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', {injectPosition: 'first'}],
    config: {},
    viewer: {endpoint: '/_tailwind', exportViewer: true},
    exposeConfig: true,
    editorSupport: true,
  },
  // You can add more Nuxt 4 options here as needed
})
