const faker = require('faker');
const model = require('../models/placesModel.js');

const placeList = [];

//test
for (var i = 0; i < 100; i++) {
   let place = {
    id: i,
    photoUrl: `https://nearby-recommendations.s3-us-west-1.amazonaws.com/${i}.jpg`, 
    title: faker.lorem.sentence(),
    city: faker.address.city(),
    propertyType: faker.lorem.words(),
    price: Math.floor(Math.random() * 200 + 100),
    reviews: Math.floor(Math.random() * 200 + 100),
    }
    placeList.push(place)
}

let savePlaces = (placeList) => { //PLACELIST is an array of objects

  var placeArray = [];
  //var parsedPlaces = JSON.parse(placeList); //array of repo objects

  for (var i = 0; i < placeList.length; i++) {
    var placesObj = {};
    placesObj.id = placeList[i].id;
    placesObj.photoUrl= placeList[i].photoUrl,
    placesObj.title= placeList[i].title,
    placesObj.city= placeList[i].city,
    placesObj.propertyType= placeList[i].propertyType,
    placesObj.price= placeList[i].price,
    placesObj.reviews= placeList[i].reviews;
    
    var place = new model.Place(placesObj); //new document

    place.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        //saved
      }
    })

    placeArray.push(placesObj);
  }

  console.log('bbb');

};
savePlaces(placeList);

