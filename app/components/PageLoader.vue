<script setup lang="ts">
import { ref, watch } from 'vue'

/**
 * PageLoader.vue
 *
 * A reusable, accessible page loading overlay for Nuxt. Shows a centered logo and blocks
 * interaction while visible. Loader stays visible for at least 1 second, even if loading completes
 * sooner.
 *
 * @example
 *   <PageLoader :show="isLoading" :duration="3000" />
 *
 * @property {boolean} show - Controls loader visibility (default: true)
 * @property {number | null} duration - How long to show the loader (ms). If set, loader auto-hides
 *   after this duration.
 * @component
 */
const TRANSITION_DURATION = 300 // ms, must match CSS
const MIN_VISIBLE_DURATION = 1000 // ms

const props = defineProps({
  show: {
    type: Boolean,
    default: true,
  },
  duration: {
    type: Number,
    default: null,
  },
})

const visible = ref(props.show)
const isSlidingUp = ref(false)
const loaderRef = ref<HTMLElement | null>(null)
let hideTimer: ReturnType<typeof setTimeout> | null = null
let transitionTimer: ReturnType<typeof setTimeout> | null = null

/**
 * Handles showing and hiding the loader with minimum duration and transition.
 *
 * @param {boolean} val - Whether the loader should be shown.
 */
function handleLoaderVisibility(val: boolean): void {
  clearTimers()
  if (val) {
    visible.value = true
    isSlidingUp.value = false
    // If duration is set, auto-hide after duration
    if (props.duration) {
      hideTimer = setTimeout(() => startSlideUp(), props.duration)
    }
  } else {
    // Always show for at least MIN_VISIBLE_DURATION
    hideTimer = setTimeout(() => startSlideUp(), MIN_VISIBLE_DURATION)
  }
}

/** Starts the slide-up transition and hides the loader after the animation. */
function startSlideUp(): void {
  isSlidingUp.value = true
  transitionTimer = setTimeout(() => {
    visible.value = false
  }, TRANSITION_DURATION)
}

/** Clears all running timers to prevent memory leaks. */
function clearTimers(): void {
  if (hideTimer) {
    clearTimeout(hideTimer)
    hideTimer = null
  }
  if (transitionTimer) {
    clearTimeout(transitionTimer)
    transitionTimer = null
  }
}

watch(() => props.show, handleLoaderVisibility, { immediate: true })
</script>

<template>
  <div
    v-if="visible"
    ref="loaderRef"
    aria-live="polite"
    aria-busy="true"
    :class="[
      'fixed inset-0 z-[800] flex h-screen w-full items-center justify-center overflow-hidden bg-[#e1eaed] transition-transform duration-300 ease-in',
      isSlidingUp
        ? 'translate-y-[-100%] transform will-change-transform'
        : 'translate-y-0 transform',
    ]"
  >
    <div class="flex h-full w-full items-center justify-center">
      <img
        class="max-h-12 w-full object-contain"
        src="/assets/images/logo.png"
        alt="Growth - your shopping partner"
      />
    </div>
  </div>
</template>
