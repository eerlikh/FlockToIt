'use strict';
import React, { Component } from 'react';
import { Dimensions, Image, Navigator, StyleSheet, StatusBar, Text, TouchableOpacity, View } from 'react-native';

import YelpFetch from '../components/YelpFetch';

import NavBar from '../components/NavBar'
import ViewContainer from '../components/ViewContainer'

var Geolocation = require('Geolocation');



class DiscoveryScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      showProgress: false
    }
  }

  render(){
    return (
      <ViewContainer>
      <StatusBar
        barStyle="light-content"
      />
        <NavBar>
          <View style={styles.NavBar}>

            <Text style={styles.navTitle}>Location Detail</Text>

          </View>
        </NavBar>

        <View>
        <TouchableOpacity onPress={this.SettingsPressed.bind(this)}>
          <Text > Google Login </Text>
        </TouchableOpacity>
        </View>
      </ViewContainer>
    );
  }

  SettingsPressed(){
    Geolocation.getCurrentPosition((position) => {
         console.log(position);
    },
    (error) => {
        console.log(error);
    });
  }
  DashboardPressed(){
    this.props.navigator.push({
      name: "dashboardscreen",
      type: 'left',
    })
  }
}

  var styles = StyleSheet.create({
    NavBar: {
      paddingTop: 25,
      paddingBottom: 25,
      flexDirection:'row',
    },
    navButtonLeft: {
      marginRight: 40,
      marginLeft: 20,
      width: 15,
      height: 30,
    },
    navButtonRight: {
      marginRight: 20,
      marginLeft: 40,
      width: 15,
      height: 30,
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
