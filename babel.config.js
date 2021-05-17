module.exports = {
  presets: ['next/babel'],
  env: {
    development: {
      plugins: ['istanbul', 'transform-class-properties']
    },
    production: {
      plugins: ['transform-remove-console']
    }
  },
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true
      }
    ]
  ]
};
