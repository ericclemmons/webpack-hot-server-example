var NpmInstallPlugin = require("npm-install-webpack-plugin");
var StartServerPlugin = require("start-server-webpack-plugin");
var webpack = require("webpack");

module.exports = {
  devtool: "inline-sourcemap",

  entry: {
    server: [
     "webpack/hot/poll?1000",
      "./src/server.js",
    ],
  },

  externals: [
    // Every non-relative module is external
    /^[a-z\-0-9]+$/,
  ],

  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: { cacheDirectory: true },
        test: /\.js$/,
      },
    ],
  },

  node: {
    __filename: true,
    __dirname: true,
  },

  output: {
    chunkFilename: "[id].[hash:5]-[chunkhash:7].js",
    devtoolModuleFilenameTemplate: "[absolute-resource-path]",
    filename: "[name].js",
    libraryTarget: "commonjs2",
    path: "./build/server",
  },

  plugins: [
    new StartServerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  target: "async-node",
};
