import * as types from './types'

export function addFavorite() {
  return (dispatch, getState) => {

    var placeId = getState().googleData.detailsData.placeId;

    getState().userData.favorites.map((location) => {
      if (location.placeId === placeId) {
        throw "location already favorited";
      }
    });

    dispatch({
      type: types.ADD_FAVORITE,
      payload: {
        name: getState().googleData.detailsData.name,
        imageUrl: getState().googleData.imageUrls.url1,
        placeId,
      },
    });
  }
}

export function deleteAllFavorites() {
  return {type: types.DELETE_ALL_FAVORITES};
}

// export function checkAchievements() {
//   return (dispatch, getState) => {
//     var achievements = {
//       masterOfMist: () => {
//
//       }
//     }
//   }
// }
//
// export function batchActionTest(actions) {
//   for (var key in actions) {
//     if (!validation_messages.hasOwnProperty(key)) continue;
//
//     dispatch(actions[key]);
//   }
// }
