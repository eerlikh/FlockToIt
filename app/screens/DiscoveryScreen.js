//TODO: Figure out a way to cache images from URLs because its making the app slow as fuck to load images
'use strict';
import React, { Component } from 'react';
import { Alert, Dimensions, Image, StyleSheet, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import {constants} from '../constants'
import DiscoveryNav from '../components/DiscoveryNav'
import ViewContainer from '../components/ViewContainer'
import NavButton from '../components/NavButton'
import { NavigationStyles } from '@exponent/ex-navigation';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { connect } from 'react-redux';
import { Router } from '../containers/Router';

class DiscoveryScreen extends Component {
  constructor(props){
    super(props);
  }
  static route = {
    navigationBar: {
      title: 'Flock',
      renderRight: (route, props) =>
        <NavButton destination={"dashboard"} direction={"right"} navigatorLevel={"current"}/>,
      renderLeft: (route, props) =>
        <NavButton destination={"settings"} direction={"left"} navigatorLevel={"current"}/>,
    },
  }
  render(){
    return (
      <ViewContainer>
      <StatusBar barStyle="light-content"/>
        <View style={styles.discoveryViewContainer}>
          <View style={styles.discoveryPhotoContainer}>
            <Image style={styles.venuePhotoMain} source={{uri: this.props.imageUrls.url1}} />
            <Image style={styles.venuePhoto} source={{uri: this.props.imageUrls.url2}} />
            <Image style={styles.venuePhoto} source={{uri: this.props.imageUrls.url3}} />
          </View>

          <DiscoveryNav style={styles.discoveryNavContainer}>
              <View style={styles.titleContainer}>
                <TouchableOpacity style={styles.titleButton} onPress={this.infoPressed.bind(this)}>
                  <Image style={styles.infoIcon} source={require('../img/info.png')} />
                  <Text style={styles.locationTitle}>{this.props.detailsData.name}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.navContainer}>
                {/*first button*/}
                <TouchableOpacity style={styles.highlightContainer} onPress={this.xPressed.bind(this)}>
                  <View style={styles.xButtonContainer}>
                    <Image style={styles.discoveryNavImage} source={require('../img/buttons/xButton.png')} />
                  </View>
                </TouchableOpacity>

                {/*second button*/}
                <TouchableOpacity style={styles.highlightContainer} onPress={this.flockPressed.bind(this)}>
                  <View style={styles.flockButtonContainer}>
                    <Image style={styles.discoveryNavImage} source={require('../img/buttons/flockButton.png')} />
                  </View>
                </TouchableOpacity>

                {/*third button*/}
                <TouchableOpacity style={styles.highlightContainer} onPress={this.likePressed.bind(this)}>
                  <View style={styles.likeButtonContainer}>
                    <Image style={styles.discoveryNavImage} source={require('../img/buttons/likeButton.png')} />
                  </View>
                </TouchableOpacity>
              </View>
          </DiscoveryNav>

        </View>
      </ViewContainer>
    );
  }

  likePressed(){
    try {
      this.props.addFavorite();
    } catch (error) {
      Alert.alert('Favorite Already Added');
      return;
    }
    Alert.alert('Favorite Added!');
  }

  xPressed(){
    this.props.iterateResult()
  }

  flockPressed(){
    this.props.deleteAllFavorites()
  }
  infoPressed(){
    this.props.push(this.props.navigation.currentNavigatorUID, Router.getRoute('locationDetail'));
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
  navButtonLeft: {
    marginRight: 40,
    marginLeft: 15,
    width: 15,
    height: 30,
  },
  navButtonRight: {
    marginRight: 15,
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
    flexDirection: 'column',
    flex: 1,
  },
  discoveryPhotoContainer: {
    flexDirection: 'row',
    flex: 10,
    flexWrap: 'wrap',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  venuePhotoMain: {
    width: windowWidth * 1,
    height: windowHeight * .40,
    alignItems: 'stretch',
    backgroundColor: 'grey',
  },
  venuePhoto: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.30,
    alignItems: 'stretch',
    backgroundColor: 'grey',
  },
  discoveryNavContainer: {
    flex: 3.2,
  },
  titleContainer: {
    backgroundColor: 'lightgrey',
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  titleButton: {
    borderRadius: 5,
    padding: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    shadowOffset:{
    width: 3,
    height: 3,
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  infoIcon: {
    height: windowHeight * .075,
    marginLeft: 10,
    flex: 1.79,
  },
  locationTitle: {
    flex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    paddingLeft: 15,
    fontSize: 20,
    color: 'black',
    fontFamily: 'Helvetica',
  },
  discoveryButtonContainer: {
    flex: .5,
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  navContainer: {
    flexDirection: 'row',
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 8,
    backgroundColor: 'lightgrey',
    justifyContent: 'space-between',
  },
  highlightContainer: {
    flex: 1,
  },
  xButtonContainer: {
    backgroundColor: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 4,
    borderRadius: 10,
    alignItems: 'center',
    shadowOffset:{
    width: 3,
    height: 3,
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  flockButtonContainer: {
    backgroundColor: '#01939A',
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    marginLeft: 2,
    marginRight: 2,
    alignItems: 'center',
    shadowOffset:{
    width: 3,
    height: 3,
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  likeButtonContainer: {
    backgroundColor: 'white',
    marginLeft: 4,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    alignItems: 'center',
    shadowOffset:{
    width: 3,
    height: 3,
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  discoveryNavImage: {
    resizeMode: 'contain',
    alignItems: 'center',
    width: windowWidth * .135,
    height: windowHeight * .075,
  },
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    // navigationState: state.navigationState,
    navigation: state.navigation,
    detailsData: state.googleData.detailsData,
    imageUrls: state.googleData.imageUrls,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoveryScreen);
