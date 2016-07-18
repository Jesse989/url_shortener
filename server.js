var express = require("express");
require("./models/links");
var api = require('./routes/api');
var home = require("./routes/home");
var mongoose = require("mongoose");
var env = require("./.env/mongodb");

var app = express();
mongoose.connect('mongodb://'+env.username+':'+env.password+'@ds011735.mlab.com:11735/ecommerce');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/new', api);
app.use('/', home);

app.listen(3000, function(){
    console.log('listening on port 3000...');
})

module.exports = app;