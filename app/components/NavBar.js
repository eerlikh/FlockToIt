//TODO: delete; we are using ex-navigation's navbar now

'use strict'
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'

class NavBar extends Component {
  render() {
    return (
      <View style={[styles.NavBar, this.props.style || {}]}>
        {this.props.children}
      </View>
    )
  }
}

var styles = StyleSheet.create({

  NavBar: {
    height: 65,
    backgroundColor: "#01939A",
  }

})

module.exports = NavBar
