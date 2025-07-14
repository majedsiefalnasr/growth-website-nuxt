# Tailwind CSS v4 Integration

This project uses [Tailwind CSS v4](https://tailwindcss.com/) directly via the official `tailwindcss` and `@tailwindcss/vite` packages, **not** the Nuxt module.

- Tailwind is integrated using the Vite plugin in `nuxt.config.ts`:

  ```ts
  import tailwindcss from '@tailwindcss/vite'
  // ...
  export default defineNuxtConfig({
    vite: {
      plugins: [tailwindcss()],
    },
    css: ['~/assets/css/app.css'],
    // ...
  })
  ```

- The main Tailwind CSS file is at `app/assets/css/app.css` and is imported globally.
- Tailwind configuration is in `tailwind.config.js` at the project root.

## Custom Brand Color Palette

A custom color palette named `brand` is available for use throughout the project. The palette is defined in `tailwind.config.js`:

```js
brand: {
  50: '#ecf6f8',
  100: '#d9ecf2',
  200: '#b4dae4',
  300: '#8ec7d7',
  400: '#69b4c9',
  500: '#1e4854',
  600: '#368196',
  700: '#286171',
  800: '#1b414b',
  900: '#0d2026',
  950: '#051014',
}
```

**Usage examples:**

- `bg-brand-500` for background color
- `text-brand-700` for text color
- `border-brand-400` for border color

## Refer to the [Tailwind color documentation](https://tailwindcss.com/docs/customizing-colors) for more details on using custom palettes

Use Tailwind utility classes in your Vue components and pages as usual.

- For advanced options, see the [Tailwind CSS docs](https://tailwindcss.com/docs/configuration).

## Editor Support

For best experience, install the Tailwind CSS IntelliSense extension in VS Code. Add this to your `.vscode/settings.json` for improved autocomplete:

```json
{
  "files.associations": { "*.css": "tailwindcss" },
  "editor.quickSuggestions": { "strings": true }
}
```

## Dependency

- `tailwindcss` and `@tailwindcss/vite` are listed in `dependencies` in `package.json`.

## Migration Notes

- The project **no longer uses** the `@nuxtjs/tailwindcss` module. All Tailwind integration is handled via Vite and the standard Tailwind config.

---
