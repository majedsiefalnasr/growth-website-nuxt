# ESLint Integration

This project uses [ESLint](https://eslint.org/) for code linting and style enforcement.

- ESLint is configured via `eslint.config.mjs` in the project root.
- The configuration follows the project's coding standards and integrates with Nuxt and TypeScript.
- To check code style and find lint errors, run:

  ```sh
  pnpm lint
  ```

- For automatic fixes, run:

  ```sh
  pnpm lint:fix
  ```

- ESLint runs automatically on CI and before commits (if pre-commit hooks are enabled).

## Editor Support

For best experience, install the ESLint extension in VS Code. Add this to your `.vscode/settings.json` for improved linting and autofix on save:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": "never",
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
  }
}
```

## Dependency

- `eslint` and related plugins are listed in `devDependencies` in `package.json`.
