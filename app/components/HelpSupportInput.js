'use strict'
import React, { Component } from 'react';
import { Dimensions, Input, StyleSheet, Text, TextInput, View } from 'react-native'

class HelpSupportInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      body: '',
      showHelpSupport: false,
      showThankYouMsg: false,
   };
  }
  render() {
    return (
      <View style={styles.helpSupportContainer}>
        <View style={styles.subjectContainer}>
          <Text style={styles.subjectTitle}>Subject:</Text>
          <TextInput
            style={styles.subjectInput}
                 onChangeText={(subject) => this.setState({subject})}
                 value={this.state.subject}
               />
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyTitle}>Body:</Text>
          <TextInput
            style={styles.bodyInput}
            multiline = {true}
            numberOfLines = {7}
            onChangeText={(body) => this.setState({body})}
            value={this.state.body}
          />
        </View>
      </View>
    )
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
  helpSupportContainer: {
  },
  subjectContainer: {
    marginTop: -10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subjectTitle: {
    justifyContent: 'center',
    paddingTop: 4,
  },
  subjectInput: {
    height: 30,
    width: windowWidth * .7,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'stretch',
  },
  bodyContainer: {
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'column',
  },
  bodyTitle: {
    marginBottom: 10,
  },
  bodyInput: {
    padding: 5,
    height: 162,
    borderWidth: 1,
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

module.exports = HelpSupportInput
