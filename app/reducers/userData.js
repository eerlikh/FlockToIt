import createReducer from '../utils/createReducer'
import * as types from '../actions/types'
import {REHYDRATE} from 'redux-persist/constants'
import getAchievements from '../staticResources/achievements';

export const userData = createReducer({
      favorites: [],
      selectedFavorite: null,
      checkInData: [],
      achievements: [],
      userName: "no name",
  }, {
    [REHYDRATE](state, action) {
      var achievements = getAchievements(); //non-static values associated with different achievements are made correct whenever "update achievements" is called, so there is no need to make this persistant
      var incoming = action.payload.userData
      if (incoming) return {
        ...state,
        ...incoming,
        achievements,
        userName: "no name",
      }
      return state
    },

    [types.ADD_FAVORITE](state, action) {

      var favorites = [
        action.favorite,
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

    [types.DELETE_FAVORITE](state, action) {

      var favorites = JSON.parse(JSON.stringify(state.favorites)); //immutably copy array with JSON trick

      for (var i = 0; i < favorites.length; i++) {
        if (favorites[i].placeId === action.favorite.placeId) {
          favorites = [
            ...favorites.slice(0, i),
            ...favorites.slice(i + 1),
          ]
          break;
        }
      }

      return {
        ...state,
        favorites
      }

    },

    [types.UPDATE_SELECTED_FAVORITE](state, action) {

      return {
        ...state,
        selectedFavorite: action.favorite,
      }

    },

    [types.CHECK_IN](state, action) {

      var favorites = JSON.parse(JSON.stringify(state.favorites)); //copy array with JSON trick
      for (var i = 0; i < favorites.length; i++) {
        if (favorites[i].placeId === action.favorite.placeId) {
          favorites[i].checkIns = favorites[i].checkIns + 1;
          break;
        }
      }

      var checkInData = JSON.parse(JSON.stringify(state.checkInData));
      var noCheckInDataForSearchTermFound = true;
      for (var i = 0; i < checkInData.length; i++) {
        if (checkInData[i].searchTerm === action.favorite.searchTerm) {
          checkInData[i].checkIns = checkInData[i].checkIns + 1;
          noCheckInDataForSearchTermFound = false;
          break;
        }
      }

      if (noCheckInDataForSearchTermFound) {
        checkInData = [
          ...checkInData,
          {
            searchTerm: action.favorite.searchTerm,
            checkIns: 1,
          }
        ]
      }

      return {
        ...state,
        favorites,
        checkInData,
      }
    },

    [types.DELETE_ALL_CHECK_IN_DATA](state, action) {

      return {
        ...state,
        checkInData: [],
      }

    },

    [types.UPDATE_ALL_ACHIEVEMENTS](state, action) {

      return {
        ...state,
        achievements: action.achievements,
      }

    },

    [types.SET_USER_NAME](state, action) {

      return {
        ...state,
        userName: action.userName,
      }

    },

  }
);
