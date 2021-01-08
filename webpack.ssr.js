const path = require('path')
const nodeExternals = require('webpack-node-externals')
const {getConfig} = require('./webpack.common')

module.exports = getConfig({
  target: 'node',
  entry: './src/ssr.js',
  output: {
    path: path.resolve(__dirname, 'ssr'),
    publicPath: '/resources/',
    filename: 'server.js',
  },
  cssLoaders: [
    'null-loader',
  ],
  externals: [nodeExternals()],
})
