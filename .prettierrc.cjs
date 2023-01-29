module.exports = {
  astroAllowShorthand: false,
  printWidth: 120,
  semi: false,
  singleQuote: true,
  // tabWidth: 2,
  trailingComma: 'all',
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
