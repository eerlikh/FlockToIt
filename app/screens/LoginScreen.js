'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import ViewContainer from '../components/ViewContainer'
import Login from '../components/Login'
import FBAccessTokenManager from '../utils/FBAccessTokenManager'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { connect } from 'react-redux';
import { Router } from '../containers/Router';

const FBSDK = require('react-native-fbsdk');
const {
  AccessToken,
} = FBSDK;

class LoginScreen extends Component {
  constructor(props){
    super(props);
  }

  autoLogin() {
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        if (data != null) {
          this.LoginPressed();
        }
    });
  }

  render(){
    return (
      <ViewContainer style={styles.background}>
        <Image style={styles.mainLoginContainer} source={require('../img/CityscapeIntro.jpg')}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../img/seagulls.png')} />
            <Text style={styles.welcomeMsg}>
              Flock
            </Text>
          </View>

          <View style={styles.loginButtonContainer}>
            <TouchableHighlight style={styles.googleLoginButton} onPress={this.LoginPressed.bind(this)}>
              <Text style={styles.loginMsg}>Google Login</Text>
            </TouchableHighlight>
            <View style={styles.fbLoginButton}>
              <Login onLoginFinishedFunction={this.LoginPressed.bind(this)}/>
            </View>
          </View>
        </Image>
      </ViewContainer>
    );
  }

  componentDidMount() {
    //causes a wierd blink if you don't pause thread here
    setTimeout(() => {
      this.autoLogin();
    }, 100);
  }

  LoginPressed(){
    FBAccessTokenManager.setFacebookData(this.props.setUserName.bind(this));
    this.props.fetchAllData();
    this.props.push(this.props.navigation.currentNavigatorUID, Router.getRoute('MainNavigator'));
  }

}

var styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
  },
  mainLoginContainer: {
    marginTop: 19,
    flex: 1,
    width: undefined,
    height: undefined,
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  welcomeMsg: {
    marginLeft: 20,
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 45,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  loginButtonContainer: {
    marginBottom: 100,
  },
  googleLoginButton: {
    shadowOffset:{
    width: 7,
    height: 7,
    },
    shadowColor: 'black',
    shadowOpacity: 0.7,
    paddingLeft: 50,
    paddingRight: 50,
    padding: 10,
    backgroundColor: '#df4a32',
    marginBottom: 20,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fbLoginButton: {
    shadowOffset:{
    width: 7,
    height: 7,
    },
    shadowColor: 'black',
    shadowOpacity: 0.7,
  },
  loginMsg: {
    fontSize: 15,
    fontFamily: 'Arial',
    color: 'white',
  },
  logo: {
    alignItems: 'center',
    height: 70,
    width: 80,
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
