import React, {Component} from 'react';
import configureStore from '../store/configureStore';
import LoginNavigator from '../containers/LoginNavigator';
import { Provider } from 'react-redux';
import { getInitialState } from '../utils/initialStateUtility';

// uncomment the following code if you dont want to set an initial state:
const store = configureStore({});

// uncomment the following code to set an inital state:
// const store = configureStore(getInitialState());

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginNavigator />
      </Provider>
    );
  }
}
