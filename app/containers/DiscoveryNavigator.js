import React, { Component } from 'react'
import LocationDetailScreen from '../screens/LocationDetailScreen'
import DiscoveryScreen from '../screens/DiscoveryScreen'
import styles from './styles';

import {
  View,
  NavigationExperimental,
  StyleSheet
} from 'react-native'

const { CardStack: NavigationCardStack } = NavigationExperimental;

class DiscoveryNavigator extends Component {
  constructor(props) {
    super(props)

    this._renderHeader = this._renderHeader.bind(this);
    this._renderScene = this._renderScene.bind(this);
  }

  render() {

    return (
      <NavigationCardStack
        direction={'horizontal'}
        navigationState={this.props.navigationState.discoveryNavigationState}
        onNavigate={ () => {} }
        renderScene={this._renderScene.bind(this)}
        renderHeader={this._renderHeader}
        style={styles.main}
      />
    );
  }

  _renderScene(props) {

    if (props.scene.route.key === 'Discovery') {
			return (
				<View style={{flex: 1}}>
					<DiscoveryScreen {...this.props} />
				</View>
			);
		}

    if (props.scene.route.key === 'Details') {
			return (
				<View style={{flex: 1}}>
					<LocationDetailScreen {...this.props} />
				</View>
			);
		}

	}

  _renderHeader(props) {
    return null;
  }
}

module.exports = DiscoveryNavigator;
