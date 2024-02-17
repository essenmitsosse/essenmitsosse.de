import globals from 'globals'

import configCommentsEslint from './eslint/configCommentsEslint.js'
import configConfigs from './eslint/configConfigs.js'
import configImportStyle from './eslint/configImportStyle.js'
import configKopra from './eslint/configKopra.js'
import configReactHooks from './eslint/configReactHooks.js'
import listConfigReactRefresh from './eslint/listConfigReactRefresh.js'
import configSetupTypescript from './eslint/configSetupTypescript.js'
import configSortKeys from './eslint/configSortKeys.js'
import configTests from './eslint/configTests.js'
import listConfigEslintBase from './eslint/listConfigEslintBase.js'
import listConfigFilenames from './eslint/listConfigFilenames.js'
import listConfigFunctional from './eslint/listConfigFunctional.js'
import listConfigImport from './eslint/listConfigImport.js'
import listConfigNext from './eslint/listConfigNext.js'
import listConfigReactBase from './eslint/listConfigReactBase.js'
import listConfigTypeScript from './eslint/listConfigTypeScript.js'

/** @type {import('eslint').Linter.FlatConfig[]} */
const listConfigEslint = [
  configSetupTypescript,

  /** Global ignores */
  {
    ignores: ['tsbuild', 'dist', '.next'],
  },

  /** Main */
  {
    files: ['cypress/**/*', 'src/**/*', 'lintTests/**/*'],
    languageOptions: { globals: globals.browser },
  },

  configTests,
  configCommentsEslint,
  configConfigs,
  ...listConfigFunctional,
  ...listConfigEslintBase,
  ...listConfigFilenames,
  ...listConfigImport,
  ...listConfigNext,
  configKopra,
  configImportStyle,
  ...listConfigReactBase,
  configReactHooks,
  ...listConfigReactRefresh,
  configSortKeys,
  ...listConfigTypeScript,

  // Lint tests
  {
    files: ['lintTests/**/*'],
    rules: {
      /**
       * Disable this rule for lint tests, because it is very annoying to
       * satisfy for the test files.
       */
      '@typescript-eslint/no-unused-vars': 'off',
      /**
       * For testing purposes we don't need to enforce this, since nothing is
       * ever imported anyway.
       */
      'filenames/match-exported': 'off',
    },
  },
]

export default listConfigEslint
