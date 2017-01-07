import { combineReducers } from 'redux'
import * as googleReducer from './googleFetching'
import * as settingsReducer from './settings'
import * as hacksReducer from './hacks'
import { NavigationReducer } from '@exponent/ex-navigation';

export default combineReducers(Object.assign(
  {navigation: NavigationReducer},
  googleReducer,
  settingsReducer,
  hacksReducer,
));
