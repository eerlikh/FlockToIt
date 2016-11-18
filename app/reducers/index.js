import { combineReducers } from 'redux'
import * as navigationReducer from './navigation'

export default combineReducers(Object.assign(
  navigationReducer
));
