// @ts-check

import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import withNuxt from './.nuxt/eslint.config.mjs'

/**
 * ESLint configuration extended for Prettier integration.
 * - Uses eslint-plugin-prettier to run Prettier as an ESLint rule.
 * - Uses eslint-config-prettier to disable conflicting ESLint rules.
 *
 * Note: Nuxt 4 uses ESLint Flat Config, so we use the `configs` array style.
 */
export default withNuxt([
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
  },
  eslintConfigPrettier,
])
