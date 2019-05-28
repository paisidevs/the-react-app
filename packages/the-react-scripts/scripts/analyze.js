process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackConfig = require('../internals/webpack/webpack.prod');

// pushing BundleAnalyzerPlugin to plugins array
webpackConfig.plugins.push(new BundleAnalyzerPlugin());

// actually running compilation and waiting for plugin to start explorer
webpack(webpackConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err);
  }
});
