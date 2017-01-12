import * as types from './types'

export function addFavorite() {
  return (dispatch, getState) => {
    dispatch({
      type: types.ADD_FAVORITE,
      payload: {
        name: getState().googleData.detailsData.name,
        imageUrl: getState().googleData.imageUrls.url1,
      },
    });
  }
}
