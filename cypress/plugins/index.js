const cucumber = require('cypress-cucumber-preprocessor').default
const browserify = require('@cypress/browserify-preprocessor');

module.exports = (on, config) => {
  // https://github.com/cypress-io/cypress-browserify-preprocessor
  const browserifyOptions = {
    ...browserify.defaultOptions,
    typescript: require.resolve('typescript')
  };
  const brow = browserify(browserifyOptions)
  const cuc = cucumber(browserifyOptions);

  require('@cypress/code-coverage/task')(on, config);

  on('task', {
    log(message) {
      console.log(message);
      return null;
    }
  });

  on('file:preprocessor', file => {
    if (file.filePath.includes('.feature')) {
      return cuc(file)
    }
    return brow(file)
  })
  on('before:browser:launch', (browser = {}, args) => {
    if (browser.name === 'chrome') {
      args.push('--remote-debugging-port=9222')
      return args
    }
  })
  return config; // necessary for coverage
}
