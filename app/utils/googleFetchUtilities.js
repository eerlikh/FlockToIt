//TODO write utility functions for getting various information from the current details JSON
//TODO rewrite functions to use callbacks, props, and state instead of asyncstorage
//TODO create some latitude and longitude constants for different locations

'use strict'

var React = require("react-native");
var {
    AsyncStorage
} = React;

module.exports = {

  apiKey: "AIzaSyAm_J6lNvrsnHrKMJYXILl6SqgRNCYbm9k",

  //"maxPrice" is an integer from 0 to 4
  //"pageToken" is an optional parameter that must be taken from the last results
  buildNearbyUrl(name, radius, maxPrice, pageToken?){
    var string = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    return string.concat(
      "radius=" + radius +
      "&name=" + name.replace(/\s/g, '+') +
      "&maxprice=" + maxPrice +
      "&location=38.900271,-76.989289" + //TODO: make this actually use geolocation
      "&key=" + this.apiKey
      //TODO: add pageToken once you figure out how that should work
    );
  },

  storeResults(name, radius, maxPrice, callback?, pageToken?) {
    fetch(this.buildNearbyUrl(name, radius, maxPrice, pageToken))
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      AsyncStorage.setItem("current results", JSON.stringify(responseJson), () => {
        this.storeDetails(0, callback);
      });
    })
    .catch((error) => {
      console.log("error is " + error);
    });
  },

  buildDetailUrl(result, resultIndex) {
    console.log("resultIndex = " + resultIndex);
    var jsonResults = JSON.parse(result);
    var placeId = jsonResults.results[resultIndex].place_id;
    var url = "https://maps.googleapis.com/maps/api/place/details/json?" +
      "placeid=" + placeId +
      "&key=" + this.apiKey;
    return url;
  },

  storeDetails(resultIndex, callback?) {
    AsyncStorage.getItem("current results", (err, result) => {
      fetch(this.buildDetailUrl(result, resultIndex))
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.storeData(resultIndex, responseJson, 600, callback);
      })
      .catch((error) => {
        console.log("error is " + error);
      });
    }).catch((error) => {
      console.log("error is " + error);
    });
  },

  //TODO: find out a way to handle the case when there are no photos in a result
  storeData(resultIndex, json, maxHeight, callback?) {
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
