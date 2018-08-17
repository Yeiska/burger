//Dependencies

var bodyParser = require("body-parser");
var path = require("path");

//Express app
var express = require("express");
//var bodyParser = require("body-parser");

var app = express();


var PORT = process.env.PORT || 3000;

//Handling data parsing with Express app
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function(){
    console.log("app listening on PORT: " + PORT);
});
