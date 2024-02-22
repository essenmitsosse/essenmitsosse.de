import reactHooksSeiyab from '@seiyab/eslint-plugin-react-hooks'
import reactHooks from 'eslint-plugin-react-hooks'

/**
 * Basic React hooks rules
 * {@link https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks}
 *
 * The `exhaustive-deps rule` is replaced by one from another plugin
 */
const configReactHooks = {
  plugins: {
    /**
     * This is alternative to eslint-plugin-react-hooks because of
     * {@link https://github.com/facebook/react/issues/16265}.
     *
     * {@link https://www.npmjs.com/package/@seiyab/eslint-plugin-react-hooks}
     */
    '@seiyab/react-hooks': reactHooksSeiyab,

    'react-hooks': reactHooks,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,

    /**
     * Ignore `props`, when accessing a function on `props`. See issue:
     * {@link https://github.com/facebook/react/issues/16265}.
     *
     * {@link https://www.npmjs.com/package/@seiyab/eslint-plugin-react-hooks}
     */
    '@seiyab/react-hooks/exhaustive-deps': [
      'warn',
      { ignoreThisDependency: 'props' },
    ],

    /** Replace by `@seiyab/react-hooks/exhaustive-deps` */
    'react-hooks/exhaustive-deps': 'off',
  },
}

export default configReactHooks
