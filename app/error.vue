<script setup>
import { useRouter } from 'vue-router'

/**
 * Redirects the user to the home page of their current locale using the i18n_redirected cookie value.
 * Falls back to root if the cookie is not set.
 * @returns {void}
 */
const match = document.cookie.split('; ').find((row) => row.startsWith('i18n_redirected='))
const i18nRedirected = match ? match.split('=')[1] : null
const router = useRouter()

onMounted(() => {
  // Reason: Ensures user is redirected to the correct localized home page
  if (i18nRedirected && i18nRedirected !== 'ar') {
    router.replace(`/${i18nRedirected}`)
  } else {
    router.replace('/')
  }
})
</script>

<template>
  <div>Redirecting to home...</div>
</template>
