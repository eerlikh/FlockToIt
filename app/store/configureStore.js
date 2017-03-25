import { createNavigationEnabledStore } from '@exponent/ex-navigation';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import {constants} from '../constants';
import reducer from '../reducers/index';
var Raven = require('raven-js');
import createRavenMiddleware from "raven-for-redux";

// Raven.config('https://7494e88ec52644a68675bfb31d9fddec@sentry.io/144987', { release: "1.1.0", autoBreadcrumbs: false }).install();

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

const composeEnhancers = composeWithDevTools({ realtime: true });

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
});

export default function configureStore() {
  const enhancer = constants.CRASH_REPORTING_IS_ENABLED ?
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        createRavenMiddleware(Raven),
        loggerMiddleware,
      ),
      autoRehydrate(),
    )
    :
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
      ),
      autoRehydrate(),
    )
  ;

  // if (constants.CRASH_REPORTING_IS_ENABLED) {
  //   enhancer = composeEnhancers(
  //     applyMiddleware(
  //       thunkMiddleware,
  //       createRavenMiddleware(Raven),
  //       loggerMiddleware,
  //     ),
  //     autoRehydrate(),
  //   );
  // } else {
  //   enhancer = composeEnhancers(
  //     applyMiddleware(
  //       thunkMiddleware,
  //       loggerMiddleware,
  //     ),
  //     autoRehydrate(),
  //   );
  // }
  var store = createStoreWithNavigation(reducer, undefined, enhancer);
  persistStore(store, {whitelist: ['userData'], storage: AsyncStorage}, );
  return store;
}
