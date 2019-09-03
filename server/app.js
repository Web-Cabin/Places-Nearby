const express = require('express');
const dbPlaces = require('../models/placesModel');
const dbActivities = require('../models/activitiesModel')
// const path = require('path');

const port = 3000;
const app = express();

//app.use(require('morgan')('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}./../client/dist`));


app.get('/api/nearbyPlaces', (req, res) => {
  dbPlaces.getAllPlaces((err, data) => {
    if (err) {
      throw err; 
    } else {
      res.send(data)
    }
  })
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  next();
})


// app.get('/api/nearbyActivities', (req, res) => {
//   dbActivities.getAllActivities((err, data) => {
//     if (err) {
//       throw err; 
//     } else {
//       res.send(data)
//     }
//   })
// })


app.listen(port, () => {
  console.log(`Listening to port ${[port]}`);
});