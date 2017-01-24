import * as types from './types'
import { fetchAllData, fetchAllResults } from './googleFetching';

export function setTheme(theme, themeName) {
  return (dispatch, getState) => {
    var isInitialTheme = getState().settings.theme === null;

    dispatch({ type: types.SET_THEME, theme, themeName});
    dispatch(shuffleCurrentTheme());

    if (!isInitialTheme) {
      dispatch(fetchAllData());
    }
  }
}

export function setCurrentLocation() {
  return (dispatch, getState) => {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          var latitude = JSON.stringify(position.coords.latitude);
          var longitude = JSON.stringify(position.coords.longitude);
          dispatch(setLocation(latitude, longitude));
          resolve();
        },
        (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
    });
  }
}

function shuffleCurrentTheme() {
  return (dispatch, getState) => {
    var theme = getState().settings.theme.slice();
    let counter = theme.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = theme[counter];
        theme[counter] = theme[index];
        theme[index] = temp;
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
  return {
    type: types.SET_RADIUS,
    radius
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
