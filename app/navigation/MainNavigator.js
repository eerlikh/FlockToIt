//TODO: use a different, better navigator component

import React, { Component } from 'react';
import { Navigator } from 'react-native';
import LoginScreen from '../screens/LoginScreen'
import SubNavigator from '../navigation/SubNavigator'

class MainNavigator extends Component {
  constructor(props){
    super(props);
  }

  renderScene(route, navigator) {

    if(route.name == 'loginscreen') {
      return <LoginScreen navigator={navigator} />
    }
    if (route.name == 'subnavigator') {
      return <SubNavigator navigator={navigator} />
    }
  }

  render() {

    return (
        <Navigator
          initialRoute={{name: 'loginscreen'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={this.configureScene}
        />
    );
  }

  configureScene(route, routeStack){
    if (route.type === 'right') {
      return Navigator.SceneConfigs.PushFromRight
    } else if (route.type === 'bottom') {
      return Navigator.SceneConfigs.FloatFromBottom
    }
    return Navigator.SceneConfigs.FloatFromRight
  }
}

module.exports = MainNavigator
