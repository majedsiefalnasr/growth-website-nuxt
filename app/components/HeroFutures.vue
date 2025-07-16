<script setup lang="ts">
/**
 * Cycles the active feature item like a slider, with interval time passed as a prop.
 * Removes manual click activation logic.
 *
 * @fileoverview Automatically cycles feature items' active state at a given interval.
 */
import { defineProps, onMounted, onUnmounted, ref } from 'vue'

/**
 * Props for HeroFutures
 * @property {number} interval - Time in milliseconds between active item changes
 */
const props = defineProps<{ interval?: number }>()

/**
 * Index of the currently active feature item
 */
const activeIndex = ref(0)

/**
 * List of feature items (for rendering)
 */
const features = [
  {
    image: '/assets/images/future-ex.png',
    icon: 'ph:gear',
    label: 'No design or coding experience required',
    text: 'لا حاجه لخبره بالتصميم او البرمجة',
  },
  {
    image: '/assets/images/future-ex2.png',
    icon: 'ph:translate',
    label: 'All features included',
    text: 'جميع المزايا مضمنة',
  },
  {
    image: '/assets/images/future-ex3.png',
    icon: 'ph:device-mobile-camera',
    label: 'Premium support',
    text: 'دعم فني مميز',
  },
]

let timer: ReturnType<typeof setInterval> | null = null
let paused = false

/**
 * Starts the auto-cycling timer
 */
function startTimer() {
  if (timer) clearInterval(timer)
  timer = setInterval(() => {
    if (!paused) {
      activeIndex.value = (activeIndex.value + 1) % features.length
    }
  }, props.interval ?? 5000)
}

/**
 * Handles click on a feature item
 * @param {number} idx - Index of clicked item
 */
function handleClick(idx: number) {
  activeIndex.value = idx
  startTimer() // Reset interval on click
}

/**
 * Handles mouse enter (hover) on a feature item
 */
function handleMouseEnter() {
  paused = true
}

/**
 * Handles mouse leave on a feature item
 */
function handleMouseLeave() {
  paused = false
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div
    class="futures d-flex gap-4"
    data-reveal-self="translate"
    data-reveal-delay="5"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
    role="list"
    aria-label="Feature highlights"
  >
    <div
      v-for="(feature, idx) in features"
      :key="feature.label"
      class="item"
      :class="{ active: idx === activeIndex }"
      :style="`background-image: url(${feature.image})`"
      role="listitem"
      :aria-label="feature.label"
      tabindex="0"
      :aria-pressed="idx === activeIndex"
      @click="handleClick(idx)"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div class="content d-flex gap-4 align-items-center">
        <div class="icon">
          <Icon :name="feature.icon" />
        </div>
        <h3 tabindex="0">{{ feature.text }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.futures {
  flex-direction: column;
}
.futures .item {
  display: flex;
  position: relative;
  align-items: end;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 1rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 5.5rem;
  overflow: hidden;
}
.futures .item:before {
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0.8;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  background: linear-gradient(180deg, rgb(0 0 0 / 0%) 0%, #000000 100%);
  width: 100%;
  height: 200%;
  content: '';
}
.futures .item.active:before {
  height: 80%;
}
.futures .item:hover:before {
  opacity: 1;
}
.futures .item.active {
  width: 100%;
  height: 15rem;
}
.futures .item .content {
  position: relative;
  right: 0;
  bottom: 0;
  flex-direction: row;
  z-index: 2;
  padding: 1.5rem;
  max-width: 100%;
  max-height: 100%;
  color: var(--brand-white);
}
.futures .item.active .content {
  flex-direction: row;
}
.futures .item .content .icon {
  display: inline-flex;
  order: 0;
  border-radius: 50%;
  background-color: var(--brand-200);
  padding: 0.75rem;
  color: var(--brand-900);
  font-size: 1.5rem;
}
.futures .item.active .content .icon {
  order: 0;
}
.futures .item .content .icon > * {
  background: var(--brand-black);
}
.futures .item .content h3 {
  display: -webkit-box;
  margin: 0;
  font-weight: 700;
  font-size: 1.5rem;
  writing-mode: horizontal-tb;
  text-orientation: mixed;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.futures .item.active .content h3 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.futures .item.active .content h3 {
  writing-mode: horizontal-tb;
  text-orientation: mixed;
}

/* Responsiveness */
/************************************* */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .futures .item .content h3 {
    font-size: 1.63rem;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .futures {
    flex-direction: row;
  }
  .futures .item {
    display: block;
    width: 7.5rem;
    height: 34rem;
  }
  .futures .item.active {
    height: 34rem;
  }
  .futures .item:before {
    height: 80%;
  }
  .futures .item .content {
    position: absolute;
    flex-direction: column;
  }
  .futures .item .content h3 {
    writing-mode: vertical-rl;
  }
  .futures .item .content .icon {
    order: 1;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  [text] h1 {
    font-size: 3rem;
  }
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
