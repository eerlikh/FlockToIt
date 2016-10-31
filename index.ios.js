/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import MainNavigator from './app/navigation/MainNavigator'

class FlockToIt extends Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}

AppRegistry.registerComponent('FlockToIt', () => FlockToIt);
