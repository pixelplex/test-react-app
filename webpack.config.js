/* eslint-disable import/no-dynamic-require */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const configFileName = `${process.env.NODE_ENV}.config.js`;
const configFile = require(`./config/${configFileName}`);

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${__dirname}/src/assets/index.html`,
	filename: 'index.html',
	inject: 'body',
});

const extractSass = new ExtractTextPlugin({
	filename: '[name].[hash].css',
	disable: process.env.NODE_ENV === 'local',
});

const timeCache = Date.now();

module.exports = {
	entry: {
		app: path.resolve('src/index.js'),
	},
	output: {
		publicPath: '/',
		path: path.resolve('dist'),
		filename: `[name].${timeCache}.js`,
		pathinfo: process.env.NODE_ENV === 'local',
		sourceMapFilename: '[name].js.map',
		chunkFilename: `[name].bundle.js?v=${timeCache}`,
	},
	devtool: process.env.NODE_ENV !== 'local' ? 'cheap-module-source-map' : 'eval',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.jsx$/,
				include: /src/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(svg|jpeg|jpg|png|ico|webmanifest)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'images/[name].[ext]',
					},
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: 'url-loader?limit=100000',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
					use: [{
						loader: 'css-loader',
					}, {
						loader: 'sass-loader',
					}],
					// use style-loader in development
					fallback: 'style-loader',
				}),
			},
		],
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				default: false,
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
				},
			},
		},
	},
	resolve: {
		modules: [
			'node_modules',
			path.resolve('src'),
		],
		extensions: ['.js', '.jsx', '.json'],
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.DefinePlugin({
			__API_URL__: JSON.stringify(configFile.api.url),
			__API_KEY__: JSON.stringify(configFile.api.key),
		}),
		HTMLWebpackPluginConfig,
		extractSass,
	],
	performance: {
		hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
	},
};
