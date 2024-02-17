import nextPlugin from '@next/eslint-plugin-next'

/** @type {import('eslint').Linter.FlatConfig[]} */
const listConfigNext = [
  /** Next (and Core-Web-Vitals) */
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
]

export default listConfigNext
