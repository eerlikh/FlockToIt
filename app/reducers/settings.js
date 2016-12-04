import createReducer from '../utils/createReducer'
import * as types from '../actions/types'

export const settings = createReducer({
    theme: null,
    radius: 50000,
    maxPrice: 4
  }, {

    [types.SET_THEME](state, action) {
      var object = {
        ...state,
        theme: action.theme,
      }
      return object;
    },

    [types.SET_RADIUS](state, action) {
      var object = {
        ...state,
        radius: action.radius,
      }
      return object;
    },

    [types.SET_PRICE](state, action) {
      var object = {
        ...state,
        maxPrice: action.price,
      }
      return object;
    },

});
