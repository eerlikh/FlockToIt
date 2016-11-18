import { combineReducers } from 'redux'
import * as navigationReducer from './navigation'
import * as googleReducer from './googleFetching'

export default combineReducers(Object.assign(
  navigationReducer,
  googleReducer
));
