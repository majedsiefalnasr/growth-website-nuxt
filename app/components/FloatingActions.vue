<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Ref for the floating actions container.
 * @type {import('vue').Ref<HTMLElement | null>}
 */
const containerRef = ref<HTMLElement | null>(null)

/**
 * Controls the visibility of the floating actions.
 */
const isVisible = ref(false)

/**
 * Handles scroll event to toggle floating actions visibility.
 * @returns {void}
 */
function handleScroll(): void {
  isVisible.value = window.pageYOffset > 100
}

/**
 * Shares the current page using the Web Share API or shows an alert if not supported.
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
    alert('Sharing is not supported in this browser.')
  }
}

/**
 * Scrolls the window to the top smoothly.
 * @returns {void}
 */
function onBackToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    id="floating-actions"
    ref="containerRef"
    :class="[
      'position-fixed d-flex gap-2 z-3 end-0 me-4',
      isVisible ? 'view pointer-events-auto' : '',
    ]"
    style="bottom: 2rem; transition: all 500ms cubic-bezier(0.694, 0, 0.335, 1)"
    aria-label="Floating actions"
  >
    <!-- Share -->
    <button
      type="button"
      class="btn btn-primary rounded-circle d-flex align-items-center justify-content-center p-0"
      aria-label="Share"
      @click="onShare"
    >
      <Icon name="ph:share-network" />
    </button>

    <!-- Back to top -->
    <button
      type="button"
      class="btn btn-primary rounded-circle d-flex align-items-center justify-content-center p-0"
      aria-label="Back to top"
      @click="onBackToTop"
    >
      <Icon name="ph:caret-up" />
    </button>
  </div>
</template>

<style scoped>
#floating-actions {
  transform: translateY(7.5rem);
  opacity: 0;
  z-index: 1;
  pointer-events: none;
}
#floating-actions.view {
  transform: translateY(0);
  opacity: 1 !important;
  pointer-events: auto;
}
button {
  width: 3rem;
  height: 3rem;
}
button:hover {
  transform: none !important;
}
</style>
