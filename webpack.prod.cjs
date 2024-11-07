/* eslint-disable linebreak-style */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.cjs');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');


module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://restaurant-api.dicoding.dev'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'restaurant-api',
          },
        },
        {
          urlPattern: new RegExp('https://restaurant-api.dicoding.dev/images'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'images',
          },
        },
      ],
    }),
  ],
});