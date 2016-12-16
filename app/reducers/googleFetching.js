import createReducer from '../utils/createReducer'
import * as types from '../actions/types'

export const googleData = createReducer({
    currentResultIndex: 0,
    jsonData: null,
  }, {

    [types.ITERATE_RESULT_INDEX](state, action) {
      var object = {
        ...state,
        currentResultIndex: state.currentResultIndex + 1,
      }
      return object;
    },

    [types.SET_RESULTS](state, action) {
      var object = {
        ...state,
        resultsJson: action.resultsJson,
      }
      return object;
    }
});
