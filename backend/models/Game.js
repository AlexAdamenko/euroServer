/**
 * Created by AlexAdamenko on 09/03/16.
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var Game = new Schema({
    first_player : String,
    second_player : String,
    date : Date,
    stage : String
});

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Game', Game);
