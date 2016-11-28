import * as types from './types'
import utils from '../utils/googleFetchUtilities';
import { setCurrentTheme } from './settings';
import * as themes from '../constants/themes'

export function fetchAllData() {
  return (dispatch, getState) => {

    var apiKey = "AIzaSyAm_J6lNvrsnHrKMJYXILl6SqgRNCYbm9k";
    var latitude = "38.900271";
    var longitude = "-76.989289";
    var radius = getState().settings.radius;
    var maxPrice = getState().settings.maxPrice;

    dispatch(setCurrentTheme(themes.TEST_THEME));
    var searchTerms = getState().settings.currentTheme;

    for (var i = 0; i < searchTerms.length; i++) {
      dispatch(fetchResults(searchTerms[i], radius, maxPrice, latitude, longitude, apiKey, i))
    }
  }
}

function fetchResults(name, radius, maxPrice, latitude, longitude, apiKey, index) {
  return (dispatch, getState) => {
    fetch(utils.buildNearbyUrl(name, radius, maxPrice, latitude, longitude, apiKey, index))
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(setResultsObject(responseJson, index));
      if (index === 0) {
        dispatch(fetchDetails(responseJson, 0));
      }
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
    //console.log(getState().googleData.currentDetailsIndices[getState().googleData.currentResultsIndex]);
    dispatch(fetchDetails(
      getState().googleData.resultsObjects[getState().googleData.currentResultsIndex],
      getState().googleData.currentDetailsIndices[getState().googleData.currentResultsIndex]));
  }
}

function setResultsObject(resultsObject, index) {
  var action =
    {
      type: types.SET_RESULTS_OBJECT,
      resultsObject,
      index
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
