//Dependencies
var path = require("path");

//Routing
module.exports = function(app){
    app.get("", function(req, res){
        res.sendFile(path.join(_dirname + "./app/public"));
    });
    //route to home page
    app.use(function(req,res){
        res.sendFile(path.join(__dirname + "/app/public/home.html"));
    });
};