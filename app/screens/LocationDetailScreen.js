'use strict';
import React, { Component } from 'react';
import { AsyncStorage, Dimensions, Image, Navigator, StyleSheet, StatusBar, Text, TouchableOpacity, View } from 'react-native';

import NavBar from '../components/NavBar'
import DiscoveryNav from '../components/DiscoveryNav'
import ViewContainer from '../components/ViewContainer'
import GoogleFetchUtilities from '../utils/GoogleFetchUtilities'

var Geolocation = require('Geolocation');


class LocationDetailScreen extends Component {
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
<<<<<<< HEAD
    this.setData();
    this.setImageUris();
  }
  setImageUris() {
    AsyncStorage.multiGet(["result " + this.state.resultIndex + ", image 1"], (err, stores) => {
      stores.map((result, i, store) => {
        let val = store[i][1];
        this.setState({ ["uri" + i]: val });
      });
    });
=======

    this.setData();
>>>>>>> d02870a726baabc8618479cd4b9bfb97bfd9cc03
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
<<<<<<< HEAD
=======

>>>>>>> d02870a726baabc8618479cd4b9bfb97bfd9cc03
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
        <View style={styles.discoveryViewContainer}>
          <View style={styles.detailHeaderContainer}>
            <Text style={styles.discoveryHeader}>{this.state.name}</Text>
          </View>
          <View style={styles.discoveryPhotoContainer}>
            {/*<Image style={styles.venuePhoto} source={require('../img/sampleFood01.jpg')} /> */}
            <Image style={styles.venuePhoto} source={{uri: this.state.uri0}} />
          </View>
          <View style={styles.locationDetailColumnContainer}>
            <View style={styles.locationDetailRatingContainer}>
              <Text style={styles.locationRating}>
                <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                <Text>{this.state.rating}</Text>
              </Text>
              <Text style={styles.locationRating}>Rate This Location</Text>
            </View>
            <View style={styles.locationDetailRowContainer}>
              <Text>Distance: {this.state.distance} mi</Text>
              <Text>Hours: {this.state.openingTime} - {this.state.closingTime}</Text>
            </View>
          </View>
        <View>
          <Text>{this.state.name}</Text>
          <Text>{this.state.openingTime}</Text>
          <Text>{this.state.closingTime}</Text>
          <Text>{this.state.rating}</Text>
          <Text>{this.state.distance}</Text>
        </View>
        <DiscoveryNav>
          <View style={styles.discoveryNav}>

            {/*first button*/}
            <TouchableOpacity style={styles.highlightContainer} onPress={this.LikePressed.bind(this)}>
              <View style={styles.xButtonContainer}>
                <Image style={styles.discoveryNavImage} source={require('../img/buttons/xButton.png')} />
              </View>
            </TouchableOpacity>

            {/*second button*/}
            <TouchableOpacity style={styles.highlightContainer} onPress={this.LikePressed.bind(this)}>
              <View style={styles.flockButtonContainer}>
                <Image style={styles.discoveryLikeNavImage} source={require('../img/buttons/flockButton.png')} />
              </View>
            </TouchableOpacity>

            {/*third button*/}
            <TouchableOpacity style={styles.highlightContainer} onPress={this.LikePressed.bind(this)}>
              <View style={styles.likeButtonContainer}>
                <Image style={styles.discoveryLikeNavImage} source={require('../img/buttons/likeButton.png')} />
              </View>
            </TouchableOpacity>
          </View>
        </DiscoveryNav>
      </ViewContainer>
    );
  }
  LikePressed(){
      this.props.navigator.push({
        name: "discoveryscreen",
        resultIndex: this.state.resultIndex,
      })
    }
  XPressed(){
    console.log('works');
    var newIndex = this.state.resultIndex + 1;
    //TODO: probably add a check here to see if the new index is greater than 19 and then handle that case
    this.setState({ resultIndex: newIndex });
    GoogleFetchUtilities.storeDetails(newIndex, this.setImageUris.bind(this));
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
      flex: 1,
      flexWrap: 'wrap',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    venuePhoto: {
      width: windowWidth * 1,
      height: windowHeight * 0.5,
      alignItems: 'stretch',
      backgroundColor: 'grey',
    },
    locationDetailColumnContainer: {
      flex: .5,
    },
    discoveryHeader: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      fontSize: 26,
      color: 'black',
      fontFamily: 'Helvetica',
    },
    locationDetailRowContainer: {
      height: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    locationDetailRatingContainer: {
      paddingLeft: 15,
      paddingRight: 15,
      height: 20,
      backgroundColor: 'black',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    locationRatingStars: {
      height: 12,
      width: 12,
    },
    locationRating: {
      color: 'gold',
    },
    discoveryNav: {
      flexDirection: 'row',
      padding: 5,
      backgroundColor: 'lightgrey',
      justifyContent: 'space-between',
    },
    highlightContainer: {
      flex: 1,
    },
    xButtonContainer: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
    },
    flockButtonContainer: {
      backgroundColor: 'white',
      paddingTop: 5,
      paddingBottom: 5,
      borderRadius: 10,
      marginLeft: 5,
      marginRight: 5,
      alignItems: 'center',
    },
    likeButtonContainer: {
      backgroundColor: 'white',
      paddingTop: 5,
      paddingBottom: 5,
      borderRadius: 10,
      alignItems: 'center',
    },
    discoveryNavImage: {
      resizeMode: 'contain',
      alignItems: 'center',
      height: 40,
      width: 40,
    },
    discoveryLikeNavImage: {
      resizeMode: 'contain',
      alignItems: 'center',
      height: 50,
      width: 50,
    },
});

module.exports = LocationDetailScreen;
