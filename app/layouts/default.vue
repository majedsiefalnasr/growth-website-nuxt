<!-- Default layout for Nuxt 4 with Cuberto Mouse Follower integration -->
<script setup lang="ts">
import { useMouseFollower } from '~/composables/useMouseFollower'

// Initialize Cuberto Mouse Follower globally (only once for the app)
useMouseFollower()
</script>

<template>
  <UContainer class="min-h-screen min-w-full">
    <slot />
    <FloatingActions />
  </UContainer>
</template>
