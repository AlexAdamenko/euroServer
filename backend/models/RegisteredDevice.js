/**
 * Created by AlexAdamenko on 09/03/16.
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var regDev = new Schema({
    token : String,
    game_id : String
});

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('regDev', regDev);
