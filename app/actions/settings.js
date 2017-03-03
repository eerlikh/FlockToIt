import * as types from './types'
import { fetchAllData, fetchAllResults } from './googleFetching';
import { Platform, PermissionsAndroid } from 'react-native';
import {constants} from '../constants'

export function setTheme(theme) {
  return (dispatch, getState) => {
    var isInitialTheme = getState().settings.theme === null;

    dispatch({ type: types.SET_THEME, theme});
    dispatch(shuffleCurrentTheme());

    if (!isInitialTheme) {
      dispatch(fetchAllData());
    }
  }
}

export function setCurrentLocation() {
  return (dispatch, getState) => {

    return new Promise(function(resolve, reject) {

      //uncomment the commented out code in this method to test on an emulator

      // if (Platform.OS === 'android') {
      //   dispatch(setLocation(37.422, -122.084));
      //   resolve();
      // } else if (Platform.OS === 'ios') {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            var latitude = JSON.stringify(position.coords.latitude);
            var longitude = JSON.stringify(position.coords.longitude);
            dispatch(setLocation(latitude, longitude));
            resolve();
          },
          (error) => alert(JSON.stringify(error)),
          {enableHighAccuracy: false, timeout: 10000, maximumAge: 0}
        );
      // }
    });
  }
}

function shuffleCurrentTheme() {
  return (dispatch, getState) => {
    var theme = {...getState().settings.theme};
    let counter = theme.searchTerms.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = theme.searchTerms[counter];
        theme.searchTerms[counter] = theme.searchTerms[index];
        theme.searchTerms[index] = temp;
    }

    dispatch(
      {
        type: types.SHUFFLE_CURRENT_THEME,
        theme,
      }
    );
  }
}

export function setRadius(radius) {
  return (dispatch, getState) => {
    var radiusName = "";
    switch (radius) {
      case constants.NEARBY_SEARCH_RADIUS:
        radiusName = "nearby";
        break;
      case constants.MEDIUM_SEARCH_RADIUS:
        radiusName = "medium";
        break;
      case constants.FAR_SEARCH_RADIUS:
        radiusName = "far";
        break;
      case constants.DISTANT_SEARCH_RADIUS:
        radiusName = "distant";
        break;
    }

    dispatch({type: types.SET_RADIUS, radius, radiusName})
    dispatch(fetchAllData());
  }
}

export function setPrice(price) {
  return {
    type: types.SET_PRICE,
    price
  }
}

function setLocation(latitude, longitude) {
  return {
    type: types.SET_LOCATION,
    latitude,
    longitude
  }
}
