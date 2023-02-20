const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const paths = require('./paths')
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: 'development',

  devtool: 'cheap-module-source-map',

  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'vendors.bundle.js',
          enforce: true,
        },
      },
    },
  },
})
