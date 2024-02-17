import cypress from 'eslint-plugin-cypress'
import mocha from 'eslint-plugin-mocha'

const configTests = {
  files: [
    '**/*/*.cy.*',
    'cypress/**/*',
    'src/helperCypress/**/*',
    '**/*.spec.ts',
  ],
  languageOptions: {
    globals: cypress.environments.globals.globals,
  },
  plugins: {
    /** Cypress rules {@link https://github.com/cypress-io/eslint-plugin-cypress} */
    cypress,
    /**
     * Mocha (used for Cypress tests)
     * {@link https://github.com/lo1tuma/eslint-plugin-mocha/tree/master}
     */
    mocha,
  },
  rules: {
    'cypress/assertion-before-screenshot': 'off',
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-async-tests': 'error',
    'cypress/no-force': 'error',
    'cypress/no-pause': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/require-data-selectors': 'error',
    'cypress/unsafe-to-chain-command': 'error',
    'mocha/handle-done-callback': 'error',
    'mocha/no-async-describe': 'error',
    'mocha/no-empty-description': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-exports': 'error',
    'mocha/no-hooks': 'off',
    'mocha/no-hooks-for-single-case': 'error',
    'mocha/no-identical-title': 'error',
    'mocha/no-nested-tests': 'error',
    'mocha/no-pending-tests': 'error',
    'mocha/no-return-and-callback': 'error',
    'mocha/no-return-from-async': 'off',
    'mocha/no-sibling-hooks': 'error',
    'mocha/no-skipped-tests': 'error',
    'mocha/no-top-level-hooks': 'error',
    'mocha/prefer-arrow-callback': 'error',
    'mocha/valid-suite-description': [
      'error',
      {
        message:
          'Suite descriptions should either start with an uppercase letter or be a self-closing tag',
        pattern: '(^[a-z])|(^<[A-Z][A-Za-z]+ />$)',
      },
    ],
    'mocha/valid-test-description': [
      'error',
      {
        message: 'Test descriptions should start with a lowercase letter',
        pattern: '^[a-z]',
      },
    ],
  },
}

export default configTests
