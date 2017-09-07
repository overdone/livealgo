const webpack = require('webpack');
const path = require('path');

module.exports = function() {
  return {
    devtool: 'source-map',

    entry: [
      './src/app/index.jsx'
    ],

    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'bundle.js',
      publicPath: '../dist'
    },

    resolve: {
      extensions: ['.js', '.jsx', '.json', '.css', '.scss']
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          include: path.join(__dirname, '../src/app'),
          use: ['babel-loader'],
        },
        {
          test: /\.(css|scss)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[path]__[name]__[local]__[hash:base64:5]',
                modules: 1,
                importLoaders: 1
              }
            },
            'postcss-loader',
          ],
        },
        {
          test: /\.svg$/,
          use: 'svg-sprite-loader'
        }
      ]
    }
  };
}