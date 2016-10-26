import React, { Component } from 'react';
import { Navigator } from 'react-native';
import LoginScreen from '../screens/LoginScreen'
import DiscoveryScreen from '../screens/DiscoveryScreen'
import LocationDetailScreen from '../screens/LocationDetailScreen'
import SettingScreen from '../screens/SettingScreen'
import DashboardScreen from '../screens/DashboardScreen'
import AchievementScreen from '../screens/AchievementScreen'
import GlobalRankingScreen from '../screens/GlobalRankingScreen'

//TODO: determine if using a custom navigator is necessary
import CustomNavigator from '../navigation/CustomNavigator'

class AppNavigator extends Component {
  constructor(props){
    super(props);
    this.state = {
      resultIndex: 0,
    }
  }

  iterateIndex() {
    var newIndex = this.state.resultIndex + 1;
    this.setState({ resultIndex: newIndex });
  }

  renderScene(route, navigator) {
    //console.log(route);
    if(route.name == 'loginscreen') {
      return <LoginScreen navigator={navigator} />
    }
    if(route.name == 'discoveryscreen') {
      return <DiscoveryScreen navigator={navigator} iterateIndex={this.iterateIndex.bind(this)}
      resultIndex={this.state.resultIndex} />
    }
    if(route.name == 'locationdetailscreen') {
      return <LocationDetailScreen navigator={navigator} />
    }
    if(route.name == 'settingscreen') {
      return <SettingScreen navigator={navigator} />
    }
    if(route.name == 'dashboardscreen') {
      return <DashboardScreen navigator={navigator} />
    }
    if(route.name == 'achievementscreen') {
      return <AchievementScreen navigator={navigator} />
    }
    if(route.name == 'globalrankingscreen') {
      return <GlobalRankingScreen navigator={navigator} />
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
    if(route.type === 'bottom') {
      return Navigator.SceneConfigs.FloatFromBottom
    } else if (route.type === 'left') {
      return Navigator.SceneConfigs.FloatFromLeft
    }
    return Navigator.SceneConfigs.FloatFromRight
  }
}



module.exports = AppNavigator
