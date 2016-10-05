'use strict'
import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native'

class ProgressBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      progress: 40
    }
  }


  render() {
    return (
      <View style={styles.ProgressBarContainer}>
        <Text>Progress: </Text>
        <View style={[styles.flexBox, styles.progressBar]}>
          <View style={[styles.progressBar_left, {flex:this.state.progress}]} />
          <View style={[styles.progressBar_right, {flex:100 - this.state.progress}]} />
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
    marginTop: 20,
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
