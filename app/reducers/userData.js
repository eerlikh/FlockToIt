import createReducer from '../utils/createReducer'
import * as types from '../actions/types'

export const userData = createReducer({
      favorites: [],
  }, {
    [types.ADD_FAVORITE](state, action) {

      var favorites = [
        action.payload,
        ...state.favorites
      ]

      return {
        ...state,
        favorites
      }
    },
  }
);
