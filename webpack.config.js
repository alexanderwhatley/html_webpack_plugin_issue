var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: ['./js/index.js'],
	output: {
		path: __dirname + '/static',
		filename: "bundle-[hash].js"
	},
	resolveLoader: {
	moduleExtensions: ['-loader']
	},
	plugins: [
			new CleanWebpackPlugin(['static/bundle-*.js'], {watch: true}),
			new HtmlWebpackPlugin({
				filename: __dirname + '/templates/index.html',
				template: 'static/index_template.html',
				inject: 'body'
			})
	],
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
	}
};
