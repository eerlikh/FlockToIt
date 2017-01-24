'use strict';
import React, { Component } from 'react';
import {
  AsyncStorage,
  Dimensions,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

import ViewContainer from '../components/ViewContainer'
import {constants} from '../constants'
import { NavigationStyles } from '@exponent/ex-navigation';
import { Router } from '../containers/Router';

import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { connect } from 'react-redux';

class FavoriteDetailScreen extends Component {
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
            <Text style={styles.discoveryHeader}>{this.props.selectedFavorite.name}</Text>
          </View>
          <View style={styles.discoveryPhotoContainer}>
            <Image style={styles.venuePhoto} source={{uri: this.props.selectedFavorite.imageUrl}} />
          </View>
          <View style={styles.locationDetailColumnContainer}>
            <View style={styles.locationDetailRatingContainer}>
              <Text style={styles.locationRating}>
                <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                <Text>{this.props.selectedFavorite.rating}</Text>
              </Text>
              <Text style={styles.locationRating}>Rate This Location</Text>
            </View>
            <View style={styles.locationDetailRowContainer}>
              <Text>Distance: "placeholder" mi</Text>
              <Text>{"placeholder"}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => this.props.checkIn(this.props.selectedFavorite)}>
            <Text>Check In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.deleteFavorite(this.props.selectedFavorite);
            this.props.pop(this.props.navigation.currentNavigatorUID);
          }}>
            <Text>Delete This Favorite</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.pop(this.props.navigation.currentNavigatorUID)}>
            <Text>Navigate Back</Text>
          </TouchableOpacity>
        </View>
      </ViewContainer>
    );
  }

  LikePressed(){
    try {
      this.props.addFavorite();
    } catch (error) {
      Alert.alert('Favorite Already Added');
      return;
    }
    // Alert.alert('Favorite Added!'); //TODO: add this functionality back at some point
  }

  XPressed(){
    this.props.pop(this.props.navigation.currentNavigatorUID);
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

  var styles = StyleSheet.create({
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
    selectedFavorite: state.userData.selectedFavorite,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteDetailScreen);
