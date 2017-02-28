import createReducer from '../utils/createReducer'
import * as types from '../actions/types'

export const hacks = createReducer({
      stackIsReset: 0,
  }, {
    [types.ATTEMPT_RESET_STACK](state, action) {
      return {
        ...state,
        stackIsReset: 1,
      }
    },
  }
);
