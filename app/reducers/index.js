import { combineReducers } from 'redux'
import * as navigationReducer from './navigation'
import * as googleReducer from './googleFetching'
import * as settingsReducer from './settings'

export default combineReducers(Object.assign(
  navigationReducer,
  googleReducer,
  settingsReducer
));
