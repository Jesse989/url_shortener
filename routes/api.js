var express = require("express");
var router = express.Router();
var valid = require("validator");
var mongoose = require("mongoose");
var Link = mongoose.model('Link');


function getShort(input){
    var short = input.substring(input.indexOf(".")+1,input.indexOf(".")+4);
    return short;
}

function testUrl (req, res){
    if (valid.isURL(req.params.id)){
        insertLink(req, res);
    } else {
        res.end('Not a valid address');
    }
}

function insertLink(req, res){
    Link.findOne({ oldLink: req.params.id }, function(err, result){
        if(err) throw err;
        if(result){
            res.end( JSON.stringify(result.oldLink) + " is already in database: \n https://url-shortener-jesse989.c9users.io/"+result.newLink);
        }
        if(!result){
            var link = new Link();
            link.oldLink = req.params.id;
            link.newLink = getShort(req.params.id);
        
            link.save(function(err, post) {
                if (err){
                    return res.status(500).send(err);
                }
            res.end(JSON.stringify(post.oldLink) + " is now registered at: \n https://url-shortener-jesse989.c9users.io/"+post.newLink);
            });
        }
    });
}



router.route('/http://:id')
    .get(function(req, res){
        testUrl(req, res);   
    });
    
router.route('/https://:id')
    .get(function(req, res){
      //insertLink(req, res);
       testUrl(req, res); 
       
    });
    


module.exports = router;