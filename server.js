var express = require('express');
var path = require('path');
var app = express();
var multer  = require('multer');
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })
var PORT = process.env.PORT || 3000;

var AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-west-1'
})
var s3bucket = new AWS.S3();


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
	app.use(express.static('public'));
	app.get('*', function(req, res) {
		res.sendFile(__dirname + '/public/index.html');
	})
}

app.post('/files', upload.any(), function (req, res, next) {
	var s3params = {
	  Bucket: 'lenstore',
		Key: 'test',
		Body: new Buffer(req.files)
	};
	s3bucket.putObject(s3params, function(err, data) {
    if (err) {
      console.log("Error uploading data: ", err);
    } else {
      console.log("Successfully uploaded data to myBucket/myKey");
			res.json({
				is: 'working'
			})
    }
  });
})

app.listen(PORT, function() {
	console.log('running on port: ', PORT)
});
