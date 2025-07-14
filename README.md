# Growth (Nuxt 4)

Version: 0.1.0

Growth is a web-based platform designed to empower individuals and small businesses to launch and manage their own online stores—without the need for technical or design expertise. The platform streamlines the process of building an e-commerce presence.

## Nuxt 4 Project Structure

This project now uses [Nuxt 4](https://nuxt.com/) with the following structure:

```plaintext
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

## Copilot Coding & Contribution Guidelines

This project follows strict coding, testing, and documentation guidelines as described in `.github/copilot-instructions.md`.

## Secret Management

- Store secrets in environment variables or secure vaults.
- Never commit secrets to version control.
- `.env` and similar files are in `.gitignore`.

## Testing

- All tests live in `/tests`, mirroring the main app structure.
- Each test file should include: 1 expected use, 1 edge case, 1 failure case.

## Large Files

- Do not commit files >100MB.
- Use Git LFS or external storage for large assets.
- Large file patterns are in `.gitignore`.

## Issue & PR Templates

- Use the provided templates in `.github/ISSUE_TEMPLATE/` and `.github/pull_request_template/`.

## Dependency Management

- Review and document all dependency changes in `README.md` and `package.json`.
- Check for security advisories when updating dependencies.

## Accessibility

- Ensure all user-facing features are accessible (semantic HTML, ARIA, color contrast).
- Test UI with screen readers and keyboard navigation.

For full details, see `.github/copilot-instructions.md`.

---

## Integrations & Tooling

- **Bootstrap 5**  
  Popular CSS framework for responsive design.  
  See [docs/bootstrap-integration.md](docs/bootstrap-integration.md).

- **TypeScript for Vue (`vue-tsc`)**  
  Type checking and import organization for `.vue` files.  
  See [docs/vue-tsc-integration.md](docs/vue-tsc-integration.md).

- **ESLint**  
  Linting for JavaScript/TypeScript code.  
  See [docs/eslint-integration.md](docs/eslint-integration.md).

- **Prettier**  
  Code formatting tool integrated with ESLint and Tailwind CSS.  
  See [docs/prettier-integration.md](docs/prettier-integration.md).

- **@iconify-json/ph**  
  Phosphor icon set for use with Iconify-compatible icon components.  
  See [docs/iconify-json-ph-integration.md](docs/iconify-json-ph-integration.md).

- **Nuxt SEO**  
  SEO optimization for Nuxt applications.  
  See [docs/nuxtjs-seo-integration.md](docs/nuxtjs-seo-integration.md).

- **Nuxt i18n**
  Internationalization support for multiple languages.  
  See [docs/nuxtjs-i18n-integration.md](docs/nuxtjs-i18n-integration.md).

- **lint-staged**  
  Run linters on pre-committed files.  
  See [docs/lint-staged-integration.md](docs/lint-staged-integration.md).

- **Husky**  
  Git hooks for running scripts before commits/pushes.  
  See [docs/husky-integration.md](docs/husky-integration.md).

- **Cuberto Mouse Follower Integration**  
  See [docs/mouse-follower-integration.md](./docs/mouse-follower-integration.md).

---

Built with ❤️ by contributors.
