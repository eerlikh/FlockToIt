import React, { Component } from 'react';
import { Navigator } from 'react-native';
import LoginScreen from '../screens/LoginScreen'
import DiscoveryScreen from '../screens/DiscoveryScreen'
import LocationDetailScreen from '../screens/LocationDetailScreen'
import SettingScreen from '../screens/SettingScreen'
import DashboardScreen from '../screens/DashboardScreen'

class SubNavigator extends Component {
  constructor(props){
    super(props);
  }

  renderScene(route, navigator) {
    if(route.name == 'loginscreen') {
      return <LoginScreen navigator={navigator} />
    }
    if(route.name == 'discoveryscreen') {
      return <DiscoveryScreen navigator={navigator} />
    }
    if(route.name == 'locationdetailscreen') {
      return <LocationDetailScreen navigator={navigator} resultIndex={route.resultIndex} />
    }
    if(route.name == 'settingscreen') {
      return <SettingScreen navigator={navigator} onLogoutFinishedFunction={this.onLogoutFinishedFunction.bind(this)} />
    }
    if(route.name == 'dashboardscreen') {
      return <DashboardScreen navigator={navigator} />
    }
  }

  render() {

    const routes = [
    {name: 'settingscreen'},
    {name: 'discoveryscreen'}
    ];

    return (
        <Navigator
          initialRouteStack={routes}
          renderScene={this.renderScene.bind(this)}
          configureScene={this.configureScene}
        />
    );
  }
  configureScene(route, routeStack){
    //I replaced the old code here because the navigator is wierd, but we may need to change it back for some reason

    // if(route.type === 'bottom') {
    //   return Navigator.SceneConfigs.FloatFromBottom
    // } else if (route.type === 'right') {
    //   return Navigator.SceneConfigs.PushFromRight
    // }
    // return Navigator.SceneConfigs.FloatFromRight
    return Navigator.SceneConfigs.PushFromRight
  }

  onLogoutFinishedFunction() {
    this.props.navigator.pop();
  }
}

module.exports = SubNavigator
