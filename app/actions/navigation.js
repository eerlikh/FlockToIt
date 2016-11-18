//TODO: figure out the syntax so that these functions look cleaner

import * as types from './types'
import ReactNative from 'react-native'
const { NavigationExperimental } = ReactNative

//TODO: (optional) refactor these navigation action creators so that the "navigatorType" is a constant
export function navigateForward(navigatorType) {
  var action =
    {
      type: types.NAVIGATION_FORWARD,
      navigatorType
    };
  return action;
}

export function navigateBack(navigatorType) {
  var action =
    {
      type: types.NAVIGATION_BACK,
      navigatorType
    };
  return action;
}

export function push(navigatorType, route) {
  var action =
    {
      type: types.PUSH,
      navigatorType,
      route
    };
  return action;
}

export function pop(navigatorType) {
  var action =
    {
      type: types.POP,
      navigatorType,
    };
  return action;
}
