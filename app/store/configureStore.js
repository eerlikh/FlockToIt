import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers/index';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  console.log(reducer);
  return createStore(reducer, initialState, enhancer);
}

// TODO: enable hot reloading with following code:

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
