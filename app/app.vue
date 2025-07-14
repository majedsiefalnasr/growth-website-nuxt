<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

/**
 * Sets up locale and direction for the app using NuxtUI and i18n.
 *
 * @module AppSetup
 */

const { locale } = useI18n()

/**
 * Computed property for the current language code.
 *
 * @returns {string} The current locale code.
 */
const lang = computed(() => locales[locale.value].code)

/**
 * Computed property for the current text direction.
 *
 * @returns {string} The current direction (e.g., 'ltr' or 'rtl').
 */
const dir = computed(() => locales[locale.value].dir)

// Set HTML attributes for language and direction for accessibility and SEO
useHead({
  htmlAttrs: {
    lang,
    dir,
  },
})
</script>

<template>
  <!--
    UApp provides NuxtUI context and locale support.
    NuxtLayout and NuxtPage handle routing and layout.
    All user-facing content is wrapped for accessibility and i18n.
  -->
  <UApp :locale="locales[locale]">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
