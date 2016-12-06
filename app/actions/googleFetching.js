import * as types from './types'
import utils from '../utils/googleFetchUtilities';
import { setCurrentTheme } from './settings';
import {constants} from '../constants'

export function fetchAllData() {
  return (dispatch, getState) => {

    dispatch(resetIndices());

    var radius = getState().settings.radius;
    var maxPrice = getState().settings.maxPrice;

    if (getState().settings.theme === null) {
      //TODO: make this get the current theme from some default or pre-set value somewhere (change from TEST_THEME)
      dispatch(setCurrentTheme(constants.ADVENTURE_THEME));
    }
    var searchTerms = getState().settings.theme;

    for (var i = 0; i < searchTerms.length; i++) {
      dispatch(fetchResults(searchTerms[i], radius, maxPrice,
        constants.LATITUDE, constants.LONGITUDE, constants.API_KEY, i))
    }
  }
}

export function iterateResult() {
  return (dispatch, getState) => {
    dispatch(iterateResultIndex());
    dispatch(fetchDetails(
      getState().googleData.currentResultsIndex,
      getState().googleData.currentDetailsIndices[getState().googleData.currentResultsIndex]));
  }
}

function fetchResults(name, radius, maxPrice, latitude, longitude, apiKey, index) {
  return (dispatch, getState) => {
    fetch(utils.buildNearbyUrl(name, radius, maxPrice, latitude, longitude, apiKey, index))
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(name + ":");
      console.log(responseJson);
      dispatch(setResultsObject(utils.extractResultsData(responseJson), index));
      if (index === 0) {
        dispatch(fetchDetails(0, 0));
      }
    })
    .catch((error) => {
      console.log("error is " + error);
    });
  }
}

function fetchDetails(resultsIndex, detailsIndex) {
  return (dispatch, getState) => {
    var placeId = getState().googleData.resultsObjects[resultsIndex].placeIds[detailsIndex];
    fetch(utils.buildDetailsUrl(placeId, constants.API_KEY, constants.LATITUDE, constants.LONGITUDE))
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(setDetailsJson(responseJson));
      dispatch(setDetailsData(utils.extractDetailsData(
        responseJson, constants.LATITUDE, constants.LONGITUDE, detailsIndex)));
      dispatch(setImageUrls(utils.extractImageURLs(detailsIndex, responseJson, 600, constants.API_KEY)));
    })
    .catch((error) => {
      console.log("error is " + error);
    });
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

function resetIndices() {
  var action =
    {
      type: types.RESET_INDICES,
    };
  return action;
}
