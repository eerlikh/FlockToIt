import { createNavigationEnabledStore } from '@exponent/ex-navigation';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers/index';
import { composeWithDevTools } from 'remote-redux-devtools';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

const composeEnhancers = composeWithDevTools({ realtime: true });

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
});

export default function configureStore(initialState) {
  const enhancer = composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStoreWithNavigation(reducer, initialState, enhancer);
  // return createStore(reducer, initialState, enhancer);
}

// enable hot reloading with following code:

// export default function configureStore () {
//   const store = createStore(rootReducer)
//
//   if (module.hot) {
//     module.hot.accept(() => {
//       const nextRootReducer = require('../reducers/index').default
//       store.replaceReducer(nextRootReducer)
//     })
//   }
//   return store
// }
