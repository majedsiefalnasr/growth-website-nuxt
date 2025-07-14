<script setup lang="ts">
/**
 * Navbar component for Growth website.
 *
 * Renders the main navigation bar with logo, links, actions, and responsive toggler. Uses NuxtUI
 * and TailwindCSS for styling and accessibility.
 *
 * @module Navbar
 */
</script>

<template>
  <div navbar>
    <!-- Main navbar -->
    <div class="flex items-center justify-between gap-4">
      <!-- Navbar -->
      <div class="flex items-center gap-5">
        <!-- Site logo -->
        <NuxtLink to="/" class="site-logo flex items-center">
          <img
            src="/assets/images/logo.png"
            alt="Growth - your shopping partner"
            class="hidden h-8 md:inline"
          />
          <img
            class="symbol h-8 md:hidden"
            src="/assets/images/logo-symbol.png"
            alt="Growth - your shopping partner"
          />
        </NuxtLink>
        <!-- Main navbar -->
        <div class="flex">
          <NuxtLink to="/academy" class="nav-link">الاكاديمية</NuxtLink>
          <NuxtLink to="/price" class="nav-link">الباقات</NuxtLink>
          <NuxtLink to="/blog" class="nav-link">المدونة</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">تواصل معنا</NuxtLink>
        </div>
      </div>
      <!-- Actions -->
      <div class="flex items-center gap-2" actions>
        <div class="inner-actions">
          <div class="flex gap-2">
            <!-- Language switcher -->
            <UDropdown>
              <template #activator>
                <UButton variant="ghost" icon="i-heroicons-language" trailing> العربية </UButton>
              </template>
              <UDropdownItem>English</UDropdownItem>
              <UDropdownItem>العربية</UDropdownItem>
            </UDropdown>
            <!-- Sign in -->
            <NuxtLink to="/forms/signin-account" class="btn btn-primary">تسجيل دخول</NuxtLink>
          </div>
          <!-- Create store -->
          <NuxtLink to="/forms/create-account" class="btn btn-primary create-store"
            >أنشئ متجرك الآن</NuxtLink
          >
        </div>
        <!-- Mobile nav toggler -->
        <div class="toggler cursor-pointer">
          <svg viewBox="0 0 100 100" width="40">
            <path
              class="line top"
              d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
            />
            <path class="line middle" d="m 30,50 h 40" />
            <path
              class="line bottom"
              d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
            />
          </svg>
        </div>
      </div>
    </div>
    <!-- Mobile nav background -->
    <div class="background"></div>
  </div>
</template>

<style scoped>
/* No custom CSS. All styles are handled by TailwindCSS and NuxtUI. */
</style>
