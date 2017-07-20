var GeoJSON = require('mongoose-geojson-schema');
var mongoose=require('mongoose');
mongoose.connect('mongodb://user:user@ds013956.mlab.com:13956/swifthire');
var Schema=mongoose.Schema;
var user = require('./user');


var jobSchema = new Schema({
        name:String,
        description:String,
        category:String,
        duration:Date,
        DurationPerHour:Number,
        hourlyFee:Number,
        status:Boolean,
        preferredDateTime:Date,
        wattingList:[Object],
        location: {
          
        coordinates: { type: [Number]}
    },
      });
  /*var jobSchema = new Schema({
  
    name:       { type: String },
    description: { type: String},
    category:    { type: String},
    duration: { type:Number},
    DurationPerHour: { type: Number },
    descrihourlyFee: { type: Number },
    status: { type: String },
    preferredDateTime: { type: Date},
    wattingList: { type: [Object] }, 
  
  //location: mongoose.Schema.Types.Point,
});

//jobSchema.index({ location: '2dsphere' });

*/
module.exports = mongoose.model('Job', jobSchema);