'use strict';
import React, { Component } from 'react';
import { AppRegistry, Navigator, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import NavBar from '../components/NavBar'
import ViewContainer from '../components/ViewContainer'

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
      <LoginButton
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
              alert(accessToken.toString())

              const responseInfoCallback = (error, result) => {
                if (error) {
                  console.log(error)
                  alert('Error fetching data: ' + error.toString());
                } else {
                  console.log(result)
                  alert('Success fetching data: ' + result.toString());
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
    onLogoutFinished={() => alert("logout.")}/>
    </View>
    );
  }
}

class LoginScreen extends Component {

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

            <Login onLoginFinishedFunction={this.LoginPressed.bind(this)}/>
              <TouchableHighlight onPress={this.LoginPressed.bind(this)} style={styles.googleLoginButton}>
                <Text style={styles.loginMsg}> Google Login </Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.LoginPressed.bind(this)} style={styles.fbLoginButton}>
                <Text style={styles.loginMsg}> Facebook Login </Text>
              </TouchableHighlight>
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
    this.props.navigator.push({
      name: 'discoveryscreen',
      type: 'bottom'
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
