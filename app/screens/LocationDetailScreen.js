'use strict';
import React, { Component } from 'react';
import { Dimensions, Image, Navigator, StyleSheet, StatusBar, Text, TouchableOpacity, View, AsyncStorage } from 'react-native';

import NavBar from '../components/NavBar'
import ViewContainer from '../components/ViewContainer'

var Geolocation = require('Geolocation');


class DiscoveryScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      showProgress: false,
      resultIndex: this.props.resultIndex,
      uri0: "https://placehold.it/400x400",
      uri1: "https://placehold.it/400x400",
      uri2: "https://placehold.it/400x400",
      uri3: "https://placehold.it/400x400",
      name: "",
      openingTime: "",
      closingTime: "",
      rating: "",
      distance: "",
    }

    this.setData();
  }

  setData() {
    AsyncStorage.getItem("result " + this.state.resultIndex + " name", (err, result) => {
      this.setState({ name: result });
    });
    AsyncStorage.getItem("result " + this.state.resultIndex + " opening time", (err, result) => {
      this.setState({ openingTime: result });
    });
    AsyncStorage.getItem("result " + this.state.resultIndex + " closing time", (err, result) => {
      this.setState({ closingTime: result });
    });
    AsyncStorage.getItem("result " + this.state.resultIndex + " rating", (err, result) => {
      this.setState({ rating: result });
    });
    AsyncStorage.getItem("result " + this.state.resultIndex + " distance", (err, result) => {
      this.setState({ distance: result });
    });

  }

  render(){
    return (
      <ViewContainer>
      <StatusBar
        barStyle="light-content"
      />
        <NavBar>
          <View style={styles.NavBar}>
            <Text style={styles.navTitle}>Details</Text>
          </View>
        </NavBar>
        <View>
          <Text>{this.state.name}</Text>
          <Text>{this.state.openingTime}</Text>
          <Text>{this.state.closingTime}</Text>
          <Text>{this.state.rating}</Text>
          <Text>{this.state.distance}</Text>
        </View>
      </ViewContainer>
    );
  }
}


  var styles = StyleSheet.create({
    NavBar: {
      paddingTop: 25,
      paddingBottom: 25,
      flexDirection:'row',
    },
    navTitle: {
      marginTop: -2,
      color: 'white',
      fontWeight: "900",
      fontFamily: 'Arial Rounded MT Bold',
      fontSize: 30,
      flex: 1,
      textAlign: 'center',
    },
    discoveryViewContainer: {
      justifyContent: 'center',
      flexDirection: 'column',
      flex: 1,
    },
    discoveryPhotoContainer: {
      flexDirection: 'row',
      flex: 1.4,
      flexWrap: 'wrap',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
});

module.exports = DiscoveryScreen;
