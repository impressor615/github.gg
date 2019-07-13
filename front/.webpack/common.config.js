const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const title = 'commit.gg';
const description = 'What is your tier on github?';
const theme = '#c921f3';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          configFile: path.resolve(
            __dirname,
            `../.eslint/.eslintrc${
              process.env.NODE_ENV === 'production' ? '' : '.dev'
            }.js`
          ),
        },
      },
      { test: /\.tsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'commit.gg',
      template: path.resolve(__dirname, '../templates/index.ejs'),
      meta: {
        // Meta: https://github.com/joshbuchea/HEAD#meta
        viewport:
          'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no',
        'Content-Security-Policy': {
          'http-equiv': 'Content-Security-Policy',
          content: 'default-src "self"',
        },
        'x-dns-prefetch-control': {
          'http-equiv': 'x-dns-prefetch-control',
          content: 'off',
        },
        'Window-Target': {
          'http-equiv': 'Window-Target',
          content: '_value',
        },
        'theme-color': theme,
        description,
        robots: 'index,follow',
        googlebot: 'index,follow',
        google: 'nositelinkssearchbox',
        // TODO: Site verification here
        // 'google-site-verification': 'value',
        subject: description,
        rating: 'General',
        referrer: 'no-referrer',
        'format-detection': 'telephone=no',

        // Social
        'og:url': 'https://commit.gg',
        'og:type': 'website',
        'og:title': title,
        'og:image': 'TODO',
        'og:image:alt': 'TODO',
        'og:description': description,
        'og:site_name': title,
        'og:locale': 'TODO',

        // Apple
        'apple-mobile-web-app-title': title,
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': theme,

        // Google Android
        'mobile-web-app-capable': 'yes',

        // IE
        'X-UA-Compatible': {
          'http-equiv': 'X-UA-Compatible',
          content: 'ie=edge',
        },
      },
    }),
  ],
};
