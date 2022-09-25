/* eslint-disable no-undef */
const { defineConfig } = require("@vue/cli-service");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  lintOnSave: false, // 禁用eslint
  transpileDependencies: true,
  devServer: {
    // host: "localhost",
    // open: true,
    // port: "8080",
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@components": resolve("src/components"),
        "@assets": resolve("src/assets"),
        "@views": resolve("src/views"),
      },
    },
  },
});
