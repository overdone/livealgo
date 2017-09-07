const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.base.js');

module.exports = function(env) {
  return webpackMerge(commonConfig(), {

    devServer: {
      hot: true,
      contentBase: path.join(__dirname, '../dist'),
      publicPath: '/',
      port: 8080,
      host: 'localhost',
      historyApiFallback: true,
      noInfo: false,
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ]
  })
}