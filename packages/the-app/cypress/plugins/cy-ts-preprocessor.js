const wp = require('@cypress/webpack-preprocessor');
const path = require('path');

const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@app/*': path.resolve(__dirname, '../../../*/src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(t|j)s$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
};

const options = {
  webpackOptions,
};

module.exports = wp(options);
