const path = require('path');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const htmlWebpackPlugin = new HtmlWebpackPlugin({
//   template: path.join(__dirname, "frontend/index.html"),
//   filename: "./index.html"
// });

module.exports = {
  entry: './frontend/react_portfolio_redux.jsx', // specify entry to todo_redux.jsx
  output: {
    path: path.resolve(__dirname), // resolves path into an absolute
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devtool: 'source-map', // creates a bundle.js.map - without this chrome would only tell you where your errors are in the bundle file
  // plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: [".js", ".jsx", "*"] // import a file - import something from 'something'
  },
  // devServer: {
  //   port: 5500
  // }
};
