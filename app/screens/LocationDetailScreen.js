'use strict';
import React, { Component } from 'react';
import { AsyncStorage, Dimensions, Image, StyleSheet, StatusBar, Text, TouchableOpacity, View } from 'react-native';

import NavBar from '../components/NavBar'
import DiscoveryNav from '../components/DiscoveryNav'
import ViewContainer from '../components/ViewContainer'
import {constants} from '../constants'
import { NavigationStyles } from '@exponent/ex-navigation';

import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { connect } from 'react-redux';

class LocationDetailScreen extends Component {
  constructor(props){
    super(props);
  }

  static route = {
    navigationBar: {
      visible: false,
    },
    styles: {
    ...NavigationStyles.Fade,
    },
  }

  render(){
    return (
      <ViewContainer>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.discoveryViewContainer}>
          <View style={styles.detailHeaderContainer}>
            <Text style={styles.discoveryHeader}>{this.props.detailsData.name}</Text>
          </View>
          <View style={styles.discoveryPhotoContainer}>
            <Image style={styles.venuePhoto} source={{uri: this.props.imageUrls.url1}} />
          </View>
          <View style={styles.locationDetailColumnContainer}>
            <View style={styles.locationDetailRatingContainer}>
              <Text style={styles.locationRating}>
                <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                <Text>{this.props.detailsData.rating}</Text>
              </Text>
              <Text style={styles.locationRating}>Rate This Location</Text>
            </View>
            <View style={styles.locationDetailRowContainer}>
              <Text>Distance: {this.props.detailsData.distance} mi</Text>
              <Text>{this.props.detailsData.hours}</Text>
            </View>
          </View>
        </View>
        <DiscoveryNav>
          <View style={styles.discoveryNav}>

            {/*first button*/}
            <TouchableOpacity style={styles.highlightContainer} onPress={this.XPressed.bind(this)}>
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
    this.props.addFavorite();
  }

  XPressed(){
    this.props.pop(this.props.navigation.currentNavigatorUID);
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation,
    detailsData: state.googleData.detailsData,
    imageUrls: state.googleData.imageUrls,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetailScreen);
