import { combineReducers } from 'redux'
import * as googleDataReducer from './googleFetching'
import * as settingsReducer from './settings'
import * as hacksReducer from './hacks'
import * as userDataReducer from './userData'
import { NavigationReducer } from '@exponent/ex-navigation';

export default combineReducers(Object.assign(
  {navigation: NavigationReducer},
  googleDataReducer,
  settingsReducer,
  hacksReducer,
  userDataReducer,
));
