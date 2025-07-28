<script setup lang="ts">
/**
 * Blog post list item component.
 *
 * @file ListItem.vue
 *
 * @example
 * <ListItem
 *   image="/assets/images/blog/blog-ex1.png"
 *   title="مرحبا بك في منصة حلول!"
 *   date="23 سبتمبر 2022"
 *   :excerpt="['هذا مثال لفقرات الملخص.', 'يمكنك تمرير أكثر من فقرة هنا.']"
 *   postLink="/blog/post"
 *   :categories="[
 *     { name: 'تقنية', link: '/blog/category/tech' },
 *     { name: 'تجارة', link: '/blog/category/business' }
 *   ]"
 *   readTime="9 دقائق"
 *   size="big"
 * />
 */

/**
 * Props for ListItem component.
 */

/**
 * Category object for blog post.
 */
export interface BlogCategory {
  /** Category name */
  name: string
  /** Category link */
  link: string
}

interface ListItemProps {
  /** Image URL for the blog post thumbnail (required) */
  image: string
  /** Alt text for the image (optional, fallback to title) */
  imageAlt?: string
  /** Blog post title (required) */
  title: string
  /** Blog post date (display string, required) */
  date: string
  /** Blog post read time (display string, optional) */
  readTime?: string
  /** Blog post excerpt (array of paragraphs, required) */
  excerpt: string
  /** Blog post categories (optional, up to 3) */
  categories?: BlogCategory[]
  /** Link to the blog post (required) */
  postLink: string
  /** Size style for the post: 'big' or 'default' (optional) */
  size?: 'big' | 'default'
}

const props = defineProps<ListItemProps>()

// Fallback for imageAlt
const computedImageAlt = computed(() => props.imageAlt || props.title)

// Limit categories to 3 if provided
const limitedCategories = computed(() => {
  if (!props.categories) return []
  return props.categories.slice(0, 3)
})
</script>

<template>
  <div
    :class="['post', props.size === 'big' ? 'big' : '']"
    data-reveal-self="translate-up"
    data-reveal-delay="2"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <!-- Image -->
    <NuxtLink :to="postLink" class="thumbnail" data-cursor-text="عرض المقالة">
      <img :src="image" :alt="computedImageAlt" class="img-fluid rounded" />
    </NuxtLink>

    <!-- Content -->
    <div class="content">
      <!-- Categories -->
      <div v-if="limitedCategories.length" class="categories mb-2">
        <template v-for="cat in limitedCategories" :key="cat.name + cat.link">
          <NuxtLink :to="cat.link" class="item">
            {{ cat.name }}
          </NuxtLink>
        </template>
      </div>

      <!-- Header -->
      <div class="header">
        <!-- Title -->
        <h3>
          <NuxtLink :to="postLink" class="title stretched-link" data-cursor-text="عرض المقالة">
            {{ title }}
          </NuxtLink>
        </h3>

        <!-- Excerpt -->
        <div v-if="excerpt" class="excerpt">
          <p>{{ excerpt }}</p>
        </div>

        <!-- Info -->
        <div class="info">
          {{ date }}
          <span v-if="readTime"> · قراءة في {{ readTime }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  margin-bottom: 1rem;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
.post.big {
  grid-column: auto / span 2;
}
.post .thumbnail {
  z-index: 3;
  transition:
    transform 0.3s var(--ease-out-quad),
    box-shadow 0.3s var(--ease-out-quad);
  margin-bottom: 1.5rem;
  box-shadow:
    rgb(0 0 0 / 30%) 0px 30px 60px -10px,
    rgb(0 0 0 / 33%) 0px 18px 36px -18px;
  border-radius: 1rem;
  width: 100%;
  height: auto;
  overflow: hidden;
}
.post .thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.post > .content {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  width: 100%;
}
.categories {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.categories .item {
  transition: all 0.3s ease-in-out;
  border-radius: 10rem;
  background: var(--brand-100);
  padding: 0.5rem 1.5rem;
  scroll-snap-align: start;
  color: var(--brand-500);
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
}
.categories .item.active {
  background-color: var(--brand-500);
  pointer-events: none;
  color: var(--brand-white);
}
.categories .item:hover {
  box-shadow: 0px 3px 8px 0rem rgb(180 218 228 / 20%);
  background-color: var(--brand-200);
  color: var(--brand-500);
}
.post > .content .categories {
  z-index: 2;
  margin-bottom: 0 !important;
}
.post > .content .header {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  margin-bottom: 0 !important;
}
.post > .content .header .title {
  transition: all 0.3s ease-in-out;
  color: inherit;
  font-weight: 600;
  font-size: 1.5rem;
  text-decoration: none;
}
.post > .content .header .subtitle {
  display: -webkit-box;
  font-size: 1.25rem;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.post > .content .header .info {
  opacity: 0.6;
  margin-top: 1rem;
  font-size: 0.88rem;
}
.post .thumbnail:hover ~ .content .header .title,
.post > .content .header .title:hover {
  color: var(--brand-700);
}
.post > .content .excerpt {
  display: -webkit-box;
  font-size: 1rem;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Responsiveness */
/************************************* */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .post .thumbnail {
    height: 18rem;
  }
  .categories {
    flex-wrap: wrap;
    overflow-x: hidden;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
