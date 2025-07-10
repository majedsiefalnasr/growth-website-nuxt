# Growth (Nuxt 4)

Version: 0.1.0

Growth is a web-based platform designed to empower individuals and small businesses to launch and manage their own online stores—without the need for technical or design expertise. The platform streamlines the process of building an e-commerce presence.

## Nuxt 4 Project Structure

This project now uses [Nuxt 4](https://nuxt.com/) with the following structure:

```
app/
  assets/
  components/
  composables/
  layouts/
  middleware/
  pages/
  plugins/
  utils/
  app.vue
public/
server/
nuxt.config.ts
tsconfig.json
```

### Key Files & Folders

- **app/**: Source root for all app code (pages, components, layouts, etc.)
- **app/pages/**: File-based routing (home page is now `app/pages/index.vue`).
- **app/layouts/**: Application layouts (default at `app/layouts/default.vue`).
- **nuxt.config.ts**: Nuxt 4 configuration (with compatibilityVersion: 4).
- **tsconfig.json**: Uses project references for improved type safety.
- **public/**: Static files served at the root of the site.
- **server/**: Custom server logic (API routes, middleware, etc.).
- **.github/**: Contribution guidelines, issue/PR templates.

## Getting Started

1. Install dependencies:
   ```sh
   pnpm install
   ```
2. Start the development server:
   ```sh
   pnpm dev
   ```
3. Visit [http://localhost:3000](http://localhost:3000) in your browser.

For more, see the [Nuxt 4 documentation](https://nuxt.com/docs/getting-started/introduction).

---

Built with ❤️ by contributors.
