# vue-tsc Integration

## Purpose

`vue-tsc` provides TypeScript type checking and import organization for `.vue` files in Nuxt and Vue projects. It is especially useful for ensuring type safety and improving code quality in large codebases.

## Version Compatibility

This project uses `vue-tsc@2.2.12` to maintain compatibility with the Nuxt 4.0 ecosystem. While newer versions (3.x) exist, many Nuxt dependencies still expect the 2.x branch.

### Peer Dependency Handling

Some older packages may show peer dependency warnings when using npm commands, such as:

- `@splidejs/vue-splide` expecting `^0.40.9` (very outdated)
- `vite-plugin-checker` expecting `~3.0.1`
- `nuxt-og-image` expecting `^3.0.1`

**These warnings are cosmetic and do not affect functionality.** The project uses pnpm's `peerDependencyRules` to handle these gracefully:

```json
{
  "pnpm": {
    "peerDependencyRules": {
      "ignoreMissing": ["vue-tsc"],
      "allowedVersions": {
        "vue-tsc": "*"
      }
    }
  }
}
```

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

## See also

- [ESLint integration](./eslint.md) - Code quality and style enforcement
- [Prettier integration](./prettier.md) - Code formatting
- [TypeScript configuration](../core/typescript.md) - TypeScript setup
