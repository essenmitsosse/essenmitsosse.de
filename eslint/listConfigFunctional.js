import functional from 'eslint-plugin-functional'

/**
 * Plugin to support `typed-fp` rule set
 * {@link https://github.com/eslint-functional/eslint-plugin-functional}
 */
/** @type {ReadonlyArray<import('eslint').Linter.FlatConfig>} */
const listConfigFunctional = [
  {
    plugins: { functional },
    rules: {
      /**
       * ESLint rules for functional programming
       * {@link https://github.com/eslint-functional/eslint-plugin-functional}
       */
      ...functional.configs.recommended.rules,
    },
  },

  /** Disable some unfeasable rules for tests */
  {
    files: [
      '**/*/*.cy.*',
      'cypress/**/*',
      'src/helperCypress/**/*',
      '**/*.spec.ts',
    ],
    plugins: { functional },
    rules: {
      /** Turn off for Cypress tests, since this is unavoidable in some cases. */
      'functional/functional-parameters': 'off',
      /**
       * Disabled immutable-data for cypress tests, we need expressions
       * sometimes.
       */
      'functional/no-expression-statements': 'off',
      /** Sometimes we need to throw in Cypress to fail tests */
      'functional/no-throw-statements': 'off',
    },
  },

  /** Disable some unfeasable rules for config files */
  {
    files: ['*.config.ts', '*.config.js', 'postcss.config.cjs', 'eslint/**/*'],
    rules: {
      /**
       * Disabled immutable-data for config files, since there is no other way,
       * then to assign the export to `module.exports`
       */
      'functional/immutable-data': 'off',
      /**
       * Disabled immutable-data for config files, since there is no other way,
       * then to assign the export to `module.exports` (which is considered an
       * expression)
       */
      'functional/no-expression-statements': 'off',
    },
  },

  /** Disable some unfeasable rules for TSX files */
  {
    files: ['**/*.tsx', '**/use*.ts'],
    rules: {
      /**
       * Turn off for `.tsx` files, since this is unavoidable for some React
       * components.
       */
      'functional/functional-parameters': 'off',
      /**
       * Turn off for `.tsx` files, since this is unavoidable for some React
       * components.
       */
      'functional/no-expression-statements': 'off',
    },
  },
]

export default listConfigFunctional
