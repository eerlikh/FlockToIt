import createReducer from '../utils/createReducer'
import * as types from '../actions/types'

export const settings = createReducer({
    themeName: "chill",
    theme: null,
    radius: 5000,
    maxPrice: 4
  }, {

    [types.SET_THEME](state, action) {
      return {
        ...state,
        themeName: action.themeName,
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
