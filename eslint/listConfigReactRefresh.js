import reactRefresh from 'eslint-plugin-react-refresh'

/**
 * This plugin with the React/TS/Vite template and is enforced to make sure
 * [`react-refresh`]{@link https://github.com/facebook/react/tree/main/packages/react-refresh}
 * can work properly
 * {@link https://github.com/ArnaudBarre/eslint-plugin-react-refresh}
 */
const listConfigReactRefresh = [
  {
    plugins: { 'react-refresh': reactRefresh },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ['**/page.tsx', '**/layout.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
]

export default listConfigReactRefresh
