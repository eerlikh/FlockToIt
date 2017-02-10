import * as types from './types'
import { fetchAllData, fetchAllResults } from './googleFetching';
import { Platform, PermissionsAndroid } from 'react-native';

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

    // requestLocationPermission = async () => {
    //   try {
    //     const granted = await PermissionsAndroid.requestPermission(
    //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //       {
    //         'title': 'Enable location',
    //         'message': 'Location is good \o/',
    //       },
    //     );
    //
    //     if (granted) {
    //       console.log('You can use the location');
    //       // this.getLocation();
    //     } else {
    //       console.log('Location permission denied');
    //     }
    //   } catch (err) {
    //     console.warn(err);
    //   }
    // };
    //
    // requestLocationPermission();

    return new Promise(function(resolve, reject) {

      if (Platform.OS === 'android') {
        dispatch(setLocation(37.422, -122.084));
        resolve();

      //TODO: this doesn't work on android hence the above placeholder code; fix it
      } else if (Platform.OS === 'ios') {
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
      }
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
