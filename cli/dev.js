// webpack.config.dev.js

const path = require("path");
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base')
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devConfig = {
  mode: "development",
  entry: path.resolve(__dirname, "../example/index.tsx"), // 启动react demo目录
  output: {
    path: path.resolve(__dirname, "../dist"),      // 虚拟目录内存中
  },
  devServer: {
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html",
    }),
  ],
};


module.exports =  webpackMerge.merge(baseConfig, devConfig)