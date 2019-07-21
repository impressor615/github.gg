const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    historyApiFallback: true,
    proxy: {
      '/apis': {
        changeOrigin: true,
        target: 'http://localhost:5050',
        pathRewrite: { '^/apis': '' },
      },
    },
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
  },
};
