export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  silentFallbackWarn: false,
  availableLocales: ['en', 'ar'],
  messages: {
    en: {},
    ar: {},
  },
}))
