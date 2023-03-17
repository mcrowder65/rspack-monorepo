/**
 * @type {import('@rspack/cli').Configuration}
 */
const path = require("path")
module.exports = {
  context: __dirname,
  entry: {
    main: "./src/main.tsx",
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
  },
  devServer: {
    open: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          name: "vendor",
          test: /common/,
        },
      },
    },
  },
  builtins: {
    emotion: true,
    react: {
      // TODO
      // https://github.com/web-infra-dev/rspack/blob/main/examples/react-refresh/rspack.config.js
      importSource: "@emotion/react",
      refresh: true,
    },
    html: [
      {
        template: "./public/index.html",
      },
    ],
  },
  module: {
    rules: [
      //  https://github.com/web-infra-dev/rspack/issues/2262#issuecomment-1473716951
      {
        test: /\.js$/,
        type: "jsx",
        include: [/src/, /some other path/],
      },
      {
        test: /\.svg$/,
        type: "asset",
      },
    ],
  },
}
