//TODO write utility functions for getting various information from the current details JSON
//TODO create some latitude and longitude constants for different locations

'use strict'

var React = require("react-native");
var {
    AsyncStorage
} = React;

module.exports = {

  apiKey: "AIzaSyAm_J6lNvrsnHrKMJYXILl6SqgRNCYbm9k",
  latitude: "38.900271",
  longitude: "-76.989289",

  //"maxPrice" is an integer from 0 to 4
  //"pageToken" is an optional parameter that must be taken from the last results
  buildNearbyUrl(name, radius, maxPrice, pageToken?){
    var string = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    return string.concat(
      "radius=" + radius +
      "&name=" + name.replace(/\s/g, '+') +
      "&maxprice=" + maxPrice +
      "&location=" + this.latitude + "," + this.longitude + //TODO: make this actually use geolocation
      "&key=" + this.apiKey
      //TODO: add pageToken once you figure out how that should work
    );
  },

  storeResults(name, radius, maxPrice, callback?, pageToken?) {
    fetch(this.buildNearbyUrl(name, radius, maxPrice, pageToken))
    .then((response) => response.json())
    .then((responseJson) => {
      AsyncStorage.setItem("current results", JSON.stringify(responseJson), () => {
        this.storeDetails(0, callback);
      });
    })
    .catch((error) => {
      console.log("error is " + error);
    });
  },

  buildDetailUrl(result, resultIndex) {
    var jsonResults = JSON.parse(result);
    var placeId = jsonResults.results[resultIndex].place_id;
    var url = "https://maps.googleapis.com/maps/api/place/details/json?" +
      "placeid=" + placeId +
      "&key=" + this.apiKey;
    console.log(url);
    return url;
  },

  storeDetails(resultIndex, callback?) {
    AsyncStorage.getItem("current results", (err, result) => {
      fetch(this.buildDetailUrl(result, resultIndex))
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        this.storeImageURLs(resultIndex, responseJson, 600, callback);
        this.storeData(resultIndex, responseJson);
      })
      .catch((error) => {
        console.log("error is " + error);
      });
    }).catch((error) => {
      console.log("error is " + error);
    });
  },

  storeData(resultIndex, json) {
    var d = new Date();
    var currentDay = d.getDay();

    var openingTime = json.result.opening_hours.periods[currentDay].open.time + "";
    openingTime = this.convertTime(openingTime);

    var closingTime = json.result.opening_hours.periods[currentDay].close.time + "";
    closingTime = this.convertTime(closingTime);

    var rating = "" + json.result.rating;

    var lat1 = json.result.geometry.location.lat;
    var lon1 = json.result.geometry.location.lng;

    var distance = "" + Math.round(this.distance(lat1, lon1, this.latitude, this.longitude, 'M') * 100) / 100;

    AsyncStorage.multiSet([["result " + resultIndex + " opening time", openingTime],
                           ["result " + resultIndex + " closing time", closingTime],
                           ["result " + resultIndex + " rating", rating],
                           ["result " + resultIndex + " distance", distance]]
                           ).catch((error) => {
                             console.log("error is " + error);
                           });
  },

  distance(lat1, lon1, lat2, lon2, unit) {
  	var radlat1 = Math.PI * lat1/180
  	var radlat2 = Math.PI * lat2/180
  	var theta = lon1-lon2
  	var radtheta = Math.PI * theta/180
  	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  	dist = Math.acos(dist)
  	dist = dist * 180/Math.PI
  	dist = dist * 60 * 1.1515
  	if (unit=="K") { dist = dist * 1.609344 }
  	if (unit=="N") { dist = dist * 0.8684 }
  	return dist
  },

  convertTime(input) {

    var time = input.charAt(0) + input.charAt(1) + ":" + input.charAt(2) + input.charAt(3) +  ":00"; // your input
    time = time.split(':'); // convert to array

    var hours = Number(time[0]);
    var minutes = Number(time[1]);

    var timeValue = "" + ((hours >12) ? hours - 12 : hours);  // get hours
    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
    timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

    return timeValue;
  },

  //TODO: find out a way to handle the case when there are no photos in a result
  storeImageURLs(resultIndex, json, maxHeight, callback?) {
    var photoReference = json.result.photos[0].photo_reference;
    var url1 = "https://maps.googleapis.com/maps/api/place/photo?" +
      "photoreference=" + photoReference +
      "&maxheight=" + maxHeight +
      "&key=" + this.apiKey;
    photoReference = json.result.photos[1].photo_reference;
    var url2 = "https://maps.googleapis.com/maps/api/place/photo?" +
      "photoreference=" + photoReference +
      "&maxheight=" + maxHeight +
      "&key=" + this.apiKey;
    photoReference = json.result.photos[2].photo_reference;
    var url3 = "https://maps.googleapis.com/maps/api/place/photo?" +
      "photoreference=" + photoReference +
      "&maxheight=" + maxHeight +
      "&key=" + this.apiKey;
    photoReference = json.result.photos[3].photo_reference;
    var url4 = "https://maps.googleapis.com/maps/api/place/photo?" +
      "photoreference=" + photoReference +
      "&maxheight=" + maxHeight +
      "&key=" + this.apiKey;
    var name = json.result.name;

    AsyncStorage.multiSet([["result " + resultIndex + ", image 1", url1],
                           ["result " + resultIndex + ", image 2", url2],
                           ["result " + resultIndex + ", image 3", url3],
                           ["result " + resultIndex + ", image 4", url4],
                           ["result " + resultIndex + " name", name]],
                           callback).catch((error) => {
                             console.log("error is " + error);
                           });
  },

  //TODO write this function and then use it to set the latitude and longitude
  setCurrentLocation() {
    // the following code is copy pasted from a different part of project and will
    // not work as written:

    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     var latitude = JSON.stringify(position.coords.latitude);
    //     this.latitude = latitude;
    //     var longitude = JSON.stringify(position.coords.longitude);
    //     this.longitude = longitude;
    //   },
    //   (error) => alert(JSON.stringify(error)),
    //   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    // );
  }

}
