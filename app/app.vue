<script setup lang="ts">
/**
 * Sets the HTML lang and dir attributes based on the current locale.
 * Ensures accessibility and correct text direction for all users.
 * @file app.vue
 */

/**
 * Returns the current locale code.
 * @returns {string} The current locale code, defaults to 'en'.
 */
function getCurrentLocale(): string {
  const { locale } = useI18n()
  return locale.value || 'en'
}

/**
 * Returns the direction (ltr/rtl) for the current locale.
 * @returns {"ltr" | "rtl" | "auto"} The direction for the current locale, defaults to 'ltr'.
 */
type LocaleObject = { code: string; dir?: 'ltr' | 'rtl' | 'auto' }
function getCurrentLocaleDir(): 'ltr' | 'rtl' | 'auto' {
  const { locales } = useI18n()
  const currentLocale = getCurrentLocale()
  // Accepts dir as string | undefined, fallback to 'ltr' if not set
  const found = (locales.value as LocaleObject[]).find((locale) => locale.code === currentLocale)
  return found && (found.dir === 'rtl' || found.dir === 'ltr' || found.dir === 'auto')
    ? found.dir
    : 'ltr'
}

const currentLocale = getCurrentLocale()
const currentLocaleDir = getCurrentLocaleDir()

useHead({
  htmlAttrs: {
    lang: currentLocale, // Set the default locale
    dir: currentLocaleDir as 'ltr' | 'rtl' | 'auto', // Set the default direction
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
