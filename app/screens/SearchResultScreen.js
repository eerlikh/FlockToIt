/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView, TouchableOpacity} from 'react-native';

import ViewContainer from '../components/ViewContainer'
import NavBar from '../components/NavBar'
import _ from 'lodash'

class SearchResultScreen extends Component {

  render() {
    return (
      <ViewContainer>
        <NavBar />
        <Text> 100 days until I finish </Text>
      </ViewContainer>

    )
  }


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
  },
  personRow: {
    flexDirection: "row",
    justifyContent: "center"
  },
  personName: {

  }
});

module.exports = SearchResultScreen
