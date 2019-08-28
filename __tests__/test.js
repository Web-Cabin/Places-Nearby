const request = require('supertest');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/api/nearbyPlaces', function(req, res) {
  res.status(200).json({ name: 'john' });
});

request(app)
  .get('/api/nearbyPlaces')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });

