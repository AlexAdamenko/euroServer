/**
 * Created by AlexAdamenko on 09/03/16.
 */


var Game = require('../models/Game.js');

module.exports=function(app){

    app.get('/games', function(req, res) {
        console.log("im in server get");
        console.log(req.headers);
        Game.find(function(err, games) {

            if (err)
                res.send(err);
 
            res.json(games);
        });
    });

    app.get('/games/:id', function(req, res) {
        var response = {};
        console.log(req.headers);

        Game.findById(req.params.id,function(err,data){
            // This will run Mongo Query to fetch data based on ID.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {

            }
            res.json(data);
        });
    });
}