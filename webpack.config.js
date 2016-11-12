var path = require('path');
var failPlugin = require('webpack-fail-plugin');
var copyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
var ExtractPlugin = require('extract-text-webpack-plugin');

var isProduction = process.env.NODE_ENV ? process.env.NODE_ENV.trim() == 'production' : false
var extractCSS = false
var serverPort = 8080
var outputPath = path.join(__dirname, 'build')
var outputFileName = 'bundle.js'
;

var config = {
	context : path.join(__dirname, 'src'),
	entry :[
		'./js/index.js',
	],
	output : {
		path : outputPath,
		filename : outputFileName,
		publicPath: './build'
	},
	devtool : isProduction ? null : 'source-map',
	devServer : {
		outputPath : outputPath,
		contentBase: './build',
		historyApiFallback: true,
		port : serverPort,
  	hot: true,
  	stats: {
			colors: true,
			chunks: false
		},
  	filename: outputFileName
	},
	module : {
		loaders :[
			{
		      test: /\.jsx?$/,
		      exclude: /node_modules/,
		      loader: 'babel',
		      query: {
		        presets: ['es2015', 'stage-0', 'react', 'react-hmre']
		      }
		    },
			{
				test : /\.scss/,
				loader : extractCSS ? ExtractPlugin.extract('style', 'css!sass') : 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.css$/,
				loader: extractCSS ? ExtractPlugin.extract('style', 'css') : 'style-loader!css-loader'
			},
			{
				test: /\.(png|jpg|svg)$/,
				loaders: ['url', 'image-webpack']
			}
		]
	},
	resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.sass']
  	},
  	plugins : [
  		failPlugin,
		new copyWebpackPlugin([
			{from : 'index.html', to: __dirname + '/build'},
		]),
  	],
  	serverPort : serverPort
};

if (isProduction) {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
		    compress: {
		        warnings: false
		    }
		})
	);
}

if (extractCSS) {
	config.plugins.push(new ExtractPlugin('bundle.css'));
}

module.exports = config;
