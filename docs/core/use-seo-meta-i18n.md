# useSeoMetaI18n Composable

## Overview

`useSeoMetaI18n` is a Nuxt composable that automatically sets SEO meta tags for each page based on the current route and i18n translation keys. It supports full or partial overrides, dynamic content, and alternate language links for internationalized sites. This composable is designed to work seamlessly with Nuxt's default layout and i18n setup, but can be used in any component or page as needed.

- **Automatic SEO**: Uses translation keys like `seo.<route>.title`, `seo.<route>.description`, and `seo.<route>.keywords` to set meta tags.
- **Override Support**: Allows overriding any or all SEO fields (title, description, keywords, og:image, custom meta, etc.) per page or component.
- **Alternate Links**: Generates `<link rel="alternate">` tags for all supported locales unless disabled.
- **Custom Meta**: Supports adding arbitrary meta tags (e.g., Open Graph, Twitter, product, article, etc.).
- **Bootstrap 5**: No custom CSS required; works with Bootstrap 5 utility classes and components.

## Usage Examples

### Automatic SEO via Layout

```vue
<!-- pages/index.vue -->
<template>
  <div>
    <h1>{{ $t('seo.index.title') }}</h1>
    <p>{{ $t('seo.index.description') }}</p>
  </div>
</template>

<script setup>
// SEO is automatically set by the default layout
// Uses translation keys: seo.index.title, seo.index.description, seo.index.keywords
</script>
```

```vue
<!-- pages/about.vue -->
<template>
  <div>
    <h1>{{ $t('seo.about.title') }}</h1>
    <p>{{ $t('seo.about.description') }}</p>
  </div>
</template>

<script setup>
// SEO is automatically set using: seo.about.title, seo.about.description, etc.
</script>
```

### Override Automatic SEO with Dynamic Content

```vue
<!-- pages/blog/[slug].vue -->
<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.excerpt }}</p>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: post } = await useFetch(`/api/posts/${route.params.slug}`)

// Override automatic SEO with dynamic content
const { setSeo } = useSeoMetaI18n()

// Set SEO after component is mounted to ensure it overrides the layout
onMounted(() => {
  setSeo({
    title: post.value.title,
    description: post.value.excerpt,
    keywords: post.value.tags.join(', '),
    customMeta: {
      'article:author': post.value.author,
      'article:published_time': post.value.publishedAt,
      'article:tag': post.value.tags.join(', '),
    },
  })
})
</script>
```

### Partial Override via onMounted

```vue
<!-- pages/contact.vue -->
<template>
  <div>
    <h1>{{ $t('seo.contact.title') }}</h1>
    <p>{{ $t('seo.contact.description') }}</p>
  </div>
</template>

<script setup>
// Override automatic SEO after mount
const { setSeo } = useSeoMetaI18n()

onMounted(() => {
  setSeo({
    customMeta: {
      robots: 'index, follow',
      author: 'Support Team',
    },
  })
})
</script>
```

### Complex Override with Dynamic Product Data

```vue
<!-- pages/products/[category]/[id].vue -->
<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: product } = await useFetch(`/api/products/${route.params.id}`)

const { setSeo } = useSeoMetaI18n()

// Override with dynamic product data after mount
onMounted(() => {
  setSeo({
    title: `${product.value.name} - ${product.value.category}`,
    description: product.value.description,
    keywords: `${product.value.name}, ${product.value.category}, ${product.value.tags.join(', ')}`,
    ogImage: product.value.image,
    customMeta: {
      'product:price': product.value.price,
      'product:availability': product.value.stock > 0 ? 'in stock' : 'out of stock',
    },
  })
})
</script>
```

### Skip Automatic SEO by Using a Different Layout

```vue
<!-- pages/no-auto-seo.vue -->
<template>
  <NuxtLayout name="minimal">
    <div>
      <h1>Custom SEO Page</h1>
    </div>
  </NuxtLayout>
</template>

<script setup>
// This page uses a different layout without auto SEO
const { setSeo } = useSeoMetaI18n()

// Set custom SEO
setSeo({
  title: 'Custom Page Title',
  description: 'Custom description',
  disableAlternateLinks: true,
  customMeta: {
    robots: 'noindex, nofollow',
  },
})
</script>
```

### Immediate SEO Override in Setup

```vue
<!-- pages/immediate-seo.vue -->
<template>
  <div>
    <h1>Immediate SEO</h1>
  </div>
</template>

<script setup>
// This will override the layout's automatic SEO immediately
const { setSeo } = useSeoMetaI18n()

setSeo({
  title: 'Immediate Custom Title',
  description: 'This SEO is set immediately in setup',
  customMeta: {
    priority: 'high',
  },
})
</script>
```

## API

### `setSeo(overrides?: SetSeoOptions): void`

Sets SEO meta tags for the current page. Call in `setup()` or `onMounted()` to override automatic SEO.

#### `SetSeoOptions`

- Disable alternate links if the page should not be indexed in all languages.

- Alternate language links are generated for all locales by default.

- [Nuxt i18n Documentation](https://i18n.nuxtjs.org/)
- [Nuxt useHead Documentation](https://nuxt.com/docs/api/composables/use-head)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
