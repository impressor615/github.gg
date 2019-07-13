const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].bundle.js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        // sourceMap: true, // Must be set to true if using source-maps in production
        exclude: /node_modules/,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};
