<script setup lang="ts">
// Reason: This is the main landing page for the Nuxt 4 app structure.
</script>

<template>
  <div>
    <PageLoader :duration="3000" />
    <div>
      <h1>Welcome to Growth (Nuxt 4)</h1>
      <p>
        This is your new Nuxt 4 home page. Start building your app in
        <code>app/pages/index.vue</code>.
      </p>
      <ColorModeSwitcher />
    </div>
  </div>
</template>
