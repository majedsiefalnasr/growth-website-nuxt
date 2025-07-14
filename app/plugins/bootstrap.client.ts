/**
 * Loads Bootstrap JS bundle on client side for Nuxt 3 apps.
 * Ensures all Bootstrap interactive components (modals, dropdowns, etc.) work.
 * @see https://getbootstrap.com/docs/5.3/getting-started/vite/
 */
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

/**
 * Nuxt plugin to provide Bootstrap JS API globally.
 * Allows use of Bootstrap JS (modals, tooltips, etc.) via `useNuxtApp().$bs`.
 * @param nuxtApp - Nuxt app instance
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('bs', bootstrap)
})
