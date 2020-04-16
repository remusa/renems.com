const prettierConfig = require('./.prettierrc.js')

module.exports = {
  "extends": ["react-app"],
  // "extends": ["react-app", "plugin:jsx-a11y/recommended"],
  // "plugins": ["jsx-a11y"],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
}
