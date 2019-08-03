var express = require('express');
require('./models/links');
var api = require('./routes/api');
var home = require('./routes/home');
var mongoose = require('mongoose');

require('dotenv').config();

var app = express();

mongoose.connect(
  `mongodb://${process.env.USER}:${
    process.env.PW
  }@ds259347.mlab.com:59347/url-shortener`
);

app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/new', api);
app.use('/', home);
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('listening on port 3000...');
});

module.exports = app;
