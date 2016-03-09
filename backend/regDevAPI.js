/**
 * Created by AlexAdamenko on 09/03/16.
 */



var regDev = require('/models/RegisteredDevice.js');

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

        console.log('something is here');
        console.log(req.headers.token);

        regDev.create({
            token: req.headers.token
        });

    });


}
