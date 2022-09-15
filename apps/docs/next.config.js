const withTM = require("next-transpile-modules")(["danny-ui-components-test"]);

module.exports = withTM({
  reactStrictMode: true,
});
