const
	stripLoader = require("strip-loader"),
	webpack = require("webpack"),
	webpackDev = require("./webpack.config.js");

const prodConfig = {
	test: /\.js$/,
	exclude: path.resolve("node_modules"),
	loader: stripLoader.loader("console.log")
}

webpackDev.module.loaders.push(prodConfig);
webpackDev.watch = false;

module.exports = webpackDev