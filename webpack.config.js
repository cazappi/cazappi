const path = require('path');

module.exports = {
  // outras configurações do Webpack
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "url": require.resolve("url/"),
      "https": require.resolve("https-browserify"),
      "http": require.resolve("stream-http"),
      "net": false,
      "tls": false,
      "assert": require.resolve("assert/"),
      "fs": false,
      "os": require.resolve("os-browserify/browser"),
      "child_process": false
    }
  }
};
