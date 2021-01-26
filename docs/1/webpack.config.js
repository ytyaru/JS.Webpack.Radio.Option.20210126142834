module.exports = {
  mode: "production",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                // ES2020 を ES5 に変換
                "@babel/preset-env",
              ],
              plugins: [
                // private # を使えるようにする
                "@babel/plugin-proposal-private-methods"
              ],
            },
          },
        ],
      },
    ],
  },
  // ES5(IE11等)向け
  target: ["web", "es5"],
};

