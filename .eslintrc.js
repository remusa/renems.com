const prettierConfig = require('./.prettierrc')

module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended'],
  // "extends": ["react-app", "plugin:jsx-a11y/recommended", "plugin:prettier/recommended"],
  // "plugins": ["jsx-a11y"],
  plugins: ['prettier'],
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
