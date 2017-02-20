var path = require('path');
module.exports = {
	entry: './client/index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loaders: 'babel-loader', exclude: /node_modules/},
			{ test: /\.jsx$/, loaders: 'babel-loader', exclude: /node_modules/}
		]
	}
}