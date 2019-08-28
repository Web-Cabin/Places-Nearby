const faker = require('faker');
const model = require('../models/placesModel.js');
const model2 = require('../models/activitiesModel.js')
const mongoose = require('mongoose')

const placeList = [];

//const faker = require('faker');
//model.dropCollection('Places')

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

  console.log('bbbbbbbbb', placeArray);

};
savePlaces(placeList)


const activityList = [] 
for (var i = 0; i < 100; i++) {
  let place = {
   id: i,
   photoUrl: `https://nearby-recommendations.s3-us-west-1.amazonaws.com/${i}.jpg`, 
   title: faker.lorem.sentence(),
   category: faker.lorem.words(),
   price: Math.floor(Math.random() * 200 + 100),
   reviews: Math.floor(Math.random() * 200 + 100),
   }
   activityList.push(place)
}

//////------------------------ ACTIVITIES ------------------------------------------------------------------
let saveActivities = (activityList) => { 

 var activityArray = [];

 for (var i = 0; i < activityList.length; i++) {
   var activityObj = {};
   activityObj.id = activityList[i].id;
   activityObj.photoUrl= activityList[i].photoUrl,
   activityObj.title= activityList[i].title,
   activityObj.category= activityList[i].category,
   activityObj.price= activityList[i].price,
   activityObj.reviews= activityList[i].reviews;
   
   var activity = new model2.Activity(activityObj); //new document

   activity.save(function (err) {
     if (err) {
       console.log(err);
     } else {
       //saved
     }
   })

   activityArray.push(activityObj);
 }

 console.log('bbbbbbbbb', activityArray);

};
saveActivities(activityList)