import babelJest from 'babel-jest'

const babelOptions = {
  presets: ['babel-preset-gatsby'],
}

module.exports = babelJest.createTransformer(babelOptions)
