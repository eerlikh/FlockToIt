'use strict'
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import renderIf from '../components/renderIf'
import ThankYouMsg from './ThankYouMsg'
import HelpSupportInput from './HelpSupportInput'

class HelpSupportView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      body: '',
      showHelpSupport: true,
      showThankYouMsg: false,
   };
  }


  render() {
    return (

      <View style={styles.helpSupportContainer}>
        {renderIf(this.state.showHelpSupport)(
          <HelpSupportInput style={styles.DiscoveryCriteriaView} />
        )}
        {renderIf(this.state.showThankYouMsg)(
          <ThankYouMsg style={styles.DiscoveryCriteriaView} />
        )}
        <TouchableOpacity onPress={this.SendPressed.bind(this)} style={styles.fbLoginButton}>
          <Text style={styles.loginMsg}>Send</Text>
        </TouchableOpacity>

      </View>
    )
  }
  SendPressed(){
    this.setState({showHelpSupport: !this.state.showHelpSupport});
    this.setState({showThankYouMsg: !this.state.showThankYouMsg});
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
  helpSupportContainer: {
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 15,
    flex: 2,
  },
  fbLoginButton: {
    paddingLeft: 45,
    paddingRight: 45,
    padding: 20,
    backgroundColor: '#01939A',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginMsg: {
    fontSize: 20,
    fontFamily: 'Arial',
    color: 'white',
  },
})

module.exports = HelpSupportView
