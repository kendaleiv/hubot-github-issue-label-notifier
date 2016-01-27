'use strict';

module.exports = {

	entry: './src/index.js',

	output: {
		path: 'dist',
		filename: 'index.js'
	},

	target: 'node',

	module: {
		loaders: [
			{test: /\.coffee$/, loader: 'coffee-loader'},
			{
				test: /\.js/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			}
		]
	}

};
