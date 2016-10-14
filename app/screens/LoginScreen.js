'use strict';
import React, { Component } from 'react';
import { AppRegistry, Navigator, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import NavBar from '../components/NavBar'
import ViewContainer from '../components/ViewContainer'
import Login from '../components/Login'
import FBAccessTokenManager from '../utils/FBAccessTokenManager'

const FBSDK = require('react-native-fbsdk');
const {
  AccessToken,
} = FBSDK;

class LoginScreen extends Component {
  constructor(props){
    super(props);
  }

  isUserLoggedIn() {
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        if (data != null) {
          this.LoginPressed();
        }
    });
  }

  componentWillMount() {
    this.isUserLoggedIn();
  }

  render(){
    console.log(this.props.navigator)
    return (
      <ViewContainer style={styles.background}>
        <Image style={styles.mainLoginContainer} source={require('../img/CityscapeIntro.jpg')}>
          <View style={styles.logoContainer}>
            <Text style={styles.welcomeMsg}>
              Welcome Traveler
            </Text>
            <Image style={styles.logo} source={require('../img/logo.png')} />

            <View style={styles.loginButtonContainer}>

              <TouchableHighlight onPress={this.LoginPressed.bind(this)} style={styles.googleLoginButton}>
                <Text style={styles.loginMsg}> Google Login </Text>
              </TouchableHighlight>

              <Login onLoginFinishedFunction={this.LoginPressed.bind(this)}/>

            </View>
          </View>
        </Image>
      </ViewContainer>
    );
  }

  configureScene(route, routeStack){
     return Navigator.SceneConfigs.FloatFromBottom
  }

  LoginPressed(){

    //create an instance of token manager
    FBAccessTokenManager.setFacebookData();

    //bring up the discovery screen and pass the token manager
    this.props.navigator.push({
      name: 'discoveryscreen',
      type: 'bottom',
    })
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
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  welcomeMsg: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 32,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  fbLoginButton: {
    paddingLeft: 50,
    paddingRight: 50,
    padding: 20,
    backgroundColor: '#3b5998',
    marginBottom: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleLoginButton: {
    paddingLeft: 50,
    paddingRight: 50,
    padding: 20,
    backgroundColor: '#df4a32',
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginMsg: {
    fontSize: 20,
    fontFamily: 'Arial',
    color: 'white',
  },
  logo: {
    alignItems: 'center',
    height: 125,
    width: 100,
  }
});

module.exports = LoginScreen;
