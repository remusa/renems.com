const prettierConfig = require('./.prettierrc')

module.exports = {
  extends: ['wesbos'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
  }
}
