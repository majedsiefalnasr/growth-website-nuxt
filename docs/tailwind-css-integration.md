# Tailwind CSS Integration

This project uses [Tailwind CSS](https://tailwindcss.com/) via the official Nuxt module `@nuxtjs/tailwindcss`.

- The module is registered in `nuxt.config.ts` under the `modules` array.
- The main Tailwind CSS file is at `app/assets/tailwind.css` and is automatically picked up by the module.
- You can customize Tailwind by creating a `tailwind.config.ts` or `tailwind.config.js` in the project root.
- Use Tailwind utility classes in your Vue components and pages.
- For advanced options, see the [Nuxt TailwindCSS docs](https://tailwindcss.nuxtjs.org/).

## Editor Support

For best experience, install the Tailwind CSS IntelliSense extension in VS Code. Add this to your `.vscode/settings.json` for improved autocomplete:

```json
{
  "files.associations": {"*.css": "tailwindcss"},
  "editor.quickSuggestions": {"strings": true}
}
```

## Dependency

- `@nuxtjs/tailwindcss` is listed in `devDependencies` in `package.json`.
