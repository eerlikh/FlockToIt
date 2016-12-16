import createReducer from '../utils/createReducer'
import * as types from '../actions/types'
import {constants} from '../constants'

export const googleData = createReducer({
    currentDetailsIndices: [0],
    resultsObjects: [],
    currentResultsIndex: 0,
    nextTermInThemeIndex: constants.NO_OF_TERMS_TO_SEARCH_AT_ONCE,
    detailsJson: null,
    detailsData: {
      name: "",
      currentDay: "",
      hours: "",
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

      return {
        ...state,
        resultsObjects: newResultsObjects,
      }
    },

    [types.SET_DETAILS_JSON](state, action) {
      return {
        ...state,
        detailsJson: action.detailsJson,
      }
    },

    [types.SET_DETAILS_DATA](state, action) {
      return {
        ...state,
        detailsData: action.detailsData,
      }
    },

    [types.SET_IMAGE_URLS](state, action) {
      return {
        ...state,
        imageUrls: action.imageUrls,
      }
    },

    [types.SET_THEME](state, action) {

      var resultsObjects = new Array(constants.NO_OF_TERMS_TO_SEARCH_AT_ONCE);
      resultsObjects.fill(null);

      return {
        ...state,
        resultsObjects,
      }
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

      return {
        ...state,
        currentDetailsIndices,
        currentResultsIndex
      }
    },

    [types.RESET_ALL_INDICES](state, action) {

      return {
        ...state,
        currentDetailsIndices: [0],
        currentResultsIndex: 0,
      }
    },

    [types.RESET_CURRENT_INDICES](state, action) {

      var currentDetailsIndices = [
        ...state.currentDetailsIndices.slice(0, state.currentResultsIndex),
        0,
        ...state.currentDetailsIndices.slice(state.currentResultsIndex + 1)
      ]

      return {
        ...state,
        currentDetailsIndices //TODO: rename "currentDetailsIndices to something better"
      }
    },

    [types.ITERATE_NEXT_TERM_IN_THEME_INDEX](state, action) {
      return {
        ...state,
        nextTermInThemeIndex: state.nextTermInThemeIndex + 1,
      }
    },
});
