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
