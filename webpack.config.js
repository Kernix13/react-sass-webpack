const path = require("path");
// localhost:8080 not working

module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "myBundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, "dist"),
    hot: true
  }
};
