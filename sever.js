//Dependencies
var express = require("express");
var bodyParser = require("body-parse");
var path = require("path");

//Express app
var app = express();
var PORT = process.env.PORT || 3000;

//Handling data parsing with Express app
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

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
