module.exports = {
	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	devtool: "eval-source-map",

	devServer: {
		contentBase: "./public",
		colors: true,
		historyApiFallback: true,
		inline: true
	}
}