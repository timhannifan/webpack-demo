const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: {
  	app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
	  path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
	devServer: {
	  contentBase: './dist',
	  historyApiFallback: true,
	  hot: true
	},
  plugins: [
	  new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'webpack-demo'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],  
	module: {
	  rules: [
	    {
	      test: /\.css$/,
	      use: [
	        'style-loader',
	        'css-loader'
	      ]
	    },
			{
			  test: /\.(png|svg|jpg|gif)$/,
			  use: [
			    'file-loader'
			  ]
			},
			{
			  test: /\.(woff|woff2|eot|ttf|otf)$/,
			  use: [
			    'file-loader'
			  ]
			},
			{
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader'
	      }
	    }		
	  ]
	}  
};

module.exports = config;