var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;

var isDevelopment = process.env.NODE_ENV !== 'production';

if(isDevelopment) {
	console.log("DEV");
	var webpack = require('webpack');
	var webpackDevMiddleware = require("webpack-dev-middleware");
	var webpackHotMiddleware = require("webpack-hot-middleware");
	var webpackConfig = require('./webpack.config.js');
	var compiler = webpack(webpackConfig);

	app.use(webpackDevMiddleware(compiler, {
		publicPath: webpackConfig.output.publicPath,
		stats: {
			colors: true,
			chunks: false
		}
	}));

	app.use(webpackHotMiddleware(compiler));

	app.get('*', function(req, res) {
		var memoryFs = compiler.outputFileSystem;
		var index = path.join(webpackConfig.output.path, 'index.html');
		var html = memoryFs.readFileSync(index);
		res.end(html)
	});

} else {
	console.log("PROD");
	app.get('*', function(req, res) {
		res.sendFile(__dirname + '/public/index.html');
	})
}

app.post('/files', function(req, res) {
	console.log(req.body);
})

app.listen(PORT, function() {
	console.log('running on port: ', PORT)
});
