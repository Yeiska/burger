//Data
var express = require("express");
var friends = require("../data/friends.js");

var app = express();
//Routing
module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
};

app.post("/api/friends", function(req, res){
    var newfriendScore = req.body.scores;
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

    //Find best match after all friends comprare
    for (var i = 0; i < scoresArray.length; i++){
        if(scoresArray[i] <= scoresArray[match]){
            match = i;
        }
    }
    //return match data
    var bestMatch = friends[match];
    res.json(bestMatch);
    //push new best friends into array
    friends.push(req.body);
})