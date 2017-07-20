var mongoose=require('mongoose');
mongoose.connect('mongodb://user:user@ds013956.mlab.com:13956/swifthire');
var Job = require('./job');
var Schema=mongoose.Schema;

var userSchema = new Schema({

name :String,
email:String,
geo:{
    lat:Number,
    lng:Number

},
job:[Object],
comment:[String],
rating:Number,
status:Boolean

});

module.exports = mongoose.model('User', userSchema);