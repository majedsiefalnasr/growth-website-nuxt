/**
 * Tailwind CSS v4 Configuration for Nuxt 4
 *
 * For full options, see: https://tailwindcss.com/docs/configuration
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.{vue,js,ts}',
    './app/pages/**/*.{vue,js,ts}',
    './app/composables/**/*.{js,ts}',
    './app/utils/**/*.{js,ts}',
    './app/app.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
