/**
 * Disables all console warnings in development mode.
 * @remarks
 * This plugin overrides console.warn to suppress warning messages in the browser console during development.
 * @see https://nuxt.com/docs/guide/directory-structure/plugins
 */
export default defineNuxtPlugin(() => {
  if (import.meta.dev) {
    console.warn = () => {}
  }
})
