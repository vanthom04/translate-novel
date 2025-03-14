import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      // ...reactHooks.configs.recommended.rules,
      'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
      'keyword-spacing': 1,
      'arrow-spacing': 1,
      'comma-spacing': 1,
      'semi': [1, 'never'],
      'no-multi-spaces': 1,
      'no-trailing-spaces': 1,
      'no-useless-catch': 'off',
      'array-bracket-spacing': 1,
      'no-multiple-empty-lines': 1,
      'quotes': ['warn', 'single'],
      'object-curly-spacing': [1, 'always'],
      'indent': ['warn', 2, { SwitchCase: 1 }],
      'space-before-blocks': ['warn', 'always'],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all' }],
      'react-hooks/exhaustive-deps': 'warn',
      'import/no-anonymous-default-export': 'off'
    }
  }
)
