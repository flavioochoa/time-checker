var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var version = require('short-id').generate();
module.exports = {
	entry: ['babel-polyfill', 'whatwg-fetch', './src/index.js'],
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: `[name].js?id=${version}`,
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/views/template.pug',
			filename: 'index.html'
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					query: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
						plugins: [
							['import', { libraryName: "antd", style: true }],
							['@babel/proposal-class-properties']
						]
					},
				}
			},
			{
				test: /\.pug$/,
				use: [
					'html-loader',
					{
						loader: 'pug-html-loader',
						options: {
							pretty: true,
							data: {
								version
							}
						},
					},
				],
			},
			{
				test: /\.(css|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				],
			},
			{
				test: /\.less$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{
						loader: "less-loader",
						options: {
							javascriptEnabled: true
						}
					}
				]
			},
		]
	}
};