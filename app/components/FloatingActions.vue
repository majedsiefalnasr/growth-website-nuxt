<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

/**
 * FloatingActions component provides floating share and back-to-top actions.
 *
 * @module FloatingActions
 */

const isVisible = ref(false)

/**
 * Handles scroll event to toggle floating actions visibility.
 *
 * @returns {void}
 */
function handleScroll(): void {
  isVisible.value = window.pageYOffset > 100
}

/**
 * Shares the current page using the Web Share API.
 *
 * @returns {void}
 */
function onShare(): void {
  const shareData = {
    title: document.title,
    text:
      document.querySelector('[itemprop=description]')?.getAttribute('content') ||
      document.querySelector('[name=description]')?.getAttribute('content') ||
      'Without technical experience and with ease, you can sell anywhere and anytime with your online store and with your commercial identity',
    url: document.URL,
  }
  if (navigator.share) {
    navigator.share(shareData)
  } else {
    // Reason: Fallback for browsers that do not support Web Share API
    alert('Sharing is not supported in this browser.')
  }
}

/**
 * Scrolls the window to the top smoothly.
 *
 * @returns {void}
 */
function onBackToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    id="floating-actions"
    :class="[
      'fixed right-8 bottom-8 z-[100] flex gap-2 transition-all duration-500 ease-[cubic-bezier(0.694,0,0.335,1)]',
      isVisible
        ? 'pointer-events-auto translate-y-0 opacity-100'
        : 'pointer-events-none translate-y-32 opacity-0',
    ]"
    aria-label="Floating actions"
  >
    <!-- Share -->
    <UButton
      icon="i-ph-share-network"
      color="primary"
      variant="solid"
      class="bg-brand-800 hover:bg-brand-700 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-2xl text-white"
      aria-label="Share"
      @click="onShare"
    />
    <!-- Back to top -->
    <UButton
      icon="i-ph-caret-up"
      color="primary"
      variant="solid"
      class="bg-brand-800 hover:bg-brand-700 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-2xl text-white transition-all delay-100 duration-500"
      aria-label="Back to top"
      :class="
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-32 opacity-0'
      "
      @click="onBackToTop"
    />
  </div>
</template>

<style scoped>
/* No additional styles needed; all handled by Tailwind classes */
</style>
