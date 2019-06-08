const path = require('path');
const appSrc = '../src';

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.modules.push(appSrc);
  config.resolve.alias['@app'] = path.resolve(__dirname, appSrc);

  return config;
};
