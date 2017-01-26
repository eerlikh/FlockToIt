'use strict';
import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import FBAccessTokenManager from '../utils/FBAccessTokenManager'

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
        loginBehaviorIOS={'browser'}
        onLogoutFinished={() => this.props.onLogoutFinishedFunction()}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  fbLoginButton: {
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 0,
  }
});

module.exports = Login
