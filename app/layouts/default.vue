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
</script>

<template>
  <div class="container">
    <Navbar />
    <slot />
    <FloatingActions />
  </div>
</template>

<style scoped>
.container {
  opacity: 0;
}
</style>
