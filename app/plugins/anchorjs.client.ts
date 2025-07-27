// plugins/anchorjs.client.ts
import { defineNuxtPlugin } from '#app'
import AnchorJS from 'anchor-js'

/**
 * Nuxt plugin to initialize AnchorJS for adding anchor links to headings.
 *
 * @param {object} nuxtApp - The Nuxt app instance.
 * @returns {void}
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    // Only run in browser
    if (typeof window !== 'undefined') {
      const anchors = new AnchorJS()
      // Add anchors to all h2, h3, and h4 elements except those with .no-anchor class
      anchors.add(
        '[data-anchor] h2:not(.no-anchor), [data-anchor] h3:not(.no-anchor), [data-anchor] h4:not(.no-anchor)'
      )
    }
  })
})
