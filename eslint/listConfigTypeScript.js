import typescript from '@typescript-eslint/eslint-plugin'

const listConfigTypeScript = [
  {
    plugins: { '@typescript-eslint': typescript },
    rules: {
      /**
       * Basic ESLint TypeScript rules, that work without type checking
       * {@link https://typescript-eslint.io/}
       */
      ...typescript.configs['eslint-recommended'].rules,

      /**
       * Basic ESLint TypeScript rules, that require type checking
       * {@link https://typescript-eslint.io/linting/typed-linting/}
       */
      ...typescript.configs.recommended.rules,

      /**
       * Overwrite `typed-fp` rule, to enforce TypeScript Arrays to always be
       * typed as generic (i.e. ReadonlyArray<T>). This is a personal
       * preference. {@link https://typescript-eslint.io/rules/array-type}
       */
      '@typescript-eslint/array-type': [
        'error',
        { default: 'generic', readonly: 'generic' },
      ],

      /**
       * This rule enforces that functions do have an explicit return type
       * annotation.
       *
       * {@link https://typescript-eslint.io/rules/explicit-function-return-type/}
       */
      '@typescript-eslint/explicit-function-return-type': 'error',

      /** Sort members (interface keys etc.) */
      '@typescript-eslint/member-ordering': [
        'error',
        { default: { order: 'alphabetically' } },
      ],

      /**
       * Namespaces are an outdated way to organize TypeScript code.
       *
       * {@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-namespace.md}
       */
      '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],

      /**
       * Overwrite default rule by TypeScript ESLint, to allow unused
       * variables,if they are followed by used parameters.
       */
      '@typescript-eslint/no-unused-vars': [
        'error',
        { args: 'after-used', destructuredArrayIgnorePattern: '^_' },
      ],

      /**
       * Enforce constituents of a type union/intersection to be sorted
       * alphabetically.
       * {@link https://typescript-eslint.io/rules/sort-type-constituents/}
       */
      '@typescript-eslint/sort-type-constituents': 'error',
    },
  },

  {
    files: ['**/*.js'],
    rules: {
      /** This can't be enforced in .js files */
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
]

export default listConfigTypeScript
