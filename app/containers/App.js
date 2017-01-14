import React, {Component} from 'react';
import configureStore from '../store/configureStore';
import { Router } from './Router';
import { Provider } from 'react-redux';
import { getInitialState } from '../utils/initialStateUtility';

import LoginScreen from '../screens/LoginScreen';

import {
   NavigationContext,
   NavigationProvider,
   StackNavigation,
 } from '@exponent/ex-navigation';

// uncomment the following code if you dont want to set an initial state:
const Store = configureStore({});

// uncomment the following code to set an inital state:
// const store = configureStore(getInitialState());

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
})

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>

        <NavigationProvider context={navigationContext}>
          <StackNavigation initialRoute={Router.getRoute('login')} id="LoginNavigator" />
        </NavigationProvider>

      </Provider>
    );
  }
}
