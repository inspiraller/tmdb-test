const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');

module.exports = (on, config) => {
  // https://github.com/cypress-io/cypress-browserify-preprocessor
  const browserifyOptions = {
    ...browserify.defaultOptions,
    typescript: require.resolve('typescript'),
    basedir: '../../' // to enable paths
  };
  const brow = browserify(browserifyOptions);
  const cuc = cucumber(browserifyOptions);

  require('@cypress/code-coverage/task')(on, config);

  on('task', {
    log(message) {
      console.log(message);
      return null;
    }
  });

  on('file:preprocessor', (file) => {
    if (file.filePath.includes('.feature')) {
      return cuc(file);
    }
    return brow(file);
  });

  // credits - https://github.com/cypress-io/cypress/issues/1358
  const configWithDotenv = require('dotenv').config(); // ({ path: '../../.env' });
  if (configWithDotenv.error) {
    throw configWithDotenv.error;
  }
  const env = { ...config.env, ...configWithDotenv.parsed };
  const result = { ...config, env };
  return result; // necessary for coverage and importing .env variables
};
