import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import LoginScreen from '../screens/LoginScreen'
import MainNavigator from './MainNavigator'
import styles from './styles';

import {
  View,
  NavigationExperimental,
  StyleSheet
} from 'react-native'

const { CardStack: NavigationCardStack } = NavigationExperimental;

class LoginNavigator extends Component {
  constructor(props) {
    super(props)

    this._renderHeader = this._renderHeader.bind(this);
    this._renderScene = this._renderScene.bind(this);
  }

  render() {

    return (
      <NavigationCardStack
        direction={'vertical'}
        navigationState={this.props.navigationState.loginNavigationState}
        onNavigate={ () => {} }
        renderScene={this._renderScene.bind(this)}
        renderHeader={this._renderHeader}
        style={styles.main}
      />
    );
  }

  _renderScene(props) {
		if (props.scene.route.key === 'Login') {
			return (
				<View style={{flex: 1}}>
					<LoginScreen {...this.props} />
				</View>
			);
		}

		if (props.scene.route.key === 'Main Navigator') {
			return (
				<View style={{flex: 1}}>
					<MainNavigator {...this.props} />
				</View>
			);
		}
	}

  _renderHeader(props) {
    return null;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState,
    // googleData: state.googleData,
    detailsData: state.googleData.detailsData,
    imageUrls: state.googleData.imageUrls,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginNavigator);
