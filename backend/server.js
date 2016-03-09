/**
 * Created by AlexAdamenko on 3/1/2016.
 */


var express = require('express');
var mongoose = require('mongoose');
var gcm = require('node-gcm');
var app = express();
var fs = require('fs');
var gamesAPI = require('./routes/gamesAPI');
var regDevAPI = require('./routes/regDevAPI');
var config = require('./models/config');

app.use(express.static(__dirname + '/../frontend'));

gamesAPI(app);
regDevAPI(app);

var port = process.env.PORT || 8080;
mongoose.connect(config.database);     // connect to mongoDB database on modulus.io
app.set('superSecret', config.secret);
mongoose.connection.on('open', function (ref) {
    console.log('Connected to Mongo server...');
});

app.get('/', function (req, res) {
    res.sendfile('/../frontend/index.html');
});

app.get('/users', function (req, res) {
    res.json(arr);
});

var message = new gcm.Message();

var sender = new gcm.Sender('AIzaSyBJ94GJi5PTfgzFi2fxUVBEJ6-K490A3FI');


app.get('/send', function (req, res) {

    sender.send(message, { registrationTokens: arr}, function (err, response) {
        if(err) console.error('test');
        else 	console.log("good");
    });

});



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});