import * as types from './types'
import utils from '../utils/googleFetchUtilities1';

export function fetchAllData(name, radius, maxPrice, callback?, pageToken?) {
  return (dispatch, getState) => {

    //TODO reset the currentIndex to 0 here with a new action creator

    //TODO: pass in these variables from somewhere else (or just make sure they aren't just sitting here)
    var apiKey = "AIzaSyAm_J6lNvrsnHrKMJYXILl6SqgRNCYbm9k";
    var latitude = "38.900271";
    var longitude = "-76.989289";

    fetch(utils.buildNearbyUrl(name, radius, maxPrice, latitude, longitude, apiKey, pageToken))
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(setResultsJson(responseJson));
      dispatch(fetchDetails(responseJson, 0));
    })
    .catch((error) => {
      console.log("error is " + error);
    });
  }
}

export function fetchDetails(responseJson, index) {
  return (dispatch, getState) => {
    //TODO: get this riff-raff out of here
    var apiKey = "AIzaSyAm_J6lNvrsnHrKMJYXILl6SqgRNCYbm9k";
    var latitude = "38.900271";
    var longitude = "-76.989289";
    fetch(utils.buildDetailsUrl(responseJson, index, apiKey, latitude, longitude))
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(setDetailsJson(responseJson));
      dispatch(setDetailsData(utils.extractDetailsData(responseJson, latitude, longitude, apiKey, index)));
      dispatch(setImageUrls(utils.extractImageURLs(index, responseJson, 600, apiKey)));
    })
    .catch((error) => {
      console.log("error is " + error);
    });
  }
}

export function iterateResult() {
  return (dispatch, getState) => {
    dispatch(iterateResultIndex());
    dispatch(fetchDetails(
      getState().googleData.resultsJson,
      getState().googleData.currentResultIndex));
  }
}

function setResultsJson(resultsJson) {
  var action =
    {
      type: types.SET_RESULTS_JSON,
      resultsJson
    };
  return action;
}

function setDetailsJson(detailsJson) {
  var action =
    {
      type: types.SET_DETAILS_JSON,
      detailsJson
    };
  return action;
}

//TODO: remember to set the current index somewhere else as this function will not do it for you
function setDetailsData(detailsData) {
  var action =
    {
      type: types.SET_DETAILS_DATA,
      detailsData,
    };
  return action;
}

function setImageUrls(imageUrls) {
  var action =
    {
      type: types.SET_IMAGE_URLS,
      imageUrls,
    };
  return action;
}

function iterateResultIndex() {
  var action =
    {
      type: types.ITERATE_RESULT_INDEX,
    };
  return action;
}
