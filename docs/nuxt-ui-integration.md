# @nuxt/ui Integration

This document describes how the `@nuxt/ui` module is integrated into the Growth Nuxt 4 project.

## Purpose

`@nuxt/ui` provides a set of accessible, customizable UI components and composables for Nuxt 3/4 projects, enabling rapid development of modern, consistent interfaces.

## Installation

Installed via pnpm:

```sh
pnpm add @nuxt/ui
```

## Configuration

The module is registered in `nuxt.config.ts` under the `modules` array:

```ts
modules: [
  '@nuxt/ui',
  // ...other modules
],
```

No additional configuration is required for basic usage. For advanced options, see the [Nuxt UI documentation](https://ui.nuxt.com/getting-started/installation).

## Usage

- Use Nuxt UI components in your Vue files, e.g. `<UButton>`, `<UCard>`, etc.
- See the [Nuxt UI documentation](https://ui.nuxt.com/components/overview) for available components and usage examples.

## Accessibility & Best Practices

- All Nuxt UI components are designed with accessibility in mind.
- Test UI with screen readers and keyboard navigation.

## References

- [Nuxt UI Documentation](https://ui.nuxt.com/)
- [Nuxt UI GitHub](https://github.com/nuxt/ui)
