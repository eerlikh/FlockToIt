import createReducer from '../utils/createReducer'
import * as types from '../actions/types'
import {constants} from '../constants'

export const googleData = createReducer({
    detailsIndices: [0],
    resultsObjects: [],
    resultsIndex: 0,
    nextTermInThemeIndex: constants.NO_OF_TERMS_TO_SEARCH_AT_ONCE,
    detailsObject: null,
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

    [types.SET_DETAILS_OBJECT](state, action) {
      return {
        ...state,
        detailsObject: action.detailsObject,
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

    [types.ITERATE_RESULT_AND_DETAILS_INDICES](state, action) {

      if (state.resultsObjects.length === 0) {
        return {...state}
      }

      var resultsIndex = null;
      if (state.resultsIndex === state.resultsObjects.length - 1) {
        resultsIndex = 0;
      } else {
        resultsIndex = state.resultsIndex + 1;
      }

      var newDetailsIndex = null;
      var currentDetailsIndex = state.detailsIndices[resultsIndex];
      if (!currentDetailsIndex && (currentDetailsIndex != 0)) {
        newDetailsIndex = 0;
      } else {
        newDetailsIndex = currentDetailsIndex + 1;
      }

      var detailsIndices = [
        ...state.detailsIndices.slice(0, resultsIndex),
        newDetailsIndex,
        ...state.detailsIndices.slice(resultsIndex + 1)
      ]

      return {
        ...state,
        detailsIndices,
        resultsIndex
      }
    },

    [types.ITERATE_CURRENT_DETAILS_INDEX](state, action) {
      var resultsIndex = state.resultsIndex;
      var newDetailsIndex = null;
      var currentDetailsIndex = state.detailsIndices[resultsIndex];
      if (!currentDetailsIndex && (currentDetailsIndex != 0)) {
        newDetailsIndex = 0;
      } else {
        newDetailsIndex = currentDetailsIndex + 1;
      }

      var detailsIndices = [
        ...state.detailsIndices.slice(0, resultsIndex),
        newDetailsIndex,
        ...state.detailsIndices.slice(resultsIndex + 1)
      ]

      return {
        ...state,
        detailsIndices,
      }
    },

    //TODO: handle case where it removes multiple result objects in a row
    [types.REMOVE_RESULTS_OBJECT](state, action) {

      var resultsObjects = [
        ...state.resultsObjects.slice(0, action.index),
        ...state.resultsObjects.slice(action.index + 1)
      ]

      var resultsIndex = state.resultsIndex;
      if (state.resultsIndex === state.resultsObjects.length - 1) {
        resultsIndex = 0;
      }

      var detailsIndices = [
        ...state.detailsIndices.slice(0, action.index),
        ...state.detailsIndices.slice(action.index + 1)
      ]

      return {
        ...state,
        resultsObjects,
        detailsIndices,
        resultsIndex,
      }
    },

    [types.RESET_RESULTS_INDEX_AND_CURRENT_DETAILS_INDEX](state, action) {

      return {
        ...state,
        detailsIndices: [0],
        resultsIndex: 0,
      }
    },

    [types.RESET_CURRENT_DETAILS_INDEX](state, action) {

      var detailsIndices = [
        ...state.detailsIndices.slice(0, state.resultsIndex),
        0,
        ...state.detailsIndices.slice(state.resultsIndex + 1)
      ]

      return {
        ...state,
        detailsIndices
      }
    },

    [types.ITERATE_THEME_INDEX](state, action) {
      return {
        ...state,
        nextTermInThemeIndex: state.nextTermInThemeIndex + 1,
      }
    },

    [types.RAN_OUT_OF_RESULTS](state, action) {
      return {
        ...state,
        detailsObject: null,
        detailsData: {
          name: "No More Results",
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
      }
    },

});
