<script lang="ts" setup>
import type { PropType } from 'vue'
import { computed, defineProps } from 'vue'
/**
 * Breadcrumb item type definition.
 */
export interface BreadcrumbItem {
  /**
   * The display label for the breadcrumb item.
   */
  label: string
  /**
   * The route path for the breadcrumb item. If null, item is not a link.
   */
  to?: string | null
}

const props = defineProps({
  /**
   * Breadcrumb items to display. Each item should have a label and optional route.
   */
  items: {
    type: Array as PropType<BreadcrumbItem[]>,
    required: true,
    default: () => [],
  },
  /**
   * Optional: Show a back button with a label and route.
   */
  back: {
    type: Object as PropType<{ label: string; to: string }>,
    default: undefined,
  },
  /**
   * Maximum number of breadcrumb items to show before truncating.
   */
  maxItems: {
    type: Number,
    default: 4,
  },
})

/**
 * Compute the breadcrumb items to display, truncating if necessary.
 * @returns {BreadcrumbItem[]} Array of items to render, with ellipsis if truncated.
 */
const displayedItems = computed(() => {
  if (!props.items || props.items.length <= props.maxItems) {
    return props.items
  }
  // Truncate: show first, ellipsis, last (maxItems-2 in between)
  const first = props.items[0]
  const last = props.items[props.items.length - 1]
  const middleCount = props.maxItems - 2
  const middle = props.items.slice(props.items.length - middleCount - 1, props.items.length - 1)
  return [first, { label: '...', to: null }, ...middle, last]
})
</script>

<template>
  <div class="breadcrumb-block d-flex align-items-center gap-2" data-cursor-hidden>
    <!-- Back action -->
    <NuxtLink v-if="back" :to="back.to" class="btn btn-secondary btn-back me-2">
      {{ back.label }}
    </NuxtLink>

    <!-- Breadcrumb -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li
          v-for="(item, idx) in displayedItems ?? []"
          :key="idx"
          class="breadcrumb-item"
          :class="{ active: idx === (displayedItems?.length ?? 0) - 1 && item && item.to === null }"
          :aria-current="
            idx === (displayedItems?.length ?? 0) - 1 && item && item.to === null
              ? 'page'
              : undefined
          "
        >
          <template v-if="item && item.to && item.label !== '...'">
            <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
          </template>
          <template v-else>
            {{ item && item.label }}
          </template>
        </li>
      </ol>
    </nav>
  </div>
</template>

<style scoped>
.breadcrumb-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  border-radius: 1.5rem;
  background: var(--brand-white);
  width: 100%;
  user-select: none;
  --bs-breadcrumb-divider: '\\';
}
.breadcrumb-block .btn-back {
  width: 100%;
}
.breadcrumb-block .breadcrumb {
  margin: 0;
  padding: 1rem 2rem;
}
.breadcrumb-block .breadcrumb-item + .breadcrumb-item::before {
  color: var(--brand-900);
}
.breadcrumb-block .breadcrumb-item.active {
  opacity: 0.8;
  pointer-events: none;
}
.breadcrumb-block .breadcrumb-item a {
  color: var(--brand-900);
  text-decoration: none;
}
.breadcrumb-block .breadcrumb-item a:hover {
  color: var(--brand-500);
}

/* Responsiveness */
/************************************* */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .breadcrumb-block {
    width: auto;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .breadcrumb-block {
    flex-direction: row;
  }
  .breadcrumb-block .btn-back {
    width: auto;
  }
  .breadcrumb-block .breadcrumb {
    padding: 0 2rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .tocify {
    display: block;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
