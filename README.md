# growth

Version: 0.1.0

Growth is a web-based platform designed to empower individuals and small businesses to launch and manage their own online stores—without the need for technical or design expertise. The platform streamlines the process of building an e-commerce presence.

## NuxtJS Project Structure

This project uses [NuxtJS](https://nuxt.com/) with the following structure:

```
├── app.vue               # Main application entry point
├── nuxt.config.ts        # Nuxt configuration file
├── package.json          # Project dependencies and scripts
├── public/               # Static assets (favicon, robots.txt, etc.)
├── server/               # Server-side logic (API, middleware, etc.)
├── tsconfig.json         # TypeScript configuration
├── .github/              # GitHub workflows, issue & PR templates
├── node_modules/         # Installed dependencies
├── .nuxt/                # Nuxt build output (auto-generated)
├── LICENSE, SECURITY.md  # Legal and security docs
```

### Key Files & Folders

- **app.vue**: Root Vue component for the app.
- **nuxt.config.ts**: NuxtJS configuration (modules, plugins, runtime settings).
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

For more, see the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction).

---

Built with ❤️ by contributors.
