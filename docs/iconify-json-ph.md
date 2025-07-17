# @iconify-json/ph Integration

This document describes the integration of the `@iconify-json/ph` package in this project.

## Purpose

`@iconify-json/ph` provides a collection of icon data for the "Phosphor" icon set, which can be used with icon libraries such as Iconify. This allows you to use a wide range of Phosphor icons in your Nuxt application without manually importing SVGs or icon files.

## Usage

- The package is installed as a development dependency and is typically used in conjunction with an icon component or plugin that supports Iconify JSON icon sets.
- You can reference Phosphor icons in your components by their Iconify name (e.g., `ph:star`, `ph:heart`).
- No additional configuration is required if your icon solution supports Iconify JSON icon sets out of the box.

## Example

```vue
<template>
  <Icon name="ph:star" />
</template>
```

> **Note:** Replace `<Icon />` with the icon component used in your project.

## References

- [Iconify Documentation](https://docs.iconify.design/)
- [Phosphor Icons on Iconify](https://icon-sets.iconify.design/ph/)

## Related

- See the main `README.md` for a summary of all integrations.
