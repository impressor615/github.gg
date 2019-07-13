const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    extensions: ['.ts', '.tsx', '.json', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../templates/index.ejs'),
      title: 'commit.gg',
      description: 'What is your tier on github?',
      theme: '#c921f3',
    }),
  ],
};
