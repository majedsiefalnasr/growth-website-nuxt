# @nuxtjs/i18n Integration

This document explains how the `@nuxtjs/i18n` module is integrated and configured in this Nuxt project.

## Purpose

`@nuxtjs/i18n` provides internationalization (i18n) support, enabling the application to serve content in multiple languages and handle locale-specific features such as right-to-left (RTL) layouts.

## Installation

`@nuxtjs/i18n` is included as a dependency in `package.json` and registered in the `modules` array in `nuxt.config.ts`:

```ts
modules: [
  // ...other modules
  '@nuxtjs/i18n',
]
```

## Configuration

The i18n configuration is defined in `nuxt.config.ts` under the `i18n` key. Key options:

- **Locales**: English (`en`) and Arabic (`ar`) are supported, with language files in `i18n/locales/`.
- **Default Locale**: Arabic (`ar`).
- **Strategy**: `prefix_except_default` (default locale has no prefix, others do).
- **Language Directory**: `langDir: 'locales'` (relative to the `i18n/` folder).
- **Lazy Loading**: Language files are loaded on demand.
- **Vue I18n Config**: Uses `i18n/i18n.config.ts` for advanced options.
- **Browser Language Detection**: Disabled cookie usage, redirects on root, fallback to Arabic.

Example snippet from `nuxt.config.ts`:

```ts
i18n: {
  bundle: {
    optimizeTranslationDirective: false,
  },
  defaultLocale: 'ar',
  locales: [
    {
      code: 'en',
      language: 'en',
      label: 'English',
      langLabel: 'Language',
      file: 'en.json',
      dir: 'ltr',
    },
    {
      code: 'ar',
      language: 'ar',
      label: 'Arabic',
      langLabel: 'اللغة',
      file: 'ar.json',
      dir: 'rtl',
    },
  ],
  strategy: 'prefix_except_default',
  langDir: 'locales',
  lazy: true,
  vueI18n: 'i18n.config.ts',
  detectBrowserLanguage: {
    useCookie: false,
    redirectOn: 'root',
    fallbackLocale: 'ar',
  },
},
```

## Language Files

- `i18n/locales/en.json`: English translations
- `i18n/locales/ar.json`: Arabic translations

## Advanced Configuration

- Advanced Vue I18n options are set in `i18n/i18n.config.ts`.
- RTL support is enabled for Arabic via the `dir: 'rtl'` property.

## Usage

- Use the `$t` function in templates and scripts to access translations.
- Language switching is handled automatically based on route prefix or user selection.

## Accessibility & Best Practices

- All user-facing text should use translation keys.
- Test both LTR and RTL layouts for accessibility and usability.

## References

- [Nuxt i18n Documentation](https://i18n.nuxtjs.org/)
- [Vue I18n Documentation](https://vue-i18n.intlify.dev/)

---

**Note:** For any changes to supported languages or translation files, update the configuration and ensure all translations are provided.
