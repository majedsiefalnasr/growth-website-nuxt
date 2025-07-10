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
- Use Tailwind utility classes in your Vue components and pages as usual.
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
