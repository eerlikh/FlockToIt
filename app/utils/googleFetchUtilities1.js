//"maxPrice" is an integer from 0 to 4
//"pageToken" is an optional parameter that must be taken from the last results

module.exports = {

  buildNearbyUrl(name, radius, maxPrice, latitude, longitude, apiKey, pageToken?){
    var string = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    return string.concat(
      "radius=" + radius +
      "&name=" + name.replace(/\s/g, '+') +
      "&maxprice=" + maxPrice +
      "&location=" + latitude + "," + longitude + //TODO: make this actually use geolocation
      "&key=" + apiKey
      //TODO: add pageToken once you figure out how that should work
    );
  },

  buildDetailsUrl(resultsJson, resultIndex, apiKey, latitude, longitude) {
    var placeId = resultsJson.results[resultIndex].place_id;
    var url = "https://maps.googleapis.com/maps/api/place/details/json?" +
      "placeid=" + placeId +
      "&key=" + apiKey;
    return url;
  },

  extractDetailsData(json, apiKey, latitude, longitude, resultIndex) {
    var name = json.result.name;

    var d = new Date();
    var currentDay = d.getDay();

    var openingTime = json.result.opening_hours.periods[currentDay].open.time + "";
    openingTime = this.convertTime(openingTime);

    var closingTime = json.result.opening_hours.periods[currentDay].close.time + "";
    closingTime = this.convertTime(closingTime);

    var rating = "" + json.result.rating;

    var lat1 = json.result.geometry.location.lat;
    var lon1 = json.result.geometry.location.lng;

    var distance = "" + Math.round(this.distance(lat1, lon1, latitude, longitude, 'M') * 100) / 100;

    var object = {
      name,
      currentDay,
      openingTime,
      closingTime,
      rating,
      distance,
    };

    return object
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
  extractImageURLs(resultIndex, json, maxHeight, apiKey, callback?) {
    var photoReference = json.result.photos[0].photo_reference;
    var url1 = "https://maps.googleapis.com/maps/api/place/photo?" +
      "photoreference=" + photoReference +
      "&maxheight=" + maxHeight +
      "&key=" + apiKey;
    photoReference = json.result.photos[1].photo_reference;
    var url2 = "https://maps.googleapis.com/maps/api/place/photo?" +
      "photoreference=" + photoReference +
      "&maxheight=" + maxHeight +
      "&key=" + apiKey;
    photoReference = json.result.photos[2].photo_reference;
    var url3 = "https://maps.googleapis.com/maps/api/place/photo?" +
      "photoreference=" + photoReference +
      "&maxheight=" + maxHeight +
      "&key=" + apiKey;
    photoReference = json.result.photos[3].photo_reference;
    var url4 = "https://maps.googleapis.com/maps/api/place/photo?" +
      "photoreference=" + photoReference +
      "&maxheight=" + maxHeight +
      "&key=" + apiKey;

    var object = {
      url1,
      url2,
      url3,
      url4
    }

    return object;
  },

  //TODO write this function and then use it to set the latitude and longitude
  // setCurrentLocation() {
  //   the following code is copy pasted from a different part of project and will
  //   not work as written:
  //
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       var latitude = JSON.stringify(position.coords.latitude);
  //       this.latitude = latitude;
  //       var longitude = JSON.stringify(position.coords.longitude);
  //       this.longitude = longitude;
  //     },
  //     (error) => alert(JSON.stringify(error)),
  //     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  //   );
  // }

}
