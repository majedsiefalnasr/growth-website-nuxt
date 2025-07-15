<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Handles the navbar open/close and scroll state logic.
 * Adapts the legacy JS logic to Vue Composition API.
 * @file Navbar.vue
 */

// State
const isOpen = ref(false)
const isScrolled = ref(false)

/**
 * Checks if the page is scrolled and updates the navbar state.
 * @returns {void}
 */
function handleScroll(): void {
  isScrolled.value = window.scrollY !== 0
}

/**
 * Toggles the navbar open/close state and manages body scroll.
 * @returns {void}
 */
function toggleNavbar(): void {
  isOpen.value = !isOpen.value
  // # Reason: Prevent background scroll when navbar is open (mobile)
  document.body.style.overflowY = isOpen.value ? 'hidden' : 'auto'
}

/**
 * Closes the navbar if background is clicked.
 * @returns {void}
 */
function closeNavbarOnBackground(): void {
  if (isOpen.value) toggleNavbar()
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflowY = 'auto'
})
</script>

<template>
  <div class="navbar" data-section="navbar" :class="{ open: isOpen, 'is-scrolled': isScrolled }">
    <!-- Main navbar -->
    <div class="d-flex justify-content-between align-items-center gap-4 navbar-main">
      <!-- Navbar -->
      <div class="d-flex gap-5 align-items-center">
        <!-- Site logo -->
        <NuxtLink to="/" class="site-logo" aria-label="Growth - your shopping partner">
          <img src="/assets/images/logo.png" alt="Growth - your shopping partner" />
          <img
            class="symbol"
            src="/assets/images/logo-symbol.png"
            alt="Growth - your shopping partner"
          />
        </NuxtLink>
        <!-- Main navbar -->
        <div class="d-flex navbar-main-list">
          <NuxtLink to="/academy" class="nav-link" data-cursor-magnify-sm>الاكاديمية</NuxtLink>
          <NuxtLink to="/pricing" class="nav-link" data-cursor-magnify-sm>الباقات</NuxtLink>
          <NuxtLink to="/blog" class="nav-link" data-cursor-magnify-sm>المدونة</NuxtLink>
          <NuxtLink to="/contact" class="nav-link" data-cursor-magnify-sm>تواصل معنا</NuxtLink>
        </div>
      </div>
      <!-- Actions -->
      <div class="d-flex align-items-center gap-2 actions">
        <div class="inner-actions">
          <div class="gap-2 d-flex align-items-center">
            <!-- Language switcher -->
            <div class="dropdown">
              <button
                id="language-switcher-dropdown"
                class="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                data-cursor-magnify-sm
                aria-expanded="false"
                data-bs-offset="0,20"
              >
                <span class="text">العربية</span>
                <icon name="ph:translate" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="language-switcher-dropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <!-- Sign in -->
            <NuxtLink to="/forms/signin-account" class="btn btn-primary" data-cursor-stick
              >تسجيل دخول</NuxtLink
            >
          </div>
          <!-- Create store -->
          <NuxtLink
            to="/forms/create-account"
            class="btn btn-primary create-store"
            data-cursor-stick
          >
            أنشئ متجرك الآن
          </NuxtLink>
        </div>
        <!-- Mobile nav toggler -->
        <div
          class="toggler"
          tabindex="0"
          aria-label="Toggle navigation"
          role="button"
          @click="toggleNavbar"
        >
          <svg viewBox="0 0 100 100" width="80" aria-hidden="true">
            <path
              class="line top"
              d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
            ></path>
            <path class="line middle" d="m 30,50 h 40"></path>
            <path
              class="line bottom"
              d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <!-- Mobile nav background -->
    <div class="background" aria-hidden="true" @click="closeNavbarOnBackground"></div>
  </div>
</template>

<style scoped>
[navbar] [top],
.navbar .top {
  border-bottom: 1px solid var(--brand-200);
  padding: 1.5rem 0;
}
.navbar .navbar-main {
  --reveal-delay: 0s;
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 101;
  transition:
    background 0.9s cubic-bezier(0.165, 0.84, 0.44, 1) var(--reveal-delay),
    box-shadow 0.9s cubic-bezier(0.165, 0.84, 0.44, 1) var(--reveal-delay),
    -webkit-transform 0.9s cubic-bezier(0.165, 0.84, 0.44, 1) var(--reveal-delay);
  border-radius: 1rem;
  padding: 1.5rem;
  width: 100%;
  max-width: calc(100% - 2 * var(--bs-gutter-x, 0.75rem));
}
.navbar.is-scrolled .navbar-main {
  backdrop-filter: saturate(180%) blur(1rem);
  -webkit-backdrop-filter: saturate(180%) blur(1rem);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.7);
}
.navbar.is-scrolled.open .navbar-main {
  background: rgba(255, 255, 255, 1);
}
.navbar.open .navbar-main > * {
  z-index: 100;
}
.navbar .navbar-main .site-logo {
  --reveal-delay: 0s;
  transition:
    all 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) var(--reveal-delay),
    -webkit-transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) var(--reveal-delay);
}
.navbar.open:not(.is-scrolled) .navbar-main .site-logo {
  -webkit-filter: brightness(0) invert(1);
  filter: brightness(0) invert(1);
}
.navbar .navbar-main .site-logo img {
  height: 2rem;
}
.navbar.is-scrolled .navbar-main .site-logo img:not(.symbol),
.navbar:not(.is-scrolled).open .navbar-main .site-logo img:not(.symbol),
.navbar:not(.is-scrolled) .navbar-main .site-logo img.symbol {
  display: none;
}
.navbar:not(.is-scrolled).open .navbar-main .site-logo img.symbol {
  display: block;
}
.navbar .navbar-main .navbar-main-list {
  --reveal-delay: 0.1s;
  position: fixed;
  top: 6.5rem;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  align-items: start;
  gap: 1rem;
  transform: translateY(-30rem);
  opacity: 0;
  z-index: 99;
  transition:
    opacity 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) var(--reveal-delay),
    transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) var(--reveal-delay),
    -webkit-transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) var(--reveal-delay);
  margin: 0 var(--bs-gutter-x, 0.75rem);
  border-radius: 1rem;
  height: auto;
}
.navbar.is-scrolled .navbar-main .navbar-main-list {
  top: 7.5rem;
}
.navbar.open .navbar-main .navbar-main-list {
  transform: translateY(0);
  opacity: 1;
}
.navbar .navbar-main .navbar-main-list .nav-link {
  transition: all 0.15s ease-in-out;
  margin: 0;
  border-radius: 5rem;
  background-color: var(--brand-white);
  padding: 0.5rem 1.5rem;
  color: var(--brand-900);
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
}
.navbar .navbar-main .navbar-main-list .nav-link:hover {
  color: var(--brand-500);
}
.navbar .navbar-main .navbar-main-list:hover .nav-link {
  opacity: 0.5;
}
.navbar .navbar-main .navbar-main-list:hover .nav-link:hover {
  opacity: 1;
}
.navbar .navbar-main .actions > *:not(.toggler) {
  display: none;
}
.navbar .navbar-main .navbar-main-list .actions > * {
  display: block;
}
.navbar.is-scrolled .navbar-main .actions > .create-store {
  display: block;
  box-shadow: none;
  padding: 0.2rem;
  font-size: 1.13rem;
}
.navbar .navbar-main .actions > .inner-actions {
  display: none;
}
.navbar.open .navbar-main .actions > .inner-actions {
  display: flex;
}
.navbar.is-scrolled .navbar-main .actions > .inner-actions {
  display: flex;
}
.navbar .navbar-main .actions > .inner-actions > *:not(.create-store) {
  display: none;
}
.navbar.open .navbar-main .actions > .inner-actions > *:not(.create-store) {
  display: flex;
}
.navbar.open .navbar-main .actions > .inner-actions > .create-store,
.navbar.open .navbar-main .actions > .inner-actions > *:not(.create-store) > *:not(.dropdown) {
  display: none;
}
.navbar.open:not(.is-scrolled)
  .navbar-main
  .actions
  > .inner-actions
  > *:not(.create-store)
  > *.dropdown
  .btn {
  color: var(--brand-white);
}
.navbar.open:not(.is-scrolled)
  .navbar-main
  .actions
  > .inner-actions
  > *:not(.create-store)
  > *.dropdown
  .btn:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.5);
}
.navbar .navbar-main .actions > .toggler {
  --reveal-delay: 0s;
  display: flex;
  flex-direction: column;
  transform: scale(1.5);
  transition:
    all 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) var(--reveal-delay),
    -webkit-transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) var(--reveal-delay);
  cursor: pointer;
  width: 40px;
}
.navbar.open:not(.is-scrolled) .navbar-main .actions > .toggler {
  -webkit-filter: brightness(0) invert(1);
  filter: brightness(0) invert(1);
}
.navbar .navbar-main .actions > .toggler > * {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.navbar .navbar-main .actions > .toggler > *.active {
  transform: rotate(45deg);
}
.navbar .navbar-main .actions > .toggler > * .line {
  fill: none;
  transition:
    stroke-dasharray 400ms,
    stroke-dashoffset 400ms;
  stroke: var(--brand-black);
  stroke-width: 4;
  stroke-linecap: round;
}
.navbar .navbar-main .actions > .toggler > * .top {
  stroke-dasharray: 40 160;
}
.navbar .navbar-main .actions > .toggler > * .middle {
  stroke-dasharray: 40 142;
  transform-origin: 50%;
  transition: transform 400ms;
}
.navbar .navbar-main .actions > .toggler > * .bottom {
  stroke-dasharray: 40 85;
  transform-origin: 50%;
  transition:
    transform 400ms,
    stroke-dashoffset 400ms;
}
.navbar.open .navbar-main .actions > .toggler > * .top,
.navbar .navbar-main .actions > .toggler > *.active .top {
  stroke-dashoffset: -64px;
}
.navbar.open .navbar-main .actions > .toggler > * .middle,
.navbar .navbar-main .actions > .toggler > *.active .middle {
  transform: rotate(90deg);
}
.navbar.open .navbar-main .actions > .toggler > * .bottom,
.navbar .navbar-main .actions > .toggler > *.active .bottom {
  stroke-dashoffset: -64px;
}
.navbar .background {
  --reveal-delay: 0s;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  opacity: 0;
  z-index: 99;
  transition: opacity 0.9s cubic-bezier(0.165, 0.84, 0.44, 1) var(--reveal-delay);
  background-color: var(--brand-black);
  width: 100%;
  height: 100%;
}
.navbar.open .background {
  transform: translateY(0);
  opacity: 0.8;
}

/* Responsiveness */
/*************************** */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .navbar .navbar-main {
    max-width: calc(540px - 2 * var(--bs-gutter-x, 0.75rem));
  }
  .navbar .navbar-main .site-logo img:not(.symbol) {
    display: block !important;
  }
  .navbar .navbar-main .site-logo img.symbol,
  .navbar:not(.is-scrolled).open .navbar-main .site-logo img.symbol {
    display: none;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .navbar .navbar-main {
    max-width: calc(720px - 2 * var(--bs-gutter-x, 0.75rem));
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .navbar .navbar-main {
    max-width: calc(960px - 2 * var(--bs-gutter-x, 0.75rem));
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .navbar .navbar-main {
    max-width: calc(1140px - 2 * var(--bs-gutter-x, 0.75rem));
  }
  .navbar .background {
    display: none;
  }
  .navbar.open .navbar-main .navbar-main-list {
    position: unset;
    flex-direction: row;
  }
  .navbar .navbar-main .navbar-main-list {
    position: unset;
    flex-direction: row;
    gap: 1.5rem;
    transform: translateY(0);
    opacity: 1;
  }
  .navbar .navbar-main .navbar-main-list .nav-link {
    background-color: transparent;
    padding: 0;
    font-size: 1.13rem;
  }
  .navbar .navbar-main .actions > *:not(.toggler),
  .navbar .navbar-main .actions > .inner-actions > *:not(.create-store) {
    display: flex;
  }
  .navbar .navbar-main .actions > .toggler,
  .navbar .navbar-main .actions > .inner-actions > .create-store {
    display: none;
  }
}

/* Extra large devices (large desktops, 1400px and up) */
@media (min-width: 1400px) {
  .navbar .navbar-main {
    max-width: calc(1320px - 2 * var(--bs-gutter-x, 0.75rem));
  }
}
</style>
