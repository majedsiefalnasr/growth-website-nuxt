# @nuxtjs/color-mode Integration

This project uses the `@nuxtjs/color-mode` module to provide dark and light mode support with auto-detection.

## Purpose

- Enables users to toggle between dark and light color modes.
- Respects system preferences and persists user choice.

## Configuration

- The module is registered in `nuxt.config.ts` under the `modules` array.
- Default color mode is set to `light`.
- See the `colorMode` property in `nuxt.config.ts` for options.

## Usage

- Use the `useColorMode` composable in your components to access and control color mode.
- Example: see `app/components/ColorModeSwitcher.vue`.

## Resources

- [Official documentation](https://color-mode.nuxtjs.org/)

## Accessibility

- Ensures accessible color contrast for users.

---

For troubleshooting, see the Nuxt and module documentation.
