import createReducer from '../utils/createReducer'
import * as types from '../actions/types'
//import * as themes from '../constants/themes'

// var apiKey = "AIzaSyAm_J6lNvrsnHrKMJYXILl6SqgRNCYbm9k";
// var latitude = "38.900271";
// var longitude = "-76.989289";

export const settings = createReducer({
    currentTheme: null,
    radius: 50000,
    maxPrice: 4
  }, {

    [types.SET_CURRENT_THEME](state, action) {
      var object = {
        ...state,
        currentTheme: action.theme,
      }
      return object;
    },

    // themes.TEST_THEME
});
