const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Copyplugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const WebpackBar = require('webpackbar');
const path = require('path');
module.exports = {
	entry: './src/index.js',
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].[fullhash:8].js',
	},
	module: {
		rules: [
			{
				test: /\.template$/,
				use: {
					loader: path.resolve(__dirname, './loaders/template.js'),
				},
			},
			{
				test: /\.png$/,
				use: 'file-loader'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'less-loader',
				],
			},
			{
				test: /\.(woff | eot | ttf | otf | svg | png)$/,
				type: 'asset/resource',
			},
			{
				test: /\.jsx?$/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	mode: process.env.NODE_ENV,
	resolve: {
		alias: {
			vue: 'vue/dist/vue.esm.js',
			'@': path.resolve(__dirname, '../src'),
		},
	},
	devServer: {
		open: true,
		// 配置前端请求代理
		proxy: {
			'^/api': {
				target: 'https://www.starbucks.com.cn/',
			},
			'^/bff': {
				target: 'https://bff.starbucks.com.cn/',
				pathRewrite: { '/api1': '' },
			},
		},
		client: {
			overlay: false,
		},
	},
	plugins: [
		new WebpackBar(),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash:8].css',
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			cdn: {
				script: ['https://cdn.jsdelivr.net/npm/vue@2'],
				style: [],
			},
		}),
		new VueLoaderPlugin(),
		new Copyplugin({
			patterns: [
				{ from: "./src/static", to: "./static" },
			],
		})
	],
};
