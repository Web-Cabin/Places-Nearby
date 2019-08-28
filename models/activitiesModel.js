const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.connect('mongodb://localhost/activities', { useNewUrlParser: true });

const activitySchema = new mongoose.Schema({
  id: String, 
  photoUrl: String,
  title: String,
  category: String,
  price: Number,
  reviews: Number,
});

const Activity = mongoose.model('Activity', activitySchema);

const getAllActivities = function(callback) {
  Activity.find({}).exec((err, data) => {
    if(err){
      callback(err)
    } else {
      callback(null, data)
    }
  })
}

module.exports = {Activity, getAllActivities}
