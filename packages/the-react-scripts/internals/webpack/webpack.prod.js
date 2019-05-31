const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const OfflinePlugin = require('offline-plugin');
const { HashedModuleIdsPlugin } = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');
const WebpackBar = require('webpackbar');
const paths = require('../paths');

module.exports = merge(require('./webpack.base'), {
  mode: 'production',

  // In production, we skip all hot-reloading stuff
  entry: [require.resolve('react-app-polyfill/ie11'), paths.appIndexJs],

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            comparisons: false,
          },
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: true,
      }),
    ],
    splitChunks: { chunks: 'all' },
    runtimeChunk: true,
  },

  plugins: [
    new CleanWebpackPlugin({
      verbose: false,
    }),
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inlineSource: /runtime~.+[.]js/,
    }),

    new HtmlWebpackInlineSourcePlugin(),

    // Put it in the end to capture all the HtmlWebpackPlugin's
    // assets manipulations and do leak its manipulations to HtmlWebpackPlugin
    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',
      appShell: '/',

      // No need to cache .htaccess. See http://mxs.is/googmp,
      // this is applied before any match in `caches` section
      excludes: ['.htaccess'],

      caches: {
        main: [':rest:'],

        // All chunks marked as `additional`, loaded after main section
        // and do not prevent SW to install. Change to `optional` if
        // do not want them to be preloaded at all (cached only when first loaded)
        additional: ['*.chunk.js'],
      },

      // Removes warning for about `additional` section usage
      safeToUseOptionalCaches: true,
    }),

    new RobotstxtPlugin(),

    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),

    new WebpackPwaManifest({
      name: 'The React App',
      short_name: 'TRA',
      description: 'My React project!',
      background_color: '#FAFAFA',
      theme_color: '#2D68EE',
      start_url: '/?utm_source=a2hs',
      inject: true,
      ios: true,
      icons: [
        {
          src: paths.appIcon,
          sizes: [72, 96, 128, 144, 192, 384, 512],
        },
        {
          src: paths.appIcon,
          sizes: [120, 152, 167, 180],
          ios: true,
        },
      ],
    }),

    new HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20,
    }),

    new WebpackBar(),
  ],

  performance: {
    assetFilter: (assetFilename) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
});
