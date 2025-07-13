// @ts-check

import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import withNuxt from './.nuxt/eslint.config.mjs'

/**
 * ESLint configuration extended for Prettier integration.
 *
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
          semi: false,
          singleQuote: true,
          printWidth: 100,
          tabWidth: 2,
          endOfLine: 'lf',
          trailingComma: 'es5',
          bracketSpacing: true,
          jsxSingleQuote: true,
          arrowParens: 'always',
          proseWrap: 'always',
        },
      ],
      // Nuxt/JS/TS/Accessibility/Best Practices
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-var': 'error',
      'prefer-const': 'error',
      'object-shorthand': ['error', 'always'],
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-arrow-callback': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'spaced-comment': ['error', 'always', { markers: ['/'] }],
      'comma-dangle': ['error', 'always-multiline'],
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'warn',
      'vue/require-default-prop': 'off',
      'vue/require-prop-types': 'off',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 3,
          multiline: 1,
        },
      ],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/mustache-interpolation-spacing': ['error', 'always'],
      'vue/no-unused-components': 'warn',
      'vue/no-unused-vars': 'warn',
      'vue/attribute-hyphenation': ['error', 'always'],
      'vue/html-indent': ['error', 2],
      'vue/script-indent': ['error', 2, { baseIndent: 1 }],
      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
    },
  },
  eslintConfigPrettier,
])
