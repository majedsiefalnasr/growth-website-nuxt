<!-- Default layout for Nuxt 4 with Cuberto Mouse Follower integration -->
<script setup lang="ts">
// Initialize Cuberto Mouse Follower globally (only once for the app)
useMouseFollower()

// Auto SEO on every page using this layout
onMounted(() => {
  const { setSeo } = useSeoMetaI18n()
  setSeo()
})

// Also set SEO on route change
const route = useRoute()
watch(
  () => route.path,
  () => {
    nextTick(() => {
      const { setSeo } = useSeoMetaI18n()
      setSeo()
    })
  }
)

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
  <div>
    <div class="content">
      <div class="container">
        <Navbar />
        <slot />
      </div>
    </div>

    <Footer />
    <FloatingActions />
  </div>
</template>

<style scoped>
.content {
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 10px #16181b;
  background-color: var(--root-bg);
  overflow-x: clip;
}
.container {
  opacity: 0;
}
</style>
