const path = require("path");

module.exports = {
	entry: "./src/index.js",
	mode: "production",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "string-similarity.min.js",
		library: "stringSimilarity",
		libraryTarget: "dist",
	},
};
