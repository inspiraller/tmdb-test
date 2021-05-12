console.log("process.env.NODE_ENV = ", process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  console.log(
    "########## instrumenting code coverage on starting dev environment #################################################"
  );
}

module.exports = {
  presets: ["next/babel"],
  env: {
    development: {
      plugins: ["istanbul", "transform-class-properties"],
    },
    production: {
      plugins: [
        "transform-remove-console"
      ],
    },
  },
  plugins: [
    [
      "@babel/plugin-transform-runtime", {
        "regenerator": true
      }
    ],
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        root: ['./'],
        alias: {
          src: './src',
          __tests__: './__tests__',
          Common: './src/Components/Common',
          '@types': './@types',
          stories: './stories'
        }
      }
    ]
  ]
};
