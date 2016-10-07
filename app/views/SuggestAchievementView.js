'use strict'
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
        <View style={styles.subjectContainer}>
          <Text style={styles.subjectTitle}>Name:</Text>
          <TextInput
            style={styles.subjectInput}
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

        <TouchableOpacity onPress={this.SendPressed.bind(this)} style={styles.fbLoginButton}>
          <Text style={styles.loginMsg}>Send</Text>
        </TouchableOpacity>

      </View>

    )
  }
  SendPressed(){
    this.setState({showDiscoveryCriteria: !this.state.showDiscoveryCriteria});
    this.setState({showSuggestAchievement: false});
  }
}

var styles = StyleSheet.create({
  NavBar: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  suggestAchievementContainer: {
    paddingLeft: 25,
    paddingRight: 25,
  }
})

module.exports = SuggestAchievementView
