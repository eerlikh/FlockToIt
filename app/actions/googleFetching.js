//TODO: handle case where there are no results for the first search term displayed (nothing is displayed)

import * as types from './types'
import utils from '../utils/googleFetchUtilities';
import { setTheme, setCurrentLocation } from './settings';
import {constants} from '../constants'

export function fetchAllData() {
  return (dispatch, getState) => {

    dispatch({type: types.RESET_RESULTS_INDEX_AND_CURRENT_DETAILS_INDEX});

    var initialThemeUnset = getState().settings.theme === null;
    if (initialThemeUnset) {
      dispatch(setTheme(constants.INITIAL_THEME));
    }
    var searchTerms = getState().settings.theme;

    dispatch(setCurrentLocation())
    .then(() => {
      var fetchOptions = dispatch(buildFetchOptions());
      for (var i = 0; i < constants.NO_OF_TERMS_TO_SEARCH_AT_ONCE; i++) {
        dispatch(fetchResults({...fetchOptions, searchTerm: searchTerms[i], index: i, message: "fetching initial results"}))
        .then((fetchOptions) => {
          if (fetchOptions.index === 0) {
            dispatch(fetchDetails(0, 0, fetchOptions.latitude, fetchOptions.longitude));
          }
        });
      }
    });
  }
}

export function iterateResult() {
  return (dispatch, getState) => {

    //handle case where there are no more results for all search terms
    if (getState().googleData.resultsObjects.length === 0) {
      dispatch({ type: types.RAN_OUT_OF_RESULTS });
    } else {
      dispatch({type: types.ITERATE_RESULT_AND_DETAILS_INDICES});

      var resultsIndex = getState().googleData.resultsIndex;
      var currentDetailsIndex = getState().googleData.detailsIndices[resultsIndex];
      var resultObjectLength = getState().googleData.resultsObjects[resultsIndex].names.length;
      var nextPageToken = getState().googleData.resultsObjects[resultsIndex].nextPageToken;
      var nextSearchTerm = getState().settings.theme[getState().googleData.nextTermInThemeIndex];

      //checks if there is a least 1 more page of results and handles the different cases
      if (currentDetailsIndex >= resultObjectLength) {
        if (nextPageToken) {
          dispatch(fetchNewPage(resultsIndex, nextPageToken));
        } else if (nextSearchTerm) {
          dispatch(fetchWithNewTerm(resultsIndex));
        } else {
          dispatch(removeResultsObject(resultsIndex));
        }
      } else {
        dispatch(fetchDetails(resultsIndex, currentDetailsIndex,
          getState().settings.latitude, getState().settings.longitude, null));
      }
    }
  }
}

function fetchNewPage(resultsIndex, nextPageToken) {
  return (dispatch, getState) => {
    dispatch({type: types.RESET_CURRENT_DETAILS_INDEX});

    var fetchOptions = {
      ...dispatch(buildFetchOptions()),
      searchTerm: getState().settings.theme[resultsIndex],
      index: resultsIndex,
      nextPageToken,
      message: "fetching results for new page",
    }

    dispatch(fetchResults(fetchOptions)).then((fetchOptions) => {
      dispatch(fetchDetails(fetchOptions.index, 0, fetchOptions.latitude,
        fetchOptions.longitude));
    });
  }
}

function fetchWithNewTerm(resultsIndex) {
  return (dispatch, getState) => {
    dispatch({type: types.RESET_CURRENT_DETAILS_INDEX});
    var nextSearchTerm = getState().settings.theme[getState().googleData.nextTermInThemeIndex];

    var fetchOptions = {
      ...dispatch(buildFetchOptions()),
      searchTerm: nextSearchTerm,
      index: resultsIndex,
      message: "fetching results for new term",
    }

    dispatch(fetchResults(fetchOptions)).then((fetchOptions) => {
      dispatch(fetchDetails(fetchOptions.index, 0, fetchOptions.latitude,
        fetchOptions.longitude));
    });
    dispatch({type: types.ITERATE_THEME_INDEX});
  }
}

function removeResultsObject(resultsIndex) {
  return (dispatch, getState) => {
    dispatch({ type: types.REMOVE_RESULTS_OBJECT, resultsIndex });

    //handle case where there are no more results objects
    if (getState().googleData.resultsObjects.length === 0) {
      dispatch({ type: types.RAN_OUT_OF_RESULTS });
    } else {
      dispatch({ type: types.ITERATE_CURRENT_DETAILS_INDEX });

      var resultsIndex = getState().googleData.resultsIndex;
      var currentDetailsIndex = getState().googleData.detailsIndices[resultsIndex];
      dispatch(fetchDetails(resultsIndex, currentDetailsIndex,
        getState().settings.latitude, getState().settings.longitude, null));
    }
  }
}


function fetchResults(fetchOptions) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      // console.log(utils.buildNearbyUrl(fetchOptions));
      fetch(utils.buildNearbyUrl(fetchOptions))
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(fetchOptions.searchTerm + ":");
        console.log(responseJson);
        dispatch(setResultsObject(utils.extractResultsData(responseJson), fetchOptions.index, fetchOptions.message));
        resolve(fetchOptions);
      })
      .catch((error) => {
        console.log("error is " + error);
      });
    });
  }
}

function fetchDetails(resultsIndex, currentDetailsIndex, latitude, longitude) {
  return (dispatch, getState) => {
    var placeId = getState().googleData.resultsObjects[resultsIndex].placeIds[currentDetailsIndex];
    fetch(utils.buildDetailsUrl(placeId, constants.API_KEY, latitude, longitude))
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(setDetailsJson(responseJson));
      dispatch(setDetailsData(utils.extractDetailsData(
        responseJson, latitude, longitude, currentDetailsIndex)));
      dispatch(setImageUrls(utils.extractImageURLs(currentDetailsIndex, responseJson, 600, constants.API_KEY)));
    })
    .catch((error) => {
      console.log("error is " + error);
    });
  }
}

function buildFetchOptions() {
  return (dispatch, getState) => {
    var latitude = getState().settings.latitude;
    var longitude = getState().settings.longitude;
    var radius = getState().settings.radius;
    var maxPrice = getState().settings.maxPrice;
    return {
      searchTerm: null,
      radius,
      maxPrice,
      latitude,
      longitude,
      apiKey: constants.API_KEY,
      index: null,
      nextPageToken: null,
    }
  }
}

function setResultsObject(resultsObject, index, message) {
  return {
    type: types.SET_RESULTS_OBJECT,
    resultsObject,
    index,
    message
  }
}

function setDetailsJson(detailsObject) {
  return {
    type: types.SET_DETAILS_OBJECT,
    detailsObject,
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
