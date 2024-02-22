import react from 'eslint-plugin-react'

/** Base React rules {@link https://github.com/jsx-eslint/eslint-plugin-react} */
const listConfigReactBase = [
  {
    plugins: { react },
    rules: {
      /**
       * Basic React rules
       * {@link https://github.com/jsx-eslint/eslint-plugin-react}
       */
      ...react.configs.recommended.rules,

      /**
       * This makes sure, that we don't need to explicitly import `React`, since
       * we are using React 17+ via
       * {@link https://github.com/jsx-eslint/eslint-plugin-react}
       */
      ...react.configs['jsx-runtime'].rules,

      /**
       * All components must be written as arrow functions
       * {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/function-component-definition.md}
       */
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],

      /**
       * Ensure destructuring and symmetric naming of useState hook value and
       * setter variables
       * {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/hook-use-state.md}
       */
      'react/hook-use-state': 'error',

      /**
       * Enforce boolean attributes notation in JSX
       * {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-boolean-value.md}
       */
      'react/jsx-boolean-value': 'error',

      /**
       * Disallow unnecessary JSX expressions when literals alone are sufficient
       *
       * {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md}
       */
      'react/jsx-curly-brace-presence': [
        'error',
        { children: 'never', propElementValues: 'ignore', props: 'never' },
      ],

      /**
       * Enforce shorthand form for React fragments
       * {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-fragments.md}
       */
      'react/jsx-fragments': 'error',

      /**
       * Disallow problematic leaked values from being rendered
       * {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-leaked-render.md}
       */
      'react/jsx-no-leaked-render': 'error',

      /**
       * Forbid use of useless fragments. A fragment is redundant if it contains
       * only one child, or if it is the child of a html element, and is not a
       * keyed fragment.
       * {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md}
       */
      'react/jsx-no-useless-fragment': 'error',

      /**
       * Enforce PascalCase for user-defined JSX components
       * {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-pascal-case.md}
       */
      'react/jsx-pascal-case': 'error',

      /**
       * Disallow JSX prop spreading, since this can lead to weird
       * behavior/bugs, when accidentally passing through unwanted props.
       * {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-props-no-spreading.md}
       */
      'react/jsx-props-no-spreading': 'error',

      /**
       * Make sure to alphabetically sort all React props, except for reserved
       * props, which must come first. {@link}
       */
      'react/jsx-sort-props': ['error', { reservedFirst: true }],

      /**
       * Disallow usage of Array index in keys
       * {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-array-index-key.md}
       */
      'react/no-array-index-key': 'error',

      /**
       * Disallow passing of children as props
       * {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-children-prop.md}
       */
      'react/no-children-prop': 'error',

      /**
       * Enforce one component per file
       * {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md}
       */
      'react/no-multi-comp': 'error',

      /**
       * Allow missing props validation in React component definition
       * {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md}
       */
      'react/prop-types': 'off',

      /**
       * Disallow extra closing tags for components without children
       * {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/self-closing-comp.md}
       */
      'react/self-closing-comp': 'error',
    },
  },
  {
    files: ['**/*/*.cy.*', 'cypress/**/*', 'src/helperCypress/**/*'],
    rules: {
      /** Rules is not compatible with uppercase naming convention. */
      'react/function-component-definition': 'off',
      /**
       * Can't be enforced together with
       * `@typescript-eslint-naming/naming-convention` for config files, since
       * `@typescript-eslint-naming/naming-convention` requires everything to be
       * uppercase.
       */
      'react/hook-use-state': 'off',
      /**
       * Don't enforce pascal case for tests, because custom components might be
       * in screaming snake case.
       */
      'react/jsx-pascal-case': 'off',
      /** Allow multiple components per file for Cypress tests */
      'react/no-multi-comp': 'off',
    },
  },
]

export default listConfigReactBase
