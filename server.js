var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var path = require('path');

var PORT = process.env.PORT || 3000;

// new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   hot: true,
//   historyApiFallback: true,
//   stats: {
//     colors: true
//   }
// }).listen(PORT, 'localhost', function (err) {
//   if (err) {
//     console.log(err);
//   }
//
//   console.log('Listening at localhost:3000');
// });

var express = require('express');

var app = express();

app.use(express.static('public'));
app.use('/static', express.static('public'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, function(err) {
  if(err) {
    console.log(err);
  }
  console.log('Listening at PORT: ', PORT);
})
