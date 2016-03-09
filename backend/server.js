/**
 * Created by AlexAdamenko on 3/1/2016.
 */


var express = require('express');
var mongoose = require('mongoose');
var gcm = require('node-gcm');
var app = express();

var gamesAPI = require('gamesAPI');

app.use(express.static(__dirname + '/../frontend'));

app(gamesAPI);

var arr = [];

app.get('/', function (req, res) {
    res.sendfile('/../frontend/index.html');
});

app.get('/users', function (req, res) {
    res.json(arr);
});

var message = new gcm.Message();
message.addData('test', 'test');

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