const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const nextConfig = {
  cssLoaderOptions: {
    importLoaders: 1,
  },
  webpack: (config, {}) => {
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=1000000',
    });
    return config;
  },
};

module.exports = withPlugins(
  [
    withCss,
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? 'static/css/[name].css' : 'static/css/[name].[contenthash:8].css',
      chunkFilename: devMode
        ? 'static/css/[name].chunk.css'
        : 'static/css/[name].[contenthash:8].chunk.css',
      ignoreOrder: true,
    }),
  ],
  nextConfig
);
