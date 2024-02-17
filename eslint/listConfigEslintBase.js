import js from '@eslint/js'

/** @type {ReadonlyArray<import('eslint').Linter.FlatConfig>} */
const listConfigEslintBase = [
  {
    rules: {
      /** Base ESLint rules */
      ...js.configs.recommended.rules,

      /**
       * Require braces around arrow function bodies
       *
       * {@link https://eslint.org/docs/latest/rules/arrow-body-style}
       */
      'arrow-body-style': 'error',

      /**
       * Enforce curly braces for all statements. Otherwise it would for example
       * be possible to have `if` statements without curly braces, leading to
       * inconsistant style. {@link https://eslint.org/docs/latest/rules/curly}
       */
      curly: 'error',

      /**
       * Enforce dot notation whenever possible
       * {@link https://eslint.org/docs/latest/rules/dot-notation#allowpattern}
       */
      'dot-notation': 'error',

      /**
       * Overwrite AirBnB rule, to _always_ enforce `eqeqeq` (AirBnB allows `==`
       * for `null`, which can lead to inconsistant style) {@link eqeqeq}
       */
      eqeqeq: ['error', 'always'],

      /**
       * Disable use of `console`
       * {@link https://eslint.org/docs/latest/rules/no-console}
       */
      'no-console': 'error',

      /**
       * Disallow comments on the same line as the code
       * {@link https://eslint.org/docs/latest/rules/no-inline-comments}
       */
      'no-inline-comments': 'error',

      /**
       * Disallows importing via relative parent folders
       * {@link https://eslint.org/docs/latest/rules/no-restricted-imports}
       */
      'no-restricted-imports': [1, { patterns: ['../'] }],

      /**
       * Forbid use of function expression and declaration
       * {@link https://eslint.org/docs/latest/rules/no-restricted-syntax}
       */
      'no-restricted-syntax': [
        'error',
        {
          message:
            "Don't use function expressions. Use arrow functions instead.",
          selector: 'FunctionExpression',
        },
        {
          message:
            "Don't use function declarations. Use arrow functions instead.",
          selector: 'FunctionDeclaration',
        },
        {
          message: "Don't use `<Array>`, use `<ReadonlyArray>` instead.",
          selector: 'TSTypeReference > Identifier[name="Array"]',
        },
      ],

      /**
       * Disallow unnecessary computed property keys in objects and classes
       * {@link https://eslint.org/docs/latest/rules/no-useless-computed-key#rule-details}
       */
      'no-useless-computed-key': 'error',

      /**
       * Require or disallow method and property shorthand syntax for object
       * literals {@link https://eslint.org/docs/latest/rules/object-shorthand}
       */

      'object-shorthand': 'error',

      /**
       * This rule requires or disallows blank lines between the given 2 kinds
       * of statements. Properly blank lines help developers to understand the
       * code.
       * {@link https://eslint.org/docs/latest/rules/padding-line-between-statements}
       */
      'padding-line-between-statements': [
        'error',
        /** No new line between single-line expression */
        { blankLine: 'never', next: 'expression', prev: 'expression' },

        /** New line before return statement */
        { blankLine: 'always', next: 'return', prev: '*' },

        /** New line around multiline block-like */
        { blankLine: 'always', next: 'multiline-block-like', prev: '*' },

        /** No new line before between single-line const */
        {
          blankLine: 'never',
          next: 'singleline-const',
          prev: 'singleline-const',
        },

        /** New new line around multi-line const */
        { blankLine: 'always', next: 'multiline-const', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'multiline-const' },

        /** New line around multi-line expression */
        { blankLine: 'always', next: 'multiline-expression', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'multiline-expression' },

        /** New line before export */
        { blankLine: 'always', next: 'export', prev: '*' },
      ],

      /**
       * This rule enforces usage of destructuring instead of accessing a
       * property through a member expression. This is only enforced for
       * variable declarations, not for assignment expressions. Destructering in
       * assignment expressions clashes with not using semicolons and leads to
       * weird syntax.
       *
       * {@link https://eslint.org/docs/latest/rules/prefer-destructuring}
       */
      'prefer-destructuring': [
        'error',
        {
          AssignmentExpression: { array: false, object: false },
          VariableDeclarator: { array: true, object: true },
        },
        { enforceForRenamedProperties: false },
      ],

      /**
       * Enforce the consistent use of either backticks, double, or single
       * quotes. This doubles with the Prettier rule, but also removes
       * unnesssary backticks.
       *
       * {@link https://eslint.org/docs/latest/rules/quotes}
       */
      quotes: ['error', 'single', { avoidEscape: true }],

      /**
       * This works alongside `import/order` to make sure to also order named
       * imports {@link https://eslint.org/docs/latest/rules/sort-imports}
       */
      'sort-imports': [
        'error',
        {
          allowSeparatedGroups: false,
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
        },
      ],
    },
  },

  {
    files: ['**/*.tsx', '**/use*.ts'],
    rules: {
      /**
       * Allow functions inside `.tsx` files because they are sometimes needed
       * for React components. Also function declarations are already handled by
       * `react/function-component-definition`
       */
      'no-restricted-syntax': [
        'error',
        {
          message: "Don't use `<Array>`, use `<ReadonlyArray>` instead.",
          selector: 'TSTypeReference > Identifier[name="Array"]',
        },
      ],
    },
  },
]

export default listConfigEslintBase
