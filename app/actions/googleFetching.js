import * as types from './types'
import utils from '../utils/googleFetchUtilities';
import { setTheme, setCurrentLocation, promiseTest } from './settings';
import {constants} from '../constants'

export function fetchAllData() {
  return (dispatch, getState) => {

    dispatch({type: types.RESET_RESULTS_INDEX_AND_CURRENT_DETAILS_INDEX});
    dispatch(setCurrentLocation())
    .then(() => {
      var isInitialTheme = getState().settings.theme === null;
      if (isInitialTheme) {
        dispatch(setTheme(constants.INITIAL_THEME));
      }

      var fetchOptions = dispatch(buildFetchOptions());
      var searchTerms = getState().settings.theme;
      for (var i = 0; i < constants.NO_OF_TERMS_TO_SEARCH_AT_ONCE; i++) {
        dispatch(fetchResults({...fetchOptions, searchTerm: searchTerms[i], index: i})).then((fetchOptions) => {
          if (fetchOptions.index === 0) {
            dispatch(fetchDetails(0, 0, fetchOptions.latitude, fetchOptions.longitude, "fetching first details"));
          }
        });
      }
    });
  }
}

export function iterateResult() {
  return (dispatch, getState) => {

    //handle if there are no more results at all
    if (getState().googleData.resultsObjects.length === 0) {
      dispatch({ type: types.RAN_OUT_OF_RESULTS });
    } else {
      dispatch({type: types.ITERATE_RESULT_AND_DETAILS_INDICES});

      var resultsIndex = getState().googleData.resultsIndex;
      var currentDetailsIndex = getState().googleData.detailsIndices[resultsIndex];
      var resultObjectLength = getState().googleData.resultsObjects[resultsIndex].names.length;
      var nextPageToken = getState().googleData.resultsObjects[resultsIndex].nextPageToken;
      var nextSearchTerm = getState().settings.theme[getState().googleData.nextTermInThemeIndex];

      //check if only the current list of results is finished and handle various sub-cases
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
    }

    dispatch(fetchResults(fetchOptions)).then((fetchOptions) => {
      dispatch(fetchDetails(fetchOptions.index, 0, fetchOptions.latitude,
        fetchOptions.longitude, "fetching details for new page"));
    });
  }
}

function fetchWithNewTerm(resultsIndex) {
  return (dispatch, getState) => {
    dispatch({type: types.RESET_CURRENT_DETAILS_INDEX});

    var fetchOptions = {
      ...dispatch(buildFetchOptions()),
      searchTerm,
      index: resultsIndex,
    }

    dispatch(fetchResults(fetchOptions)).then((fetchOptions) => {
      dispatch(fetchDetails(fetchOptions.index, 0, fetchOptions.latitude,
        fetchOptions.longitude, "fetching details with new term"));
    });
    dispatch({type: types.ITERATE_THEME_INDEX});
  }
}

function removeResultsObject(resultsIndex) {
  return (dispatch, getState) => {
    dispatch({ type: types.REMOVE_RESULTS_OBJECT, resultsIndex });

    //handle if there are no more results objects
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
        dispatch(setResultsObject(utils.extractResultsData(responseJson), fetchOptions.index));
        resolve(fetchOptions);
      })
      .catch((error) => {
        console.log("error is " + error);
      });
    });
  }
}

function fetchDetails(resultsIndex, currentDetailsIndex, latitude, longitude, message) {
  return (dispatch, getState) => {
    var placeId = getState().googleData.resultsObjects[resultsIndex].placeIds[currentDetailsIndex];
    fetch(utils.buildDetailsUrl(placeId, constants.API_KEY, latitude, longitude))
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(setDetailsJson(responseJson, message));
      dispatch(setDetailsData(utils.extractDetailsData(
        responseJson, latitude, longitude, currentDetailsIndex), message));
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

function setResultsObject(resultsObject, index) {
  return {
    type: types.SET_RESULTS_OBJECT,
    resultsObject,
    index
  }
}

//TODO: it doesn't make any sense to put a message parameter here, move it to setResultsObject
function setDetailsJson(detailsObject, message) {
  return {
    type: types.SET_DETAILS_OBJECT,
    detailsObject,
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
