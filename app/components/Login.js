'use strict';
import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';

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

          AccessToken.getCurrentAccessToken().then(
            (data) => {
              let accessToken = data.accessToken
              //alert(accessToken.toString())
              const responseInfoCallback = (error, result) => {
                if (error) {
                  console.log(error)
                  //alert('Error fetching data: ' + error.toString());
                } else {
                  console.log(result)
                  //alert('Success fetching data: ' + result.toString());
                }
              }

              const infoRequest = new GraphRequest(
                '/me',
                {
                  accessToken: accessToken,
                  parameters: {
                    fields: {
                      string: 'email,name,first_name,middle_name,last_name'
                    }
                  }
                },
                responseInfoCallback
              );

              // Start the graph request.
              new GraphRequestManager().addRequest(infoRequest).start()

            }
          )
          this.props.onLoginFinishedFunction();
        }
      }
    }
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
