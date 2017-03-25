import * as types from './types'
import {constants} from '../constants';
import utils from '../utils/googleFetchUtilities';

export function addFavorite() {
  return (dispatch, getState) => {

    var placeId = getState().googleData.detailsData.placeId;
    getState().userData.favorites.map((location) => {
      if (location.placeId === placeId) {
        throw "location already favorited";
      }
    });

    var searchTerm =
      getState().googleData.resultsObjects[getState().googleData.resultsIndex].searchTerm;

    dispatch({
      type: types.ADD_FAVORITE,
      favorite: {
        name: getState().googleData.detailsData.name,
        imageUrl: getState().googleData.imageUrls.url1,
        placeId,
        searchTerm,
        checkIns: 0,
        rating: getState().googleData.detailsData.rating,
        relatedAchievements: getState().googleData.detailsData.relatedAchievements,
        relatedThemes: getState().googleData.detailsData.relatedThemes,
        hours: getState().googleData.detailsData.hours,
        distance: getState().googleData.detailsData.distance,
        latitude: getState().googleData.detailsData.latitude,
        longitude: getState().googleData.detailsData.longitude,
      },
    });
  }
}

export function deleteAllFavorites() {
  return {type: types.DELETE_ALL_FAVORITES};
}

export function deleteFavorite(favorite) {
  return {
    type: types.DELETE_FAVORITE,
    favorite
  };
}

export function updateSelectedFavorite(favorite) {
  return {
    type: types.UPDATE_SELECTED_FAVORITE,
    favorite,
  };
}

export function checkIn(favorite) {
  return (dispatch, getState) => {

    dispatch(checkProximity(favorite.latitude, favorite.longitude)).then((userIsCloseEnough) => {
      if (userIsCloseEnough) {
        dispatch({type: types.CHECK_IN, favorite});
        dispatch(updateAllAchievements());
      } else {
        alert("You are not close enough to this location to check in.");
      }
    });

  }
}

export function updateAllAchievements() {
  return (dispatch, getState) => {
    var achievements = JSON.parse(JSON.stringify(getState().userData.achievements));
    for (var i = 0; i < achievements.length; i++) {
      achievements[i] = dispatch(updateAchievement(achievements[i]));
    }

    dispatch({
      type: types.UPDATE_ALL_ACHIEVEMENTS,
      achievements,
    });
  }
}

export function setUserName(userName) {
  return {
    type: types.SET_USER_NAME,
    userName,
  }
}

function updateAchievement(achievement) {
  return (dispatch, getState) => {

    if (achievement.earned === true) {
      return {
        ...achievement,
      }
    }

    switch (achievement.type) {
      case "single term or multiple equally weighted terms":
        return dispatch(updateSingleOrMultipleEquallyWeightedTerms(achievement));
      case "differently weighted terms":
        return dispatch(updateDifferentlyWeightedTerms(achievement));
    }

  }
}

function updateSingleOrMultipleEquallyWeightedTerms(achievement) {
  return (dispatch, getState) => {
    var earned = false;
    var progress = 0;
    var checkInData = getState().userData.checkInData;

    for (var i = 0; i < achievement.searchTerms.length; i++) {
      for (var x = 0; x < checkInData.length; x++) {
        if (achievement.searchTerms[i] === checkInData[x].searchTerm) {
          progress += checkInData[x].checkIns;
        }
      }
    }

    if (achievement.threshold === progress) {
      earned = true;
    }

    return {
      ...achievement,
      earned,
      progress,
    }
  }
}

function updateDifferentlyWeightedTerms(achievement) {
  console.log(achievement.name);
  return (dispatch, getState) => {
    var earned = false;
    var progress = 0;
    var searchTerms = achievement.searchTerms;
    var checkInData = getState().userData.checkInData;

    for (var i = 0; i < searchTerms.length; i++) {
      searchTerms[i].progress = 0;
      for (var x = 0; x < checkInData.length; x++) {
        if (searchTerms[i].searchTerm === checkInData[x].searchTerm) {
          searchTerms[i].progress = checkInData[x].checkIns;
         }
      }
    }

    for (var i = 0; i < searchTerms.length; i++) {
      if (searchTerms[i].progress >= searchTerms[i].threshold) {
        progress += searchTerms[i].threshold;
      } else {
        progress += searchTerms[i].progress
      }
    }
    if (progress >= achievement.threshold) {
      earned = true
    }

    return {
      ...achievement,
      earned,
      progress,
      searchTerms,
    }

  }
}

function checkProximity(favoriteLatitude, favoriteLongitude) {
  return (dispatch, getState) => {

    return new Promise(function(resolve, reject) {

      navigator.geolocation.getCurrentPosition(
        (position) => {
          var userLatitude = JSON.stringify(position.coords.latitude);
          var userLongitude = JSON.stringify(position.coords.longitude);

        var distance = utils.distance(userLatitude, userLongitude, favoriteLatitude, favoriteLongitude, "m");

          var userIsCloseEnough = distance <= constants.MAXIMUM_CHECKIN_DISTANCE;

          resolve(userIsCloseEnough);
        },
        (error) => {alert(JSON.stringify(error)); reject();},
        {enableHighAccuracy: false, timeout: 10000, maximumAge: 0}
      );
    });
  }
}
