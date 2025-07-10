# @nuxtjs/seo Integration

This document describes how the `@nuxtjs/seo` module is integrated into the Growth Nuxt 4 project.

## Purpose

`@nuxtjs/seo` provides automatic SEO meta tag generation and best practices for Nuxt applications, improving discoverability and search engine ranking.

## Installation

Installed via pnpm:

```sh
pnpm add @nuxtjs/seo
```

## Configuration

The module is registered in `nuxt.config.ts` under the `modules` array:

```ts
modules: [
  '@nuxtjs/seo',
  // ...other modules
],
```

### Basic Options Example

You can configure global SEO options in `nuxt.config.ts`:

```ts
seo: {
  title: 'Growth',
  description: 'Growth is a platform to empower individuals and small businesses online.',
  ogSiteName: 'Growth',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: '@growthplatform', // Update with your Twitter handle
  canonical: 'https://growth.example.com', // Update with your domain
  // ...other options
},
```

See the [@nuxtjs/seo documentation](https://github.com/nuxt-modules/seo) for all available options.

## Usage

- The module will automatically inject SEO meta tags into your pages.
- You can override SEO settings per page using the `seo` property in your page components.

## Accessibility & Best Practices

- Ensure all user-facing content has meaningful titles and descriptions.
- Use semantic HTML and ARIA attributes for better accessibility and SEO.

## References

- [@nuxtjs/seo GitHub](https://github.com/nuxt-modules/seo)
- [Nuxt SEO Guide](https://nuxt.com/docs/getting-started/seo)
