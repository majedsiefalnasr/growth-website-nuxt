# vue-tsc Integration

## Purpose

`vue-tsc` provides TypeScript type checking and import organization for `.vue` files in Nuxt and Vue projects. It is especially useful for ensuring type safety and improving code quality in large codebases.

## Usage

- Run `pnpm vue-tsc --noEmit` to perform type checking on your Vue files.
- Use with `prettier-plugin-organize-imports` to organize imports in `.vue` and `.ts` files automatically.

## Configuration

No additional configuration is required for basic usage. For advanced options, refer to the [vue-tsc documentation](https://github.com/vuejs/language-tools/tree/master/packages/vue-tsc).

## References in Project

- Added as a `devDependency` in `package.json`.
- Used by Prettier and lint-staged for organizing imports and type checking.

## Related Files

- `.prettierrc` (for Prettier plugins)
- `package.json` (dependency management)

## Further Reading

- [vue-tsc GitHub](https://github.com/vuejs/language-tools/tree/master/packages/vue-tsc)
- [Nuxt TypeScript Support](https://nuxt.com/docs/guide/concepts/typescript)
