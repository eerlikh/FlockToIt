import ReactNative from 'react-native';
const { NavigationExperimental, StatusBar} = ReactNative;
import createReducer from '../utils/createReducer'
import * as types from '../actions/types'

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

    //TODO: refactor these 2 functions so that there aren't two large sections of nearly identical code in each one
    [types.NAVIGATION_FORWARD](state, action) {
      if (action.navigatorType === "Login Navigator") {
        var object = {
          ...state,
          loginNavigationState: NavigationStateUtils.forward(state.loginNavigationState),
        }
        return object;
      } else if (action.navigatorType === "Main Navigator") {
        var object = {
          ...state,
          mainNavigationState: NavigationStateUtils.forward(state.mainNavigationState),
        }
        return object;
      } else if (action.navigatorType === "Discovery Navigator") {
        var object = {
          ...state,
          discoveryNavigationState: NavigationStateUtils.forward(state.discoveryNavigationState),
        }
        return object;
      }
    },

    [types.NAVIGATION_BACK](state, action) {
      if (action.navigatorType === "Login Navigator") {
        var object = {
          ...state,
          loginNavigationState: NavigationStateUtils.back(state.loginNavigationState),
        };
        return object;
      } else if (action.navigatorType === "Main Navigator") {
        var object = {
          ...state,
          mainNavigationState: NavigationStateUtils.back(state.mainNavigationState),
        }
        return object;
      } else if (action.navigatorType === "Discovery Navigator") {
        var object = {
          ...state,
          discoveryNavigationState: NavigationStateUtils.forward(state.discoveryNavigationState),
        }
        return object;
      }
    },

    [types.PUSH](state, action) {
      if (action.navigatorType === "Login Navigator") {
        var object = {
          ...state,
          loginNavigationState: NavigationStateUtils.push(state.loginNavigationState, action.route),
        };
        return object;
      } else if (action.navigatorType === "Main Navigator") {
        var object = {
          ...state,
          mainNavigationState: NavigationStateUtils.push(state.mainNavigationState, action.route),
        }
        return object;
      } else if (action.navigatorType === "Discovery Navigator") {
        var object = {
          ...state,
          discoveryNavigationState: NavigationStateUtils.push(state.discoveryNavigationState, action.route),
        }
        return object;
      }
    },

    [types.POP](state, action) {
      if (action.navigatorType === "Login Navigator") {
        var object = {
          ...state,
          loginNavigationState: NavigationStateUtils.pop(state.loginNavigationState),
        };
        return object;
      } else if (action.navigatorType === "Main Navigator") {
        var object = {
          ...state,
          mainNavigationState: NavigationStateUtils.pop(state.mainNavigationState),
        }
        return object;
      } else if (action.navigatorType === "Discovery Navigator") {
        var object = {
          ...state,
          discoveryNavigationState: NavigationStateUtils.pop(state.discoveryNavigationState),
        }
        return object;
      }
    },
});
