const prettierConfig = require('./.prettierrc')

module.exports = {
  extends: [
    'react-app',
    //"plugin:jsx-a11y/recommended",
    'plugin:prettier/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
  ],
  plugins: [
    'prettier',
    //"jsx-a11y",
    'testing-library',
    'jest-dom',
  ],
  env: {
    browser: true,
  },
  rules: {
    'babel/camelcase': 'off',
    'babel/quotes': 'off',
    'consistent-return': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'jsx-a11y/label-has-for': 'off',
    'max-lines-per-function': 'off',
    'react/jsx-pascal-case': 'off',
    'react/prop-types': 'off',
    // 'prettier/prettier': ['error', prettierConfig],
    'jest-dom/prefer-checked': 'error',
    'jest-dom/prefer-enabled-disabled': 'error',
    'jest-dom/prefer-required': 'error',
    'jest-dom/prefer-to-have-attribute': 'error',
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debug': 'warn',
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier/@typescript-eslint',
      ],
    },
  ],
}
