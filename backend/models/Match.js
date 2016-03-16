/**
 * Created by AlexAdamenko on 09/03/16.
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var Match = new Schema({
    game_id : String,
    first_player : String,
    second_player : String,
    date : Date,
    time: Date,
    stage : String
});

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Match', Match);
