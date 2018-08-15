//Dependencies

var bodyParser = require("body-parser");
var path = require("path");

//Express app
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();


var PORT = process.env.PORT || 3000;

//Handling data parsing with Express app
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json());
//app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//Routes
require("./app/routing/apiRoutes.js");
require("./app/routing/htmlRoutes.js");

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

//Listener
app.listen(PORT, function(){
    console.log("app listening on PORT: " + PORT);
});
