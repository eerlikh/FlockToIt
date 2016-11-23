import createReducer from '../utils/createReducer'
import * as types from '../actions/types'

export const googleData = createReducer({
    currentResultIndex: 0,
    resultsJson: null,
    detailsJson: null,
    detailsData: {
      name: "",
      currentDay: "",
      openingTime: "",
      closingTime: "",
      rating: "",
      distance: "",
    },
    imageUrls: {
      url1: "https://placehold.it/400x400",
      url2: "https://placehold.it/400x400",
      url3: "https://placehold.it/400x400",
      url4: "https://placehold.it/400x400",
    }

  }, {

    [types.SET_RESULTS_JSON](state, action) {
      var object = {
        ...state,
        resultsJson: action.resultsJson,
      }
      return object;
    },

    [types.SET_DETAILS_JSON](state, action) {
      var object = {
        ...state,
        detailsJson: action.detailsJson,
      }
      return object;
    },

    [types.SET_DETAILS_DATA](state, action) {
      var object = {
        ...state,
        detailsData: action.detailsData,
      }
      return object;
    },

    [types.SET_IMAGE_URLS](state, action) {
      var object = {
        ...state,
        imageUrls: action.imageUrls,
      }
      return object;
    },

    [types.ITERATE_RESULT_INDEX](state, action) {
      var object = {
        ...state,
        currentResultIndex: state.currentResultIndex + 1,
      }
      return object;
    }
});
