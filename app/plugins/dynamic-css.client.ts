import { defineNuxtPlugin } from '#app'
import { watch } from 'vue'

/**
 * Nuxt plugin to dynamically load Bootstrap and custom CSS based on the current locale direction.
 * Ensures correct RTL/LTR styles and updates on locale change.
 * @param {import('#app').NuxtApp} nuxtApp - The Nuxt app instance.
 */
export default defineNuxtPlugin((nuxtApp) => {
  // Access i18n instance from globalProperties
  const i18n = nuxtApp.vueApp.config.globalProperties.$i18n
  if (!i18n) {
    // # Reason: Defensive check in case i18n is not initialized yet

    console.warn('[dynamic-css] $i18n is not available on globalProperties')
    return
  }

  /**
   * Updates the loaded CSS files based on the current locale direction.
   * Loads RTL or LTR Bootstrap as needed.
   */
  const updateCss = () => {
    const dir =
      i18n.localeProperties.value &&
      typeof (i18n.localeProperties.value as { dir?: string }).dir === 'string'
        ? (i18n.localeProperties.value as { dir: string }).dir
        : 'ltr'

    const stylesToLoad = [
      {
        id: 'bootstrap-css',
        href:
          dir === 'rtl'
            ? '/assets/css/plugins/bootstrap/bootstrap.rtl.css'
            : '/assets/css/plugins/bootstrap/bootstrap.ltr.css',
      },
      {
        id: 'custom-css',
        href: '/assets/css/plugins/bootstrap/bootstrap.css',
      },
    ]

    stylesToLoad.forEach(({ id, href }) => {
      const existing = document.getElementById(id)
      if (existing) existing.remove()

      const link = document.createElement('link')
      link.id = id
      link.rel = 'stylesheet'
      link.href = href
      document.head.appendChild(link)
    })
  }

  nuxtApp.hook('app:mounted', updateCss)

  // Watch for locale changes and update CSS accordingly
  watch(
    () => i18n.locale,
    () => {
      updateCss()
    }
  )

  // Watch for direction changes and update the HTML dir attribute
  watch(
    () => i18n.localeProperties?.dir || 'ltr',
    (dir: string) => {
      document.documentElement.setAttribute('dir', dir)
    }
  )
})
