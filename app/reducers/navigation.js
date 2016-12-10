import ReactNative from 'react-native';
const { NavigationExperimental, StatusBar} = ReactNative;
import createReducer from '../utils/createReducer'
import * as types from '../actions/types'
import { constants } from '../constants'

const {
  LOGIN_NAVIGATOR,
  MAIN_NAVIGATOR,
  DISCOVERY_NAVIGATOR
} = constants

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils
} = NavigationExperimental

export const navigationState = createReducer({
    loginNavigationState: {
      index: 0,
      routes: [
        { key: 'Login' },
        { key: 'Main Navigator' },
      ],
    },
    mainNavigationState: {
      index: 1,
      routes: [
        { key: 'Settings' },
        { key: 'Discovery Navigator' }, //TODO: Turn the discovery screen and location details screen into a single screen
        { key: 'Dashboard' },
      ],
    },
    discoveryNavigationState: {
      index: 0,
      routes: [
        { key: 'Discovery' },
      ],
    }
  }, {

    [types.NAVIGATION_FORWARD](state, action) {
      if (action.navigatorType === LOGIN_NAVIGATOR) {
        return {
          ...state,
          loginNavigationState: NavigationStateUtils.forward(state.loginNavigationState),
        }
      } else if (action.navigatorType === MAIN_NAVIGATOR) {
        return {
          ...state,
          mainNavigationState: NavigationStateUtils.forward(state.mainNavigationState),
        }
      } else if (action.navigatorType === DISCOVERY_NAVIGATOR) {
        return {
          ...state,
          discoveryNavigationState: NavigationStateUtils.forward(state.discoveryNavigationState),
        }
      }
    },

    [types.NAVIGATION_BACK](state, action) {
      if (action.navigatorType === LOGIN_NAVIGATOR) {
        return {
          ...state,
          loginNavigationState: NavigationStateUtils.back(state.loginNavigationState),
        }
      } else if (action.navigatorType === MAIN_NAVIGATOR) {
        return {
          ...state,
          mainNavigationState: NavigationStateUtils.back(state.mainNavigationState),
        }
      } else if (action.navigatorType === DISCOVERY_NAVIGATOR) {
        return {
          ...state,
          discoveryNavigationState: NavigationStateUtils.forward(state.discoveryNavigationState),
        }
      }
    },

    [types.PUSH](state, action) {
      if (action.navigatorType === LOGIN_NAVIGATOR) {
        return {
          ...state,
          loginNavigationState: NavigationStateUtils.push(state.loginNavigationState, action.route),
        }
      } else if (action.navigatorType === MAIN_NAVIGATOR) {
        return {
          ...state,
          mainNavigationState: NavigationStateUtils.push(state.mainNavigationState, action.route),
        }
      } else if (action.navigatorType === DISCOVERY_NAVIGATOR) {
        return {
          ...state,
          discoveryNavigationState: NavigationStateUtils.push(state.discoveryNavigationState, action.route),
        }
      }
    },

    [types.POP](state, action) {
      if (action.navigatorType === LOGIN_NAVIGATOR) {
        return {
          ...state,
          loginNavigationState: NavigationStateUtils.pop(state.loginNavigationState),
        }
      } else if (action.navigatorType === MAIN_NAVIGATOR) {
        return {
          ...state,
          mainNavigationState: NavigationStateUtils.pop(state.mainNavigationState),
        }
      } else if (action.navigatorType === DISCOVERY_NAVIGATOR) {
        return {
          ...state,
          discoveryNavigationState: NavigationStateUtils.pop(state.discoveryNavigationState),
        }
      }
    },
});
