<script setup lang="ts">
import { blogsMock } from '@/components/blog/blogs.mock'
</script>

<template>
  <div>
    <BlogCategoryHero />
    <BlogList :blogs="blogsMock" />
  </div>
</template>
