<script setup lang="ts">
import { onMounted } from 'vue'

/**
 * Hides the page loader after the page is fully loaded, waiting at least 1 second.
 * Ensures a smooth transition and prevents flicker for fast loads.
 */
onMounted(() => {
  // Reason: Wait for both DOMContentLoaded and a minimum delay for UX smoothness
  const loader = document.getElementById('page-loader')
  if (!loader) return

  const hideLoader = () => {
    loader.classList.add('hide')
    // Optionally, remove loader from DOM after transition for accessibility
    setTimeout(() => {
      loader.setAttribute('aria-hidden', 'true')
    }, 350) // matches CSS transition
  }

  // Wait for both DOMContentLoaded and 1s minimum
  let loaded = false
  let timerDone = false

  const tryHide = () => {
    if (loaded && timerDone) hideLoader()
  }

  setTimeout(() => {
    timerDone = true
    tryHide()
  }, 1000)

  if (document.readyState === 'complete') {
    loaded = true
    tryHide()
  } else {
    window.addEventListener('load', () => {
      loaded = true
      tryHide()
    })
  }
})
</script>

<template>
  <div
    id="page-loader"
    class="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
  >
    <div class="d-flex flex-column align-items-center justify-content-center w-100 h-100">
      <img
        class="mb-3"
        src="/assets/images/logo.png"
        alt="Growth - your shopping partner"
        style="max-height: 3rem"
      />
    </div>
  </div>
</template>

<style scoped>
#page-loader {
  transform: translate3d(0px, 0%, 0px);
  transform-style: preserve-3d;
  opacity: 1;
  z-index: 800;
  transition: transform 0.4s ease-in;
  box-shadow: 1px 12px 24px 2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 1px 12px 24px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 1px 12px 24px 2px rgba(0, 0, 0, 0.1);
  background: #e1eaed;
  overflow: hidden;
}
#page-loader.hide {
  transform: translate3d(0px, -100%, 0px);
}
#page-loader.hide * {
  pointer-events: none;
}
</style>
