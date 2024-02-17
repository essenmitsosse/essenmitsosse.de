import sortKeys from 'eslint-plugin-sort-keys'

/**
 * This plugin forks the original `sort-keys` ESLint rule, but makes it fixable.
 *
 * {@link https://github.com/leo-buneev/eslint-plugin-sort-keys-fix}
 */
/** @type {import('eslint').Linter.FlatConfig} */
const configSortKeys = {
  plugins: {
    'sort-keys': sortKeys,
  },
  rules: {
    /**
     * This rule uses the `sort-keys` plugin that forked the original
     * `sort-keys` ESLint rule, but makes it fixable.
     * {@link https://github.com/leo-buneev/eslint-plugin-sort-keys-fix}
     */
    'sort-keys/sort-keys-fix': 'error',
  },
}

export default configSortKeys
