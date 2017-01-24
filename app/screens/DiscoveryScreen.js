//TODO: Figure out a way to cache images from URLs because its making the app slow as fuck to load images

'use strict';
import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import {constants} from '../constants'

import DiscoveryNav from '../components/DiscoveryNav'
import ViewContainer from '../components/ViewContainer'
import NavButton from '../components/NavButton'
import LinearGradient from 'react-native-linear-gradient';
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
        <NavButton direction={"left"} navigatorLevel={"current"}/>,
    },
  }

  render(){
    return (
      <ViewContainer>
      <StatusBar
        barStyle="light-content"
      />

        <View style={styles.discoveryViewContainer}>
            <View style={styles.discoveryPhotoContainer}>
              <Image style={styles.venuePhotoMain} source={{uri: this.props.imageUrls.url1}} />
              <Image style={styles.venuePhoto} source={{uri: this.props.imageUrls.url2}} />
              <Image style={styles.venuePhoto} source={{uri: this.props.imageUrls.url3}} />
            </View>
            <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'white']}
            style={styles.discoveryInfoContainer}
            start={{x: 0.0, y: 0.0}} end={{x: 0.0, y: 1.2}}
            locations={[0,.4]}>
            <View style={styles.headerContainer}>
              <Text style={styles.discoveryHeader}>{this.props.detailsData.name}</Text>
            </View>
            </LinearGradient>
          <DiscoveryNav>
            <View style={styles.discoveryNav}>

              {/*first button*/}
              <TouchableOpacity style={styles.highlightContainer} onPress={this.XPressed.bind(this)}>
                <View style={styles.xButtonContainer}>
                  <Image style={styles.discoveryNavImage} source={require('../img/buttons/xButton.png')} />
                </View>
              </TouchableOpacity>

              {/*second button*/}
              <TouchableOpacity style={styles.highlightContainer} onPress={this.FlockPressed.bind(this)}>
                <View style={styles.flockButtonContainer}>
                  <Image style={styles.discoveryLikeNavImage} source={require('../img/buttons/flockButton.png')} />
                </View>
              </TouchableOpacity>

              {/*third button*/}
              <TouchableOpacity style={styles.highlightContainer} onPress={this.LikePressed.bind(this)}>
                <View style={styles.likeButtonContainer}>
                  <Image style={styles.discoveryLikeNavImage} source={require('../img/buttons/inspectButton.png')} />
                </View>
              </TouchableOpacity>
            </View>
          </DiscoveryNav>
        </View>
      </ViewContainer>
    );
  }

  LikePressed(){
    this.props.push(this.props.navigation.currentNavigatorUID, Router.getRoute('locationDetail'));
  }

  XPressed(){
    this.props.iterateResult()
  }

  FlockPressed(){
    this.props.deleteAllFavorites()
  }

}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
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
  discoveryInfoContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flex: .4,
  },
  discoveryPhotoContainer: {
    flexDirection: 'row',
    flex: 1.4,
    flexWrap: 'wrap',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  venuePhotoMain: {
    width: windowWidth * 1,
    height: windowHeight * .43,
    alignItems: 'stretch',
    backgroundColor: 'grey',
  },
  venuePhoto: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.32,
    alignItems: 'stretch',
    backgroundColor: 'grey',
  },
  discoveryNameContainer: {
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    flex: .25,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerContainer: {
    justifyContent: 'center',
    height: 60,
  },
  discoveryHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    paddingLeft: 15,
    fontSize: 26,
    color: 'black',
    fontFamily: 'Helvetica',
  },
  discoveryButtonContainer: {
    flex: .5,
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
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
    // navigationState: state.navigationState,
    navigation: state.navigation,
    detailsData: state.googleData.detailsData,
    imageUrls: state.googleData.imageUrls,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoveryScreen);
