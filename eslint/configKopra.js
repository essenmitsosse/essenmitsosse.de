import kopra from './plugin/pluginEslintKopra.js'

/** @type {import('eslint').Linter.FlatConfig} */
const configKopra = {
  plugins: { kopra },
  rules: {
    'kopra/readonly-props': 'error',
  },
}

export default configKopra
