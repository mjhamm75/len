var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: './src/index',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new ExtractTextPlugin("app.css"),
        new HtmlWebpackPlugin({
          template: 'index.ejs',
          title: 'Len',
          mobile: true
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/,
            include: path.join(__dirname, 'src')
        }, {
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, '..', '..', 'src')
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
        }]
    },
    postcss: function() {
        return [autoprefixer];
    }
};
