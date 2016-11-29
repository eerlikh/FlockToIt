import createReducer from '../utils/createReducer'
import * as types from '../actions/types'

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

});
