import * as types from './types'
import ReactNative from 'react-native'
const { NavigationExperimental } = ReactNative

export function navigateForward(navigatorType) {
  return {
    type: types.NAVIGATION_FORWARD,
    navigatorType
  }
}

export function navigateBack(navigatorType) {
  return {
    type: types.NAVIGATION_BACK,
    navigatorType
  }
}

export function push(navigatorType, route) {
  return {
    type: types.PUSH,
    navigatorType,
    route
  }
}

export function pop(navigatorType) {
  return {
    type: types.POP,
    navigatorType,
  }
}
