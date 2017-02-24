module.exports = {

  // buildNearbyUrl(name, radius, maxPrice, latitude, longitude, apiKey, pageToken?){
  buildNearbyUrl(fetchOptions){
    var string = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    return string.concat(
      (fetchOptions.nextPageToken ? ("pagetoken=" + fetchOptions.nextPageToken + "&") : "") +
      "radius=" + fetchOptions.radius +
      "&name=" + fetchOptions.searchTerm +
      //"&maxprice=" + maxPrice + //FIXME: handle missing price data (searching for it will omit results so dont do it)
      "&location=" + fetchOptions.latitude + "," + fetchOptions.longitude +
      "&key=" + fetchOptions.apiKey
    );
  },

  buildDetailsUrl(placeId, apiKey, latitude, longitude) {
    var url = "https://maps.googleapis.com/maps/api/place/details/json?" +
      "placeid=" + placeId +
      "&key=" + apiKey;
    return url;
  },

  extractResultsData(json, searchTerm) {
    var nextPageToken = json.next_page_token;

    var placeIds = new Array();
    for (var i = 0; i < json.results.length; i++) {
      if (json.results[i].photos) { //this skips results with no images
        placeIds.push(json.results[i].place_id);
      }
    }

    var names = new Array();
    for (var i = 0; i < json.results.length; i++) {
      if (json.results[i].photos) { //this skips results with no images
        names.push(json.results[i].name);
      }
    }

    return {
      searchTerm,
      nextPageToken,
      placeIds,
      names
    }
  },

  extractDetailsData(json, latitude, longitude, resultIndex) {
    var name = json.result.name;

    var d = new Date();
    var currentDay = d.getDay();

    var hours = "hours not listed";
    if (json.result.opening_hours) {
      hours = json.result.opening_hours.weekday_text[currentDay];
    }

    var rating = "no rating"
    if (json.result.rating) {
      rating = "" + json.result.rating;
    }

    var lat1 = json.result.geometry.location.lat;
    var lon1 = json.result.geometry.location.lng;

    var distance = "" + Math.round(this.distance(lat1, lon1, latitude, longitude, 'M') * 100) / 100;

    var placeId = json.result.place_id;

    return {
      name,
      currentDay,
      hours,
      rating,
      distance,
      placeId,
      latitude: lat1,
      longitude: lon1,
    }
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
    if (unit=="m") { dist = dist * 1609.34 }
  	return dist
  },

  extractImageURLs(resultIndex, json, maxHeight, apiKey, callback?) {
    var url1 = "https://placehold.it/400x400";
    var url2 = "https://placehold.it/400x400";
    var url3 = "https://placehold.it/400x400";
    var url4 = "https://placehold.it/400x400";
    var url5 = "https://placehold.it/400x400";

    if (json.result.photos) {

      if (json.result.photos[0]) {
        var photoReference = json.result.photos[0].photo_reference;
        url1 = "https://maps.googleapis.com/maps/api/place/photo?" +
          "photoreference=" + photoReference +
          "&maxheight=" + maxHeight +
          "&key=" + apiKey;
      }
      if (json.result.photos[1]) {
        var photoReference = json.result.photos[1].photo_reference;
        url2 = "https://maps.googleapis.com/maps/api/place/photo?" +
          "photoreference=" + photoReference +
          "&maxheight=" + maxHeight +
          "&key=" + apiKey;
      }
      if (json.result.photos[2]) {
        var photoReference = json.result.photos[2].photo_reference;
        url3 = "https://maps.googleapis.com/maps/api/place/photo?" +
          "photoreference=" + photoReference +
          "&maxheight=" + maxHeight +
          "&key=" + apiKey;
      }
      if (json.result.photos[3]) {
        var photoReference = json.result.photos[3].photo_reference;
        url4 = "https://maps.googleapis.com/maps/api/place/photo?" +
          "photoreference=" + photoReference +
          "&maxheight=" + maxHeight +
          "&key=" + apiKey;
      }
      if (json.result.photos[4]) {
        var photoReference = json.result.photos[4].photo_reference;
        url5 = "https://maps.googleapis.com/maps/api/place/photo?" +
          "photoreference=" + photoReference +
          "&maxheight=" + maxHeight +
          "&key=" + apiKey;
      }
    }

    return {
      url1,
      url2,
      url3,
      url4,
      url5
    }
  },

}
