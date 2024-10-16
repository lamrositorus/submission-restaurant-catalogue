/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';
const __dirname = path.resolve();
export default {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      ],
    },],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/public/'),
        to: path.resolve(__dirname, 'dist/'),
      },],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching:[
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
        }
      ]
    }),
  ],
};