const merge = require('webpack-merge');

const common = require('./.webpack/common.config');

module.exports = () => {
  return merge(
    common,
    process.env.NODE_ENV === 'production'
      ? require('./.webpack/prod.config')
      : require('./.webpack/dev.config')
  );
};
