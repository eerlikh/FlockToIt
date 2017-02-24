'use strict'
import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native'

class ProgressBar extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.ProgressBarContainer}>
        <Text>Progress: </Text>
        <View style={[styles.flexBox, styles.progressBar]}>
          <View style={[styles.progressBar_left, {flex:this.props.progress}]} />
          <View style={[styles.progressBar_right, {flex:100 - this.props.progress}]} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flexBox: {
    flex: 1,
    flexDirection: 'row',
  },
  ProgressBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  progressBar: {
    overflow: 'hidden',
    height: 16,
    borderWidth: 2,
    borderColor: 'black',
  },
  progressBar_left: {
    backgroundColor: 'gold',
  },
  progressBar_right: {
    backgroundColor: 'black'
  }
})

module.exports = ProgressBar
