import createReducer from '../utils/createReducer'
import * as types from '../actions/types'


export const userData = createReducer({
      favorites: [],
  }, {
    //TODO: handle case where user adds a favorite that is already on the list
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

    [types.DELETE_ALL_FAVORITES](state, action) {

      return {
        ...state,
        favorites: []
      }
      
    },
  }
);
