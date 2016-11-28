import createReducer from '../utils/createReducer'
import * as types from '../actions/types'

export const googleData = createReducer({
    currentDetailsIndices: [0],
    resultsObjects: [],
    currentResultsIndex: 0,
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

    [types.SET_RESULTS_OBJECT](state, action) {

      var newResultsObjects = state.resultsObjects.slice();

      newResultsObjects[action.index] = action.resultsObject;

      var object = {
        ...state,
        resultsObjects: newResultsObjects,
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

    [types.SET_CURRENT_THEME](state, action) {

      var resultsObjects = new Array(action.theme.length);
      resultsObjects.fill(null);

      var object = {
        ...state,
        resultsObjects,
      }
      return object;
    },

    [types.ITERATE_RESULT_INDEX](state, action) {

      var currentResultsIndex = null;
      if (state.currentResultsIndex === state.resultsObjects.length - 1) {
        currentResultsIndex = 0;
      } else {
        currentResultsIndex = state.currentResultsIndex + 1;
      }

      var newDetailsIndex = null;
      var currentDetailsIndex = state.currentDetailsIndices[currentResultsIndex];
      if (!currentDetailsIndex && (currentDetailsIndex != 0)) {
        newDetailsIndex = 0;
      } else {
        newDetailsIndex = currentDetailsIndex + 1;
      }

      var currentDetailsIndices = [
        ...state.currentDetailsIndices.slice(0, currentResultsIndex),
        newDetailsIndex,
        ...state.currentDetailsIndices.slice(currentResultsIndex + 1)
      ]

      var object = {
        ...state,
        currentDetailsIndices,
        currentResultsIndex
      }
      return object;
    }
});
