/**
 * Created by AlexAdamenko on 09/03/16.
 */



var regDev = require('../models/RegisteredDevice.js');

module.exports=function(app){

    app.get('/users', function(req, res) {
        console.log("im in server get");
        console.log(req.headers);
        regDev.find(function(err, users) {

            if (err)
                res.send(err);

            res.json(users);
        });
    });

    app.get('/users/:id', function(req, res) {
        var response = {};
        console.log(req.headers);

        regDev.findById(req.params.id,function(err,data){
            // This will run Mongo Query to fetch data based on ID.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {

            }
            res.json(data);
        });
    });

    app.post('/post', function (req, res) {

        console.log(req.headers.token);
        console.log(req.headers.prevtoken);

        if(req.headers.token = req.headers.prevtoken){
            regDev.create({
                token: req.headers.token,
            });
        }else{
            var query = { token: req.headers.prevtoken };
            regDev.update(query, { token: req.headers.token }, function (err, item) {
                if(err){
                    console.log(err);
                    return res.send(err);
                }
                return res.json(item);
            });
        }

        console.log('something is here');





    });

    app.post('/update', function(req,res){

        var token = req.headers.token;

        return regDev.update({'token': token},
            {$push: {"game_id": req.headers.game}}, function (err, item) {
                if(err){
                    console.log(err);
                    return res.send(err);
                }
                console.log('UPDATED');
                return res.json(item);
            });


    });


}
