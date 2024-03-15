const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { resolve } = require('path')
// const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    publicPath: './',
    path: resolve(__dirname, '../build'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  // optimization: {
  //   minimize: true,
  //   minimizer: [new TerserPlugin()],
  //   splitChunks: {
  //     chunks: 'all',
  //     cacheGroups: {
  //       defaultVendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         filename: 'vendors.bundle.js',
  //         enforce: true,
  //       },
  //     },
  //   },
  // },
})
