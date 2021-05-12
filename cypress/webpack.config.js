const path = require('path');

const src = path.join(__dirname, '../src');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      src
    },
    fallback: {
      fs: false,
      path: false // https://github.com/cypress-io/cypress/issues/8948
    }
  },
  // https://stackoverflow.com/questions/64361940/webpack-error-configuration-node-has-an-unknown-property-fs
  // node: { fs: 'empty', child_process: 'empty', readline: 'empty' }, - fixed and replaced by above - fallback: {fs: false}
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.feature$/,
        use: [
          {
            loader: 'cypress-cucumber-preprocessor/loader'
          }
        ]
      },
      {
        test: /\.features$/,
        use: [
          {
            loader: 'cypress-cucumber-preprocessor/lib/featuresLoader'
          }
        ]
      }
    ]
  }
};
