'use strict';
import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
<<<<<<< HEAD
//import AccessTokenManager from '../components/AccessTokenManager'
=======
>>>>>>> 125c282cab1c320b6e3ba1091643c7298f341069

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} = FBSDK;

class Login extends Component {
  render() {
    return (
      <View>
        <LoginButton style={styles.fbLoginButton}
        onLoginFinished={
          (error, result) => {

            if (error) {
              alert("login has error: " + result.error);
            } else if (result.isCancelled) {
              alert("login is cancelled.");
            } else {
              this.props.onLoginFinishedFunction();
            }
          }
        }
        loginBehaviorIOS={'web'}
        onLogoutFinished={() => this.props.onLogoutFinishedFunction()}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  fbLoginButton: {
    paddingTop: 33,
    paddingBottom: 33,
    marginBottom: 70,
    borderRadius: 10,
  }
});

module.exports = Login
