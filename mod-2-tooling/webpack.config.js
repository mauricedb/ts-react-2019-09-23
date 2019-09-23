module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  module: {
    rules: [
      { test: /\.[jt]s$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".ts"]
  }
};
