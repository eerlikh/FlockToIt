'use strict';
import React, { Component } from 'react';
import { Dimensions, Image, Navigator, StyleSheet, StatusBar, Text, TouchableOpacity, View } from 'react-native';


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
            <TouchableOpacity onPress={()=>this.getYelpApiAsync()}>
              <Image style={styles.discoveryImage} source={require('../img/notEat.png')} />
            </TouchableOpacity>
          </View>
        </NavBar>

        <View>

        </View>
      </ViewContainer>
    );
  }
  getYelpApiAsync() {
    return fetch('https://api.yelp.com/v3/businesses/search?term=park,biking&latitude=40.432838&longitude=-74.399071&', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer 56V5k6StrQ085Vgv57Gdesj5ndcvdXajm7PbuAoEUOHoPnltsX13wiE2rJEEkfbcEuMuBAHq2_87iFdIq2i7Bb-j9HNnozkm9j9HfT7VYEwd38rSmdfKOoKH70LwV3Yx',
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
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
