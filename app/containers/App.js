import React, {Component} from 'react';
import configureStore from '../store/configureStore';
import LoginNavigator from '../containers/LoginNavigator';
import { Provider } from 'react-redux';

const store = configureStore({});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginNavigator />
      </Provider>
    );
  }
}
