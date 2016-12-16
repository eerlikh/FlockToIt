import * as types from './types'
import utils from '../utils/googleFetchUtilities';
import { setCurrentTheme, setCurrentLocation } from './settings';
import {constants} from '../constants'

export function fetchAllData() {
  return (dispatch, getState) => {

    dispatch(resetAllIndices());
    dispatch(setCurrentLocation());
    //fetchAllResults is called from within setCurrentLocation
    //TODO: pass fetchAllResults as a callback to setCurrentLoation to make the above note unnecessary
  }
}

export function fetchAllResults() {
  return (dispatch, getState) => {

    var latitude = getState().settings.latitude;
    var longitude = getState().settings.longitude;
    var radius = getState().settings.radius;
    var maxPrice = getState().settings.maxPrice;

    if (getState().settings.theme === null) {
      //TODO: make this get the current theme from some default or pre-set value somewhere
      dispatch(setCurrentTheme(constants.STARTING_THEME));
    }
    var searchTerms = getState().settings.theme;

    for (var i = 0; i < constants.NO_OF_TERMS_TO_SEARCH_AT_ONCE; i++) {
      dispatch(fetchResults(searchTerms[i], radius, maxPrice,
        latitude, longitude, constants.API_KEY, i, true, false))
    }
  }
}

export function iterateResult() {
  return (dispatch, getState) => {
    dispatch(iterateResultIndex());

    //checks if the current list of results is finished
    //TODO: extract the below chunk of code
    var currentResultsIndex = getState().googleData.currentResultsIndex;
    var currentDetailsIndex = getState().googleData.currentDetailsIndices[currentResultsIndex];
    var detailsListLength = getState().googleData.resultsObjects[currentResultsIndex].names.length;
    var nextPageToken = getState().googleData.resultsObjects[currentResultsIndex].nextPageToken;
    if (currentDetailsIndex >= detailsListLength) {
      dispatch(resetCurrentIndices());
      if (nextPageToken) {
        dispatch(fetchNewPage(currentResultsIndex, nextPageToken));
      } else {
        dispatch(fetchWithNewTerm());
      }
    } else {
      var latitude = getState().settings.latitude;
      var longitude = getState().settings.longitude;
      dispatch(fetchDetails(
        getState().googleData.currentResultsIndex,
        getState().googleData.currentDetailsIndices[getState().googleData.currentResultsIndex],
        latitude, longitude, null)
      );
    }
  }
}

function fetchNewPage(resultsObjectsIndex, nextPageToken, callback?) {
  return (dispatch, getState) => {
    var latitude = getState().settings.latitude;
    var longitude = getState().settings.longitude;
    var radius = getState().settings.radius;
    var maxPrice = getState().settings.maxPrice;
    var searchTerms = getState().settings.theme;

    dispatch(fetchResults(searchTerms[resultsObjectsIndex], radius, maxPrice,
      latitude, longitude, constants.API_KEY, resultsObjectsIndex, false, false, nextPageToken));
  }
}

function fetchWithNewTerm(callback) {
  return (dispatch, getState) => {
    var nextTermInThemeIndex = getState().googleData.nextTermInThemeIndex;
    var nextTerm = getState().settings.theme[nextTermInThemeIndex];

    if (!nextTerm) {
      dispatch(removeCurrentResultsObject(callback));
    } else {
      var latitude = getState().settings.latitude;
      var longitude = getState().settings.longitude;
      var radius = getState().settings.radius;
      var maxPrice = getState().settings.maxPrice;
      var currentResultsIndex = getState().googleData.currentResultsIndex;

      dispatch(fetchResults(nextTerm, radius, maxPrice,
        latitude, longitude, constants.API_KEY, currentResultsIndex, false, true));
      dispatch(iterateNextTermInThemeIndex());
    }
  }
}

function removeCurrentResultsObject(callback?) {
  //TODO: write the removeCurrentResultsObject function
}

//TODO: put all of these fuggin parameters into an options object, ya digus!
function fetchResults(name, radius, maxPrice, latitude, longitude, apiKey, index,
  fetchFirstDetails, fetchWithNewTerm, nextPagetoken?) {
  return (dispatch, getState) => {
    fetch(utils.buildNearbyUrl(name, radius, maxPrice, latitude, longitude, apiKey, nextPagetoken))
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(name + ":");
      console.log(responseJson);
      dispatch(setResultsObject(utils.extractResultsData(responseJson), index));
      if (fetchFirstDetails) {
        dispatch(fetchDetails(0, 0, latitude, longitude, "fetching first details"));
      }
      if (fetchWithNewTerm) {
        dispatch(fetchDetails(index, 0, latitude, longitude, "fetching details with new term"));
      }
    })
    .catch((error) => {
      console.log("error is " + error);
    });
  }
}

function fetchDetails(resultsIndex, detailsIndex, latitude, longitude, message) {
  return (dispatch, getState) => {
    var placeId = getState().googleData.resultsObjects[resultsIndex].placeIds[detailsIndex];
    fetch(utils.buildDetailsUrl(placeId, constants.API_KEY, latitude, longitude))
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(setDetailsJson(responseJson, message));
      dispatch(setDetailsData(utils.extractDetailsData(
        responseJson, latitude, longitude, detailsIndex), message));
      dispatch(setImageUrls(utils.extractImageURLs(detailsIndex, responseJson, 600, constants.API_KEY)));
    })
    .catch((error) => {
      console.log("error is " + error);
    });
  }
}

function setResultsObject(resultsObject, index) {
  return {
    type: types.SET_RESULTS_OBJECT,
    resultsObject,
    index
  }
}

function setDetailsJson(detailsJson, message) {
  return {
    type: types.SET_DETAILS_JSON,
    detailsJson,
    message
  }
}

function setDetailsData(detailsData) {
  return {
    type: types.SET_DETAILS_DATA,
    detailsData,
  }
}

function setImageUrls(imageUrls) {
  return {
    type: types.SET_IMAGE_URLS,
    imageUrls,
  }
}

function iterateResultIndex() {
  return {
    type: types.ITERATE_RESULT_INDEX,
  }
}

function resetAllIndices() {
  return {
    type: types.RESET_ALL_INDICES,
  }
}

//TODO: change "results" to something more speicifc like "initialResults" or "firstFetchList" throughout the app
function resetCurrentIndices() {
  return {
    type: types.RESET_CURRENT_INDICES,
  }
}

function iterateNextTermInThemeIndex() {
  return {
    type: types.ITERATE_NEXT_TERM_IN_THEME_INDEX,
  }
}
