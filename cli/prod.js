// webpack.config.prod.js

const path = require("path");
const { name } = require("../package.json");
const webpackMerge = require("webpack-merge");
const baseConfig = require("./base");

const prodConfig = {
  mode: "production",
  entry: path.resolve(__dirname, "../src/index.ts"), // 如果是tsx要改名字
  output: {
    path: path.resolve(__dirname, "../lib"),
    library: name,
    libraryTarget: "umd",
    filename: "index.js",
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
  },
};

module.exports = webpackMerge.merge(baseConfig, prodConfig);
