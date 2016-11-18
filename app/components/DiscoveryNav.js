'use strict'
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'

class DiscoveryNav extends Component {
  render() {
    return (
      <View style={[styles.DashNavBar, this.props.style || {}]}>
        {this.props.children}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  DashNavBar: {
    backgroundColor: 'grey',
  }
})

module.exports = DiscoveryNav
