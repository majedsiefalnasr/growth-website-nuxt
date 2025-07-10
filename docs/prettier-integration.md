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
    "source.fixAll.eslint": "always"
  },
  "eslint.validate": ["javascript", "typescript", "vue"]
}
```

## Additional Prettier Plugins

See [docs/prettier-plugins-integration.md](docs/prettier-plugins-integration.md) for details on the additional Prettier plugins used in this project, including:

- prettier-plugin-css-order
- prettier-plugin-import-sort
- prettier-plugin-jsdoc
- prettier-plugin-organize-attributes
- prettier-plugin-organize-imports

These plugins are configured in `.prettierrc` and installed as dev dependencies. They help enforce consistent code style, import order, and documentation formatting across the codebase.
