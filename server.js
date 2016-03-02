/**
 * Created by AlexAdamenko on 3/1/2016.
 */


var express = require('express');
var gcm = require('node-gcm');
var app = express();

var arr = [];

app.get('/', function (req, res) {
    res.send(arr);
});

var message = new gcm.Message();
message.addData('test', 'test');

var sender = new gcm.Sender('AIzaSyBJ94GJi5PTfgzFi2fxUVBEJ6-K490A3FI');


app.get('/send', function (req, res) {

    sender.send(message, { registrationTokens: arr}, function (err, response) {
        if(err) console.error('test');
        else 	console.log(response);
    });

});

app.post('/post', function (req, res) {

   console.log('something is here');
    console.log(req.headers.token);
    arr.push(req.headers.token);

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});