<!-- Default layout for Nuxt 4 with Cuberto Mouse Follower integration -->
<script setup lang="ts">
// Initialize Cuberto Mouse Follower globally (only once for the app)
import { useI18n } from '#imports'
import { computed, watchEffect } from 'vue'

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

type LocaleObject = { code: string; dir?: 'ltr' | 'rtl' | 'auto' }
const { locale, locales } = useI18n()

const currentLocale = computed(() => locale.value || 'en')
const currentLocaleDir = computed(() => {
  const found = (locales.value as LocaleObject[]).find((l) => l.code === locale.value)
  return found && (found.dir === 'rtl' || found.dir === 'ltr' || found.dir === 'auto')
    ? found.dir
    : 'ltr'
})

watchEffect(() => {
  useHead({
    htmlAttrs: {
      lang: currentLocale.value,
      dir: currentLocaleDir.value as 'ltr' | 'rtl' | 'auto',
    },
  })
})
</script>

<template>
  <div>
    <div class="content">
      <div class="container">
        <Navbar />
        <slot />
        <FooterCTA />
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
</style>
