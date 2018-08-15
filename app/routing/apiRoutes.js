//Data
var friends = require("../data/friends");
var express = require("express");
var app = express();
//Routing
module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
    app.post("/api/friends", function(req, res){
        if(friends.length < 5){
            friends.push(req.body);
            res.json(true);
        }

    })
};

app.post("/api/friends", function(req, res){
    var newfriendScore = req.body.score;
    var scoresArray = [];
    var friendsCount = 0;
    var match = 0;

    for (var i = 0; i < scoresArray.length; i++){
        var diff = 0;
        for (var j = 0; j < newfriendScore.length; i++){
            diff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newfriendScore[j])));
        }
        scoresArray.push(diff);
    }

})