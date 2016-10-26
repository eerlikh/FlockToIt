'use strict'
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'

class ViewContainer extends Component {
  render() {
    return (
      <View style={[styles.viewContainer, this.props.style || {}]} shouldRasterizeIOS={true}>
        {this.props.children}
      </View>
    )
  }
}

var styles = StyleSheet.create({

  viewContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#FFFFFF"
  }


})

module.exports = ViewContainer
