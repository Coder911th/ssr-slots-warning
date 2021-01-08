const path = require('path')
const {getConfig} = require('./webpack.common')

module.exports = getConfig({
  target: 'web',
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'static', 'resources'),
    publicPath: '/resources/',
    filename: `app.js`,
  },
  cssLoaders: [
    'style-loader',
    'css-loader',
  ],
})
