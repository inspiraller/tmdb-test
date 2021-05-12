const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config);

  const options = {
    webpackOptions: require('../webpack.config.js')
  };
  on('task', {
    log(message) {
      console.log(message);
      return null;
    }
  });
  on('file:preprocessor', webpack(options));
  return config; // necessary for coverage
};
