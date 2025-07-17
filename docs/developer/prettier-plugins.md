# Prettier Plugin Integrations

This document describes the integration and usage of the following Prettier plugins in this project:

- `prettier-plugin-css-order`: Orders CSS properties for consistency.
- `prettier-plugin-jsdoc`: Formats and sorts JSDoc comments.
- `prettier-plugin-organize-attributes`: Organizes attributes in HTML/JSX/Vue templates.
- `prettier-plugin-organize-imports`: Organizes and sorts imports for better readability.

## Installation

These plugins are listed in `devDependencies` in `package.json` and are installed automatically with the rest of the dependencies.

## Configuration

The plugins are configured in `.prettierrc` under the `plugins` array. No additional configuration is required for basic usage, but you can refer to each plugin's documentation for advanced options.

## Usage

Run Prettier as usual (e.g., `pnpm format` or `prettier --write .`). The plugins will be applied automatically to supported file types.

## References

- [prettier-plugin-css-order](https://github.com/Siilwyn/prettier-plugin-css-order)
- [prettier-plugin-jsdoc](https://github.com/hosseinmd/prettier-plugin-jsdoc)
- [prettier-plugin-organize-attributes](https://github.com/NiklasPor/prettier-plugin-organize-attributes)
- [prettier-plugin-organize-imports](https://github.com/simonhaenisch/prettier-plugin-organize-imports)
