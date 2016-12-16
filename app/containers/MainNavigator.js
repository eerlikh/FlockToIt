import React, { Component } from 'react'
import SettingScreen from '../screens/SettingScreen'
import DiscoveryNavigator from '../containers/DiscoveryNavigator'
import DashboardScreen from '../screens/DashboardScreen'
import styles from './styles';

import {
  View,
  NavigationExperimental,
  StyleSheet
} from 'react-native'

const { CardStack: NavigationCardStack } = NavigationExperimental;

class MainNavigator extends Component {
  constructor(props) {
    super(props)

    this._renderHeader = this._renderHeader.bind(this);
    this._renderScene = this._renderScene.bind(this);
  }

  render() {

    return (
      <NavigationCardStack
        direction={'horizontal'}
        navigationState={this.props.navigationState.mainNavigationState}
        onNavigate={ () => {} }
        renderScene={this._renderScene.bind(this)}
        renderHeader={this._renderHeader}
        style={styles.main}
      />
    );
  }

  _renderScene(props) {

		if (props.scene.route.key === 'Settings') {
			return (
				<View style={{flex: 1}}>
					<SettingScreen {...this.props} />
				</View>
			);
		}

    if (props.scene.route.key === 'Discovery Navigator') {
			return (
				<View style={{flex: 1}}>
					<DiscoveryNavigator {...this.props} />
				</View>
			);
		}

    if (props.scene.route.key === 'Dashboard') {
			return (
				<View style={{flex: 1}}>
					<DashboardScreen {...this.props} />
				</View>
			);
		}
	}

  _renderHeader(props) {
    return null;
  }
}

module.exports = MainNavigator;
