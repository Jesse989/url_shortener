var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Link = mongoose.model('Link');







router.route('/')
    .get(function(req, res){
        res.render("index")   
    });




router.route('/:id')
    .get(function(req, res){
        Link.findOne({newLink: req.params.id}, function(err, result){
            if(err) throw err;
            if(result){
            res.redirect("//"+result.oldLink);     
            }
            else if (!result){
                res.end();
            }
        })
          
    });
    
module.exports = router;