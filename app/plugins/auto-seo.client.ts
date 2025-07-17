// Register auto-seo middleware as a Nuxt plugin for future compatibility
export default defineNuxtPlugin(() => {
  defineNuxtRouteMiddleware(() => {
    // Only run on client side and after hydration
    if (import.meta.server) return

    // Use nextTick to ensure the route is fully loaded
    nextTick(() => {
      try {
        const { setSeo } = useSeoMetaI18n()
        setSeo()
      } catch (error) {
        // Silently fail if composables aren't ready
        console.warn('Auto SEO failed:', error)
      }
    })
  })
})
