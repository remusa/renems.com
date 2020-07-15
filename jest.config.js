const path = require('path')

const here = (...p) => path.join(__dirname, ...p)

module.exports = {
  moduleDirectories: [
    'node_modules',
    // add the directory with the test-utils.js file, for example:
    'utils', // a utility folder
    __dirname, // the root directory
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': `<rootDir>/tests/jest-preprocess.js`,
    '\\.(gql|graphql)$': 'jest-transform-graphql',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/tests/file-mock.js`,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  // setupFilesAfterEnv: [`<rootDir>/tests/setup.js`],
  setupFilesAfterEnv: [here('./tests/setup')],
  // testURL: `http://localhost`,
}
