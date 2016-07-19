var express = require("express");
require("./models/links");

var api = require('./routes/api');
var home = require("./routes/home");
var mongoose = require("mongoose");
var env = require("./.env/mongodb");

var app = express();
mongoose.connect(PROD_MONGODB);



app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/new', api);
app.use('/', home);
var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log('listening on port 3000...');
})

module.exports = app;