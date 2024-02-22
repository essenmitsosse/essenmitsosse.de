import globals from 'globals'

const configConfigs = {
  files: ['*.config.*', 'eslint/**/*'],
  languageOptions: {
    globals: globals.node,
    parserOptions: {
      project: './tsconfig.node.json',
    },
  },
}

export default configConfigs
