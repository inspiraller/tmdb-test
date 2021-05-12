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
      plugins: ["istanbul"],
    },
    production: {
      plugins: [
        "transform-remove-console",
        "transform-class-properties",
        "istanbul"
      ],
    },
  },
};
