const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
      title: "hello webpack",
      filename: "app.html",
      template: path.resolve(__dirname, "./src/index.html"),
      publicPath: "http://www.cdn.com/",
      templateParameters: {
        title: "hello title",
      },
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "chunk-[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
