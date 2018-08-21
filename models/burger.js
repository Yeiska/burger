var orm = require("../config/orm.js");

var burguer = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(cb){
        orm.insertOne("burgers", cols, val, function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }
};

//Export database functions for the controller
module.exports = burguer;