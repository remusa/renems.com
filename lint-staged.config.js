module.exports = {
  //   "*.js": "eslint --cache --fix"
  '*.js': ['eslint', 'jest --findRelatedTests'],
  '*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx)': [
    // 'prettier --write',
    'pretty-quick --staged',
    'git add',
  ],
}
