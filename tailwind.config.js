/**
 * Tailwind CSS Configuration for Nuxt 4
 *
 * This config is referenced in nuxt.config.ts via the @nuxtjs/tailwindcss module options.
 *
 * For full options, see: https://tailwindcss.nuxtjs.org/options
 */
module.exports = {
  theme: {
    extend: {},
  },
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.{vue,js,ts}',
    './app/pages/**/*.{vue,js,ts}',
    './app/composables/**/*.{js,ts}',
    './app/utils/**/*.{js,ts}',
    './app/app.vue',
  ],
  plugins: [],
}
