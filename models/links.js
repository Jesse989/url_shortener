var mongoose = require('mongoose');

var linkSchema = new mongoose.Schema({
   oldLink: String,
   newLink: String
});

mongoose.model('Link', linkSchema);