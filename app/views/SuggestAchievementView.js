'use strict'
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import renderIf from '../components/renderIf'

class SuggestAchievementView extends Component {
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
      <View style={styles.suggestAchievementContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTitle}>Name:</Text>
          <TextInput
            style={styles.nameInput}
                 onChangeText={(subject) => this.setState({subject})}
                 value={this.state.subject}
               />
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyTitle}>Description:</Text>
          <TextInput
            style={styles.bodyInput}
            multiline = {true}
            numberOfLines = {7}
            onChangeText={(body) => this.setState({body})}
            value={this.state.body}
          />
        </View>

        <TouchableOpacity onPress={this.SendPressed.bind(this)} style={styles.sendButton}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>

      </View>

    )
  }
  SendPressed(){
    this.setState({showDiscoveryCriteria: !this.state.showDiscoveryCriteria});
    this.setState({showSuggestAchievement: false});
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
  suggestAchievementContainer: {
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 15,
  },
  nameContainer: {
    marginTop: -10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameTitle: {
    justifyContent: 'center',
    paddingTop: 4,
  },
  nameInput: {
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
  sendButton: {
    paddingLeft: 45,
    paddingRight: 45,
    padding: 20,
    backgroundColor: '#01939A',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Arial',
    color: 'white',
  }
})

module.exports = SuggestAchievementView
