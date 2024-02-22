import filenames from 'eslint-plugin-filenames'

/**
 * Ensures consistant filenames
 * {@link https://github.com/selaux/eslint-plugin-filenames}
 */
/** @type {ReadonlyArray<import('eslint').Linter.FlatConfig>} */
const listConfigFilenames = [
  {
    plugins: { filenames },
    rules: {
      /**
       * Enforce that the file name is the same as the default export.
       *
       * TODO: This is no longer maintained, but there doesn't seem to be a
       * replacement yet.
       *
       * {@link https://github.com/selaux/eslint-plugin-filenames}
       * {@link https://github.com/amadeusbvs/kopra/issues/42 | GitHub issue}
       */
      'filenames/match-exported': 'error',

      /**
       * Turn off unnessarily strict rule. Additionally this isn't working
       * properly and a lot of other functional rules cover most cases, where
       * this would be a problem.
       */
      'functional/no-conditional-statements': 'off',

      /**
       * Turn off unwanted rule, that doesn't allow mixing of functions and
       * other types in objects
       */
      'functional/no-mixed-types': 'off',

      /**
       * Allow functions to return void, since this is unavoidable for some
       * situations, especially the ones involving React.
       */
      'functional/no-return-void': 'off',

      /**
       * Turned off in favor of `kopra/readonly-props`
       *
       * {@link https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/prefer-immutable-types.md}
       */
      'functional/prefer-immutable-types': 'off',

      /**
       * Enforce use of `PropertySignature` for functions (vs.
       * `MethodSignature`)
       *
       * {@link https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/prefer-property-signatures.md}
       */
      'functional/prefer-property-signatures': 'error',

      /**
       * Turned off in favor of `kopra/readonly-props`
       *
       * {@link https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/type-declaration-immutability.md}
       */
      'functional/type-declaration-immutability': 'off',
    },
  },

  /** Disable this rule for files with a dot in their name or for Next components */
  {
    files: ['**/*.config.*', '**/page.tsx', '**/layout.tsx'],
    rules: {
      'filenames/match-exported': 'off',
    },
  },
]

export default listConfigFilenames
