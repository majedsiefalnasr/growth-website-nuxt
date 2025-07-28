// composables/useSeoMetaI18n.ts
export const useSeoMetaI18n = () => {
  const { t, locale } = useI18n()
  const localePath = useLocalePath()
  const route = useRoute()

  /**
   * Automatically set SEO meta tags based on current route with override capability
   * @param overrides - Optional overrides for automatic SEO
   */
  const setSeo = (overrides?: {
    title?: string
    titleKey?: string
    description?: string
    descriptionKey?: string
    keywords?: string
    keywordsKey?: string
    ogImage?: string
    ogImageKey?: string
    customMeta?: Record<string, unknown>
    disableAlternateLinks?: boolean
    routePrefix?: string
  }) => {
    // Safety check - ensure we have required dependencies
    if (!route?.name) {
      console.warn('useSeoMetaI18n: Route not available')
      return
    }

    const routeName = route.name as string
    const routePrefix = overrides?.routePrefix || 'seo'

    // Generate cleanRouteName as a nested, dot-separated path (e.g., blog.category.post)
    // Reason: This matches the nested JSON structure for translations
    let cleanRouteName = ''
    if (typeof route.path === 'string') {
      const path = route.path.replace(/^\//, '').replace(/\/$/, '')
      cleanRouteName = path === '' ? '' : path.split('/').join('.')
    }

    cleanRouteName = !cleanRouteName || cleanRouteName === '' ? 'index' : cleanRouteName

    const autoTitleKey = `${routePrefix}.${cleanRouteName}.title`
    const autoDescKey = `${routePrefix}.${cleanRouteName}.description`
    const autoKeywordsKey = `${routePrefix}.${cleanRouteName}.keywords`
    const autoOgImageKey = `${routePrefix}.${cleanRouteName}.ogImage`

    // Determine final values with override priority
    const finalTitle =
      overrides?.title ||
      (overrides?.titleKey && hasTranslation(overrides.titleKey)
        ? t(overrides.titleKey)
        : hasTranslation(autoTitleKey)
          ? t(autoTitleKey)
          : 'Website')

    const finalDescription =
      overrides?.description ||
      (overrides?.descriptionKey && hasTranslation(overrides.descriptionKey)
        ? t(overrides.descriptionKey)
        : hasTranslation(autoDescKey)
          ? t(autoDescKey)
          : '')

    const finalKeywords =
      overrides?.keywords ||
      (overrides?.keywordsKey && hasTranslation(overrides.keywordsKey)
        ? t(overrides.keywordsKey)
        : hasTranslation(autoKeywordsKey)
          ? t(autoKeywordsKey)
          : '')

    const finalOgImage =
      overrides?.ogImage ||
      (overrides?.ogImageKey && hasTranslation(overrides.ogImageKey)
        ? t(overrides.ogImageKey)
        : hasTranslation(autoOgImageKey)
          ? t(autoOgImageKey)
          : '')

    // Generate alternate language links
    const alternateLinks = !overrides?.disableAlternateLinks
      ? generateAlternateLinks(routeName)
      : []

    // Set all SEO meta tags
    useHead({
      title: finalTitle,
      htmlAttrs: {
        lang: locale.value,
      },
      meta: [
        ...(finalDescription
          ? [
              {
                name: 'description',
                content: finalDescription,
              },
            ]
          : []),
        ...(finalKeywords
          ? [
              {
                name: 'keywords',
                content: finalKeywords,
              },
            ]
          : []),
        // Open Graph
        {
          property: 'og:title',
          content: finalTitle,
        },
        {
          property: 'og:locale',
          content: locale.value,
        },
        ...(finalDescription
          ? [
              {
                property: 'og:description',
                content: finalDescription,
              },
            ]
          : []),
        ...(finalOgImage
          ? [
              {
                property: 'og:image',
                content: finalOgImage,
              },
            ]
          : []),
        // Twitter Card
        {
          name: 'twitter:title',
          content: finalTitle,
        },
        ...(finalDescription
          ? [
              {
                name: 'twitter:description',
                content: finalDescription,
              },
            ]
          : []),
        ...(finalOgImage
          ? [
              {
                name: 'twitter:image',
                content: finalOgImage,
              },
            ]
          : []),
        // Custom meta tags
        ...(overrides?.customMeta
          ? Object.entries(overrides.customMeta).map(([key, value]) => ({
              name: key,
              content: String(value),
            }))
          : []),
      ],
      link: alternateLinks,
    })
  }

  /**
   * Check if a translation key exists
   * @param key - Translation key to check
   */
  const hasTranslation = (key: string): boolean => {
    try {
      const translation = t(key)
      return translation !== key && translation !== undefined
    } catch {
      return false
    }
  }

  /**
   * Generate alternate language links
   * @param routeName - Current route name
   */
  const generateAlternateLinks = (routeName: string) => {
    try {
      const { locales } = useI18n()

      return locales.value.map((loc: { code: 'en' | 'ar' | undefined }) => {
        const href = localePath(routeName, loc.code)
        return {
          rel: 'alternate',
          hreflang: loc.code,
          href,
        }
      })
    } catch {
      return []
    }
  }

  return {
    setSeo,
  }
}
