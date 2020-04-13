const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const buildDir = path.resolve( __dirname, 'dist' );
const srcDir   = path.resolve( __dirname, 'src' );

module.exports = {
	entry: srcDir + '/index.js',
	output: {
		path: buildDir,
		filename: 'js/[name].min.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
		new MiniCssExtractPlugin( {
			path: buildDir,
			filename: 'css/[name].min.css',
		} ),
	],
	devServer: {
		historyApiFallback: true,
	}
};
