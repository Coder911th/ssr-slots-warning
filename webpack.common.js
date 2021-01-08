const {VueLoaderPlugin} = require('vue-loader')

function getConfig(options) {
  return {
    target: options.target,
    mode: 'development',
    entry: options.entry,
    output: options.output,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: options.cssLoaders,
        },
        {
          test: /\.vue$/,
          use: 'vue-loader',
        },
        {
          test: /\.hbs$/,
          use: 'handlebars-loader',
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
    ],
    externals: options.externals,
  }
}

module.exports = {
  getConfig,
}
