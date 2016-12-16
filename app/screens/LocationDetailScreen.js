'use strict';
import React, { Component } from 'react';
import { AsyncStorage, Dimensions, Image, Navigator, StyleSheet, StatusBar, Text, TouchableOpacity, View } from 'react-native';

import NavBar from '../components/NavBar'
import DiscoveryNav from '../components/DiscoveryNav'
import ViewContainer from '../components/ViewContainer'

class LocationDetailScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      showProgress: false,
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
    this.setImageUris();
  }
  setImageUris() {
    console.log("multiGet about to be called");
    AsyncStorage.multiGet(["result " + this.props.googleData.currentResultIndex + ", image 1"], (err, stores) => {
      stores.map((result, i, store) => {
        let val = store[i][1];
        this.setState({ ["uri" + i]: val });
      });
      console.log("multiGet called");
    });

    this.setData();
  }

  setData() {
    console.log(this.state);
    AsyncStorage.getItem("result " + this.props.googleData.currentResultIndex + " name", (err, result) => {
      this.setState({ name: result });
    });
    AsyncStorage.getItem("result " + this.props.googleData.currentResultIndex + " opening time", (err, result) => {
      this.setState({ openingTime: result });
    });
    AsyncStorage.getItem("result " + this.props.googleData.currentResultIndex + " closing time", (err, result) => {
      this.setState({ closingTime: result });
    });
    AsyncStorage.getItem("result " + this.props.googleData.currentResultIndex + " rating", (err, result) => {
      this.setState({ rating: result });
    });
    AsyncStorage.getItem("result " + this.props.googleData.currentResultIndex + " distance", (err, result) => {
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
        <View style={styles.discoveryViewContainer}>
          <View style={styles.detailHeaderContainer}>
            <Text style={styles.discoveryHeader}>{this.state.name}</Text>
          </View>
          <View style={styles.discoveryPhotoContainer}>
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
    this.props.pop("Discovery Navigator");
  }

  XPressed(){
    this.props.pop("Discovery Navigator");
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
