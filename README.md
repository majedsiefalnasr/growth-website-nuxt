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

## Tailwind CSS Integration

See [docs/tailwind-css-integration.md](docs/tailwind-css-integration.md) for full details on Tailwind CSS setup, editor support, and dependencies.

---

## ESLint Integration

See [docs/eslint-integration.md](docs/eslint-integration.md) for full details on ESLint configuration, editor support, and dependencies.

---

## Prettier Integration

See [docs/prettier-integration.md](docs/prettier-integration.md) for full details on Prettier setup, editor support, and integration with ESLint and Tailwind CSS.

---

## Nuxt SEO Integration

See [docs/nuxtjs-seo-integration.md](docs/nuxtjs-seo-integration.md) for full details on @nuxtjs/seo setup, configuration, and best practices for SEO in this project.

---

Built with ❤️ by contributors.
