import createReducer from '../utils/createReducer'
import * as types from '../actions/types'

export const settings = createReducer({
    theme: null,
    radius: 500,
    maxPrice: 4
  }, {

    [types.SET_THEME](state, action) {
      return {
        ...state,
        theme: action.theme,
      }
    },

    [types.SET_RADIUS](state, action) {
      return {
        ...state,
        radius: action.radius,
      }
    },

    [types.SET_PRICE](state, action) {
      return {
        ...state,
        maxPrice: action.price,
      }
    },

    [types.SET_LOCATION](state, action) {
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
      }
    },

    [types.SHUFFLE_CURRENT_THEME](state, action) {
      return {
        ...state,
        theme: action.theme,
      }
    },

});
