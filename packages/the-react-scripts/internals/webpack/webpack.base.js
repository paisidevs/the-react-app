/**
 * COMMON WEBPACK CONFIGURATION
 */
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const resolve = require('resolve');
const Dotenv = require('dotenv-webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const paths = require('../paths');
const typescriptFormatter = require('../../utils/typescriptFormatter');

module.exports = {
  output: {
    path: paths.appBuild,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: paths.appSrc,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides'
              ),
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(gif|jpe?g|png|svg|webp|mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  plugins: [
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; Terser will automatically
    // drop any unreachable code.
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
    new Dotenv({
      path: paths.dotenv,
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: resolve.sync('typescript', {
        basedir: paths.appNodeModules,
      }),
      useTypescriptIncrementalApi: true,
      checkSyntacticErrors: true,
      tsconfig: paths.appTsConfig,
      tslint: true,
      reportFiles: [
        '**',
        '!**/*.json',
        '!**/__tests__/**',
        '!**/?(*.)(spec|test).*',
        '!**/src/setupTests.*',
      ],
      watch: paths.appSrc,
      formatter: typescriptFormatter,
    }),
  ],
  resolve: {
    alias: {
      '@app': paths.appSrc,
    },
    modules: ['node_modules', paths.appSrc],
    extensions: ['.js', '.jsx', '.react.js', '.ts', '.tsx'],
    mainFields: ['browser', 'jsnext:main', 'main'],
  },
  target: 'web', // Make web variables accessible to webpack, e.g. window
};
