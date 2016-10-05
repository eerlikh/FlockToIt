'use strict'
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'

class ThankYouMsg extends Component {
  render() {
    return (
      <View style={styles.thankYouMsgContainer}>
        <Text>Thank you for your message. We will respond
          shortly to the following email address: 
        </Text>
        <Text>
          TestEmail@gamil.com
        </Text>
        <Text>
          Further correspondence will occur there.
        </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  thankYouMsgContainer: {
    flex: 1,
  }
})

module.exports = ThankYouMsg
