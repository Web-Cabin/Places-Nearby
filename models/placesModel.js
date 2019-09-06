const mongoose = require('mongoose');

const db = mongoose.connection;

var mongoUrl = 'mongodb://database/places';

mongoose.connect(mongoUrl,  { useNewUrlParser: true })

const placeSchema = new mongoose.Schema({
  id: Number,
  photoUrl: String,
  title: String,
  city: String,
  propertyType: String,
  price: Number,
  reviews: Number,
});

const Place = mongoose.model('Places', placeSchema);

const getAllPlaces = function(callback) {
  Place.find({}).exec((err, data) => {
    if(err){
      callback(err)
    } else {
      callback(null, data)
    }
  })
}


module.exports = {Place, getAllPlaces}
