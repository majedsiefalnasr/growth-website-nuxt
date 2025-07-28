<script setup lang="ts">
/**
 * Reactive state for blog view mode.
 * 'grid' or 'list'.
 */
import type { Blog } from '@/components/blog/blogs.mock'

const viewMode = ref<'grid' | 'list'>('grid')

/**
 * Switches the blog view mode.
 * @param {"grid"|"list"} mode - The view mode to switch to.
 * @returns {void}
 */
function setViewMode(mode: 'grid' | 'list'): void {
  if (viewMode.value !== mode) {
    viewMode.value = mode
  }
}

interface Category {
  /* Category display name. */
  name: string
  /* Category link (URL). */
  link: string
}

/**
 * Props for List component.
 * @typedef {Object} ListProps
 * @property {Blog[]} blogs - Array of blog objects to display in the list.
 * @property {Category[]} categories - Categories to display (nullable, single, or list).
 * @property {string} [title] - Title for the blog list section.
 */

const props = defineProps<{
  blogs: Blog[]
  categories?: Category[] | Category | null
  title?: string
}>()
const blogs = props.blogs
const categoriesProp = props.categories ?? null

/**
 * Normalized categories array for template rendering.
 * Ensures categories is always an array or undefined.
 */
const normalizedCategories = computed<Category[] | undefined>(() => {
  if (!categoriesProp) return undefined
  if (Array.isArray(categoriesProp)) return categoriesProp
  return [categoriesProp]
})
</script>

<template>
  <div
    class="blog-block"
    data-section="blog"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <!-- Content -->
    <div class="row">
      <!-- Header -->
      <div class="header col-12 mb-5">
        <div class="row">
          <div v-if="title" class="col-12 col-lg-8">
            <!-- Title -->
            <h2
              data-cursor-magnify-inner
              data-reveal-self="rotate"
              data-scrolled-into-view="false"
              data-scrolled-past-view="false"
            >
              <span> {{ title }}</span>
            </h2>
          </div>

          <div
            class="col-12"
            data-reveal-self="translate-up"
            data-reveal-delay="2"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <!-- Actions -->
            <div class="d-flex flex-wrap gap-4 align-items-center justify-content-between">
              <!-- Categories -->
              <div v-if="normalizedCategories" class="categories">
                <a
                  v-for="cat in normalizedCategories"
                  :key="cat.link"
                  class="item"
                  :href="cat.link"
                  :data-category="cat.name"
                  >{{ cat.name }}</a
                >
              </div>

              <!-- Change view -->
              <div class="change-view d-flex gap-2 align-items-center ms-auto">
                <button
                  :class="['btn btn-secondary btn-icon', { active: viewMode === 'grid' }]"
                  data-cursor-stick
                  :aria-pressed="viewMode === 'grid'"
                  aria-label="عرض شبكة"
                  @click="setViewMode('grid')"
                >
                  <Icon name="ph:squares-four" />
                </button>
                <button
                  :class="['btn btn-secondary btn-icon', { active: viewMode === 'list' }]"
                  data-cursor-stick
                  :aria-pressed="viewMode === 'list'"
                  aria-label="عرض قائمة"
                  @click="setViewMode('list')"
                >
                  <Icon name="ph:rows" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Blogs -->
      <div class="col-12">
        <div class="blog--list" :class="{ 'list--view': viewMode === 'list' }">
          <!-- Render blog list items from blogs using mapping function -->
          <BlogListItem
            v-for="(item, idx) in blogs"
            :key="(item.image || String(idx)) + idx"
            v-bind="item"
          />
        </div>

        <nav class="blog--pagination" aria-label="Blog navigation">
          <ul class="pagination">
            <!-- Prev -->
            <li class="page-item prev">
              <a class="page-link" href="#">
                <em class="ph-icon-caretright"></em>
                <span>السابق</span>
              </a>
            </li>

            <!-- Current page number -->
            <li class="page-item number">
              <div class="page-link">13</div>
            </li>

            <!-- List -->
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><div class="page-link disabled">...</div></li>
            <li class="page-item"><a class="page-link" href="#">20</a></li>

            <!-- Next -->
            <li class="page-item next">
              <a class="page-link" href="#">
                <span>التالي</span>
                <em class="ph-icon-caretleft"></em>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Background -->
    <div class="background">
      <div class="bg-1">
        <img src="/assets/images/ellipse-3.png" alt="background element" />
      </div>

      <div class="bg-dotted">
        <img src="/assets/images/bg-dots.png" alt="background element" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-block {
  position: relative;
  z-index: 0;
  margin-bottom: 8.75rem;
}
.blog-block > *:not(.background) {
  z-index: 1;
}
.blog-block > .background > * {
  position: absolute;
  z-index: -1;
  width: 100%;
  pointer-events: none;
  text-align: center;
}
.blog-block > .background > .bg-1 {
  top: 50%;
  left: 0;
  transform: translateX(-50%) translateY(-50%);
  width: 200%;
}
.blog-block > .background > .bg-dotted {
  bottom: -80px;
  left: -40px;
  transform: translateY(0px);
  -webkit-animation: floatY_dotted 6s ease-in-out infinite;
  animation: floatY_dotted 6s ease-in-out infinite;
}
.blog-block > .background > .bg-dotted > * {
  transform: scale(0.8);
  margin-right: auto;
}
.blog-block .header h2 {
  margin-bottom: 1.25rem;
  color: var(--brand-500);
  font-weight: 700;
  font-size: 2rem;
}
.blog-block .header .subtitle {
  display: -webkit-box;
  font-size: 1.25rem;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.blog-block .header .info,
.blog-block .header .info {
  opacity: 0.6;
  margin-top: 1rem;
  font-size: 0.88rem;
}
.blog-block .categories {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.blog-block .categories .item {
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
.blog-block .categories .item.active {
  background-color: var(--brand-500);
  pointer-events: none;
  color: var(--brand-white);
}
.blog-block .categories .item:hover {
  box-shadow: 0px 3px 8px 0rem rgb(180 218 228 / 20%);
  background-color: var(--brand-200);
  color: var(--brand-500);
}
.blog-block .change-view {
  display: none !important;
}
.blog--list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
.blog--list > .item {
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  margin-bottom: 1rem;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
.blog--list > .item.big {
  grid-column: auto / span 2;
}
.blog--list > .item .thumbnail {
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
.blog--list > .item .thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.blog--list > .item > .content {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  width: 100%;
}
.blog--list > .item > .content .categories {
  z-index: 2;
  margin-bottom: 0 !important;
}
.blog--list > .item > .content .header {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  margin-bottom: 0 !important;
}
.blog--list > .item > .content .header .title {
  transition: all 0.3s ease-in-out;
  color: inherit;
  font-weight: 600;
  font-size: 1.5rem;
  text-decoration: none;
}
.blog--list > .item > .content .header .subtitle {
  display: -webkit-box;
  font-size: 1.25rem;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.blog--list > .item > .content .header .info {
  opacity: 0.6;
  margin-top: 1rem;
  font-size: 0.88rem;
}
.blog--list > .item .thumbnail:hover ~ .content .header .title,
.blog--list > .item > .content .header .title:hover {
  color: var(--brand-700);
}
.blog--list > .item > .content .excerpt {
  display: none;
}
.blog--pagination {
  justify-content: center;
  align-items: stretch;
  margin-top: 6rem;
}
.blog--pagination .pagination {
  justify-content: center;
  align-items: stretch;
  gap: 1rem;
}
.blog--pagination .pagination .page-item:not(.prev):not(.next):not(.number) {
  display: none;
}
.blog--pagination .pagination .page-item.number {
  width: 100%;
}
.blog--pagination .pagination .page-link {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease-in-out;
  border: none;
  border-radius: 10rem;
  background: var(--brand-100);
  padding: 1rem 1.5rem;
  height: 100%;
  color: var(--brand-500);
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
}
.blog--pagination .pagination .page-link:hover:not(.disabled) {
  box-shadow: 0px 3px 8px 0rem rgb(180 218 228 / 20%);
  background-color: var(--brand-200);
  color: var(--brand-500);
}
.blog--pagination .pagination .page-link.disabled {
  cursor: none;
  background: transparent;
  padding: 1rem 0.5rem;
  pointer-events: none;
}
.blog--pagination .pagination .page-item.number .page-link {
  padding: 1rem 2.5rem;
}
.blog--pagination .pagination .page-link > em {
  font-size: 1.5rem;
}
.blog--pagination .pagination .page-link > span {
  display: none;
}

/* Responsiveness */
/************************************* */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .blog-block .header .subtitle {
    font-size: 1.13rem;
  }
  .blog-block > .background > .bg-dotted > * {
    transform: scale(1);
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .blog-block .change-view {
    display: flex !important;
  }
  .blog-block .categories {
    flex-wrap: wrap;
    overflow-x: hidden;
  }
  .blog--list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: dense;
    gap: 2.5rem;
  }
  .blog--list.list--view {
    display: flex;
    flex-direction: column;
  }
  .blog--list.list--view > .item {
    flex-direction: row;
    gap: 4rem;
  }
  .blog--list > .item .thumbnail {
    height: 18rem;
  }
  .blog--pagination .pagination .page-item:not(.prev):not(.next):not(.number) {
    display: flex;
  }
  .blog--pagination .pagination .page-link > span {
    display: block;
  }
  .blog--pagination .pagination .page-link > em,
  .blog--pagination .pagination .page-item.number {
    display: none;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .blog-block {
    margin-bottom: 12.5rem;
  }
  .blog-block .header h2 {
    font-size: 3rem;
  }
  .blog-block .marquee__group .item img {
    height: 3.25rem;
  }
  .blog--list {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
