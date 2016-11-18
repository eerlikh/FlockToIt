'use strict';
import React, { Component } from 'react';
import { AsyncStorage, Dimensions, Image, Navigator, StyleSheet, StatusBar, Text, TouchableOpacity, View } from 'react-native';

import NavBar from '../components/NavBar'
import DiscoveryNav from '../components/DiscoveryNav'
import ViewContainer from '../components/ViewContainer'
import GoogleFetchUtilities from '../utils/GoogleFetchUtilities'

class DiscoveryScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      showProgress: false,
      resultIndex: 0,
      uri0: "https://placehold.it/400x400",
      uri1: "https://placehold.it/400x400",
      uri2: "https://placehold.it/400x400",
      uri3: "https://placehold.it/400x400",
      name: "",
    }

    //TODO: check if this is being called only once
    //TODO: make this get the parameters from the settings
    if (this.state.resultIndex === 0) {
      GoogleFetchUtilities.storeResults(
        "italian", 5000, 4, this.setImageUris.bind(this));
    } else {
      this.setImageUris();
    };
  }

  setImageUris() {
    AsyncStorage.multiGet(["result " + this.state.resultIndex + ", image 1",
                           "result " + this.state.resultIndex + ", image 2",
                           "result " + this.state.resultIndex + ", image 3",
                           "result " + this.state.resultIndex + ", image 4"], (err, stores) => {
      stores.map((result, i, store) => {
        let val = store[i][1];
        this.setState({ ["uri" + i]: val });
      });
    });

    AsyncStorage.getItem("result " + this.state.resultIndex + " name", (err, result) => {
      this.setState({ name: result });
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

            <TouchableOpacity onPress={this.SettingsPressed.bind(this)}>
              <Image style={styles.navButtonLeft} source={require('../img/ArrowLeftWhite.png')} />
            </TouchableOpacity>

            <Text style={styles.navTitle}>Flock It</Text>

            <TouchableOpacity onPress={this.DashboardPressed.bind(this)}>
              <Image style={styles.navButtonRight} source={require('../img/ArrowRightWhite.png')} />
            </TouchableOpacity>
          </View>
        </NavBar>

        <View style={styles.discoveryViewContainer}>

          <View style={styles.discoveryPhotoContainer}>
            <Image style={styles.venuePhotoMain} source={{uri: this.state.uri0}} />
            <Image style={styles.venuePhoto} source={{uri: this.state.uri1}} />
            <Image style={styles.venuePhoto} source={{uri: this.state.uri2}} />
          </View>
          <Text style={styles.discoveryHeader}>{this.state.name}</Text>
          <DiscoveryNav>
            <View style={styles.discoveryNav}>

              {/*first button*/}
              <TouchableOpacity style={styles.highlightContainer} onPress={this.XPressed.bind(this)}>
                <View style={styles.xButtonContainer}>
                  <Image style={styles.dashNavImage} source={require('../img/buttons/xButton.png')} />
                </View>
              </TouchableOpacity>

              {/*second button*/}
              <TouchableOpacity style={styles.highlightContainer} onPress={this.LikePressed.bind(this)}>
                <View style={styles.flockButtonContainer}>
                  <Image style={styles.dashNavImage} source={require('../img/buttons/flockButton.png')} />
                </View>
              </TouchableOpacity>

              {/*third button*/}
              <TouchableOpacity style={styles.highlightContainer} onPress={this.LikePressed.bind(this)}>
                <View style={styles.likeButtonContainer}>
                  <Image style={styles.dashNavImage} source={require('../img/buttons/likeButton.png')} />
                </View>
              </TouchableOpacity>
            </View>
          </DiscoveryNav>
        </View>
      </ViewContainer>
    );
  }

  SettingsPressed(){
    this.props.navigator.jumpBack();
  }
  DashboardPressed(){
    var routes = this.props.navigator.getCurrentRoutes();
    if (routes.length > 2) {
      this.props.navigator.jumpForward();
    } else {
      this.props.navigator.push({
        name: "dashboardscreen",
        type: 'right',
      })
    }
  }
  LikePressed(){
      this.props.navigator.push({
        name: "locationdetailscreen",
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
  venuePhotoMain: {
    width: windowWidth * 1,
    height: windowHeight * .4,
    alignItems: 'stretch',
    backgroundColor: 'grey',
  },
  venuePhoto: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.25,
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
  discoveryInfoContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    flex: .35,
    flexDirection: 'column',
  },
  discoveryHeader: {
    flex: .25,
    marginLeft: 20,
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
    padding: 10,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
  },
  likeButtonContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  dashNavImage: {
    resizeMode: 'contain',
    alignItems: 'center',
    height: 40,
    width: 40,
  },
});

module.exports = DiscoveryScreen;