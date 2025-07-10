# Prettier Integration

This project uses [Prettier](https://prettier.io/) for code formatting, integrated with ESLint and Tailwind CSS:

- Prettier is configured via `.prettierrc` in the project root.
- Tailwind CSS class sorting is enabled via `prettier-plugin-tailwindcss`.
- Prettier runs automatically as part of the ESLint process (see `pnpm lint` and `pnpm lint:fix`).
- To manually format all files, run:

  ```sh
  pnpm prettier --write .
  ```

- For best experience, install the Prettier extension in your editor and enable format on save.

## Editor Support

Add this to your `.vscode/settings.json` for Prettier and ESLint autofix on save:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "typescript", "vue"]
}
```
