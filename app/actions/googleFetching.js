import * as types from './types'
import utils from '../utils/googleFetchUtilities';
import { setCurrentTheme } from './settings';
import {constants} from '../constants'

export function fetchAllData() {
  return (dispatch, getState) => {

    var radius = getState().settings.radius;
    var maxPrice = getState().settings.maxPrice;

    console.log(constants);
    dispatch(setCurrentTheme(constants.TEST_THEME));
    var searchTerms = getState().settings.currentTheme;

    for (var i = 0; i < searchTerms.length; i++) {
      dispatch(fetchResults(searchTerms[i], radius, maxPrice,
        constants.LATITUDE, constants.LONGITUDE, constants.API_KEY, i))
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
    fetch(utils.buildDetailsUrl(responseJson, index, constants.API_KEY, constants.LATITUDE, constants.LONGITUDE))
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(setDetailsJson(responseJson));
      dispatch(setDetailsData(utils.extractDetailsData(
        responseJson, constants.LATITUDE, constants.LONGITUDE, constants.API_KEY, index)));
      dispatch(setImageUrls(utils.extractImageURLs(index, responseJson, 600, constants.API_KEY)));
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
