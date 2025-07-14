/**
 * Nuxt plugin to load MouseFollower and GSAP globally (client-only)
 *
 * - Imports mouse-follower and gsap from npm
 * - Attaches them to window for global access (like in your vanilla JS)
 * - Ensures they are only loaded on the client (never during SSR)
 *
 * Usage: No need to import in components, just use window.MouseFollower and window.gsap
 */
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async () => {
  if (import.meta.server) return // Only run on client
  const gsap = (await import('gsap')).default
  const MouseFollower = (await import('mouse-follower')).default
  window.gsap = gsap
  window.MouseFollower = MouseFollower
})
