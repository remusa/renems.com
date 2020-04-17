const prettierConfig = require('./.prettierrc')

module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended'],
  // "extends": ["react-app", "plugin:jsx-a11y/recommended", "plugin:prettier/recommended"],
  // "plugins": ["jsx-a11y"],
  plugins: ['prettier'],
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
    'prettier/prettier': ['error', prettierConfig],
  },
}
