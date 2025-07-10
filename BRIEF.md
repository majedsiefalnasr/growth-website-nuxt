# Project Brief: Growth (Nuxt 4)

## Purpose & Vision

Growth is a web-based platform designed to help users learn more about Growth and interact with the platform through features such as login/signup, blog, about, contact, academy, and pricing. The site is focused on providing information and engagement, not e-commerce or store management.

## Architecture & Stack

- **Framework:** Nuxt 4 (Vue 3, TypeScript)
- **Directory Structure:**
  - `app/`: Source root for all app code (pages, components, layouts, etc.)
  - `public/`: Static files served at the root
  - `server/`: Custom server logic (API routes, middleware, etc.)
  - `.github/`: Contribution guidelines, issue/PR templates
  - `/tests`: All tests, mirroring the main app structure
- **Config:**
  - `nuxt.config.ts`: Nuxt configuration
  - `tsconfig.json`: TypeScript project references
  - `package.json`: Dependencies and scripts

## Core Features

- **Authentication:** User login and signup
- **Blog:** Articles and updates about Growth
- **About:** Information about the Growth platform
- **Contact:** Contact form or details for reaching out
- **Academy:** Educational resources or courses
- **Pricing:** Information about available plans or pricing

## Coding & Contribution Guidelines

- Follow `.github/copilot-instructions.md` for all code, test, and documentation standards.
- Use consistent naming, modular structure, and avoid files >500 lines.
- All user-facing features must be accessible (semantic HTML, ARIA, color contrast).
- Store secrets in environment variables; never commit them.
- Use provided issue and PR templates.

## Testing

- All tests live in `/tests`, mirroring the main app structure.
- Each test file should include: 1 expected use, 1 edge case, 1 failure case.

## Version Control & Workflow

- Use clear, descriptive commit messages.
- Reference issues and use PR templates.
- Do not commit large files (>100MB); use Git LFS or external storage.

## Security

- Never hardcode sensitive information.
- Review code for vulnerabilities before merging.

## Documentation

- Update `README.md` and `BRIEF.md` when features, dependencies, or setup steps change.

---

For full coding standards, see `.github/copilot-instructions.md`.
