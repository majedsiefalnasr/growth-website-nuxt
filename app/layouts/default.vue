<!-- Default layout for Nuxt 4 with Cuberto Mouse Follower integration -->
<script setup lang="ts">
import { useMouseFollower } from '~/composables/useMouseFollower'

// Initialize Cuberto Mouse Follower globally (only once for the app)
useMouseFollower()
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
