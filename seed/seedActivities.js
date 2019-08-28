const faker = require('faker');
const model = require('../models/activitiesModel.js');
const mongoose = require('mongoose')


const activityList = [];

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


let save = (activityList) => { //PLACELIST is an array of objects

  var activityArray = [];
  //var parsedPlaces = JSON.parse(placeList); //array of repo objects

  for (var i = 0; i < activityList.length; i++) {
    var activityObj = {};
    activityObj.id = activityList[i].id;
    activityObj.photoUrl= activityList[i].photoUrl,
    activityObj.title= activityList[i].title,
    activityObj.category= activityList[i].category,
    activityObj.price= activityList[i].price,
    activityObj.reviews= activityList[i].reviews;
    
    var activity = new model.Activity(activityObj); //new document

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
save(activityList)