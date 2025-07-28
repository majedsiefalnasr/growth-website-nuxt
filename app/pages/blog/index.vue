<script setup lang="ts">
import { blogsMock } from '@/components/blog/blogs.mock'
</script>

<template>
  <div>
    <BlogHero />
    <BlogList
      title="احدث المقالات"
      :blogs="blogsMock"
      :categories="[
        { name: 'Category 1', link: '/category-1' },
        { name: 'Category 2', link: '/category-2' },
      ]"
    />
  </div>
</template>
