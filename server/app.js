const express = require('express');
const dbPlaces = require('../models/placesModel');
const cors = require('cors')



const port = 3003;
const app = express();



//app.use(require('morgan')('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}./../client/dist`));
app.use(cors())


app.get('/api/listings/:id', (req, res) => {
  dbPlaces.getAllPlaces((err, data) => {
    if (err) {
      throw err; 
    } else {
      res.send(data)
    }
  })
})

app.listen(port, () => {
  console.log(`Listening to port ${[port]}`);
});