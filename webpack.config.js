const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: {
    index: {
      import: "./src/index.js",
    },
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "app.js",
    //chunkFilename: "asset_[id].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
