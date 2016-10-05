'use strict'
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'

class LegalPrivacyView extends Component {
  render() {
    return (
      <View>
        <Text> This works Legal </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  NavBar: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  }
})

module.exports = LegalPrivacyView
