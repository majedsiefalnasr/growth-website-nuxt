import type { ModuleOptions } from 'nuxt-schema-org'
import { identity } from '../constants'

export const schemaOrg: ModuleOptions = {
  enabled: true,
  canonicalHost: identity.url,
  defaultLanguage: 'ar',
  identity: {
    name: identity.name,
    logo: identity.image,
    url: identity.url,
    sameAs: identity.sameAs,
    // description: SITE_DESCRIPTION,
  },
  organization: {
    name: identity.name,
    url: identity.url,
    logo: identity.image,
    // description: SITE_DESCRIPTION,
  },
  webSite: {
    name: identity.name,
    url: identity.url,
    // description: SITE_DESCRIPTION,
    inLanguage: 'ar',
  },
  // Add more schema.org options as needed
}
