'use strict';
import React, { Component } from 'react';
import { Dimensions, Image, Navigator, StyleSheet, StatusBar, Text, TouchableOpacity, View, AsyncStorage} from 'react-native';

import NavBar from '../components/NavBar'
import ViewContainer from '../components/ViewContainer'
import googleFetchUtilities from '../utils/googleFetchUtilities'

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
    }

    //TODO: check if this is being called only once
    //TODO: make this get the parameters from the settings
    if (this.state.resultIndex === 0) {
      googleFetchUtilities.storeResults(
        "tacos", 50000, 4, this.setImageUris.bind(this));
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
            {/*<Image style={styles.venuePhoto} source={require('../img/sampleFood01.jpg')} /> */}
            <Image style={styles.venuePhoto} source={{uri: this.state.uri0}} />
            <Image style={styles.venuePhoto} source={{uri: this.state.uri1}} />
            <Image style={styles.venuePhoto} source={{uri: this.state.uri2}} />
            <Image style={styles.venuePhoto} source={{uri: this.state.uri3}} />
          </View>
          <View style={styles.discoveryNameContainer}>
            <Text style={styles.discoveryHeader}>{this.state.name}</Text>
            <Text style={styles.discoveryDistance}>1.8 mi.</Text>
          </View>
          <View style={styles.discoveryInfoContainer}>
            <Text style={styles.discoveryType}>Type: Food</Text>
            <Text style={styles.discoveryTags}>Tags: Breakfast, Coffee, Bagel, Eggs</Text>
          </View>
          <View style={styles.discoveryButtonContainer}>
            <TouchableOpacity onPress={this.XPressed.bind(this)}>
              <Image style={styles.xButton} source={require('../img/tradX.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.LikePressed.bind(this)}>
              <Image style={styles.checkButton} source={require('../img/tradO.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </ViewContainer>
    );
  }

  SettingsPressed(){
    this.props.navigator.push({
      name: "settingscreen",
    })
  }
  DashboardPressed(){
    this.props.navigator.push({
      name: "dashboardscreen",
      type: 'left',
    })
  }
  LikePressed(){
    this.props.navigator.push({
      name: "locationdetailscreen",
    })
  }
  XPressed(){
    console.log('works');
    var newIndex = this.state.resultIndex + 1;
    //TODO: probably add a check here to see if the new index is greater than 19 and then handle that case
    this.setState({ resultIndex: newIndex });
    googleFetchUtilities.storeDetails(newIndex, this.setImageUris.bind(this));
    this.props.iterateIndex();
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
    margin: 10,
    fontSize: 25,
    color: 'black',
    fontFamily: 'Arial',
  },
  discoveryType: {
    marginTop: -8,
    fontSize: 15,
    color: 'grey',
    margin: 10,
  },
  discoveryTags: {
    marginTop: -4,
    fontSize: 15,
    color: 'grey',
    margin: 10,
  },
  discoveryDistance: {
    fontSize: 15,
    color: 'grey',
    margin: 10,
  },
  discoveryText: {
    fontSize: 13,
    color: 'black',
    margin: 5,
    marginLeft: 27,
    marginRight: 23,
    height: 110,
  },
  discoveryButtonContainer: {
    flex: .5,
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  xButton: {
    height: 90,
    width: 90,
    marginLeft: 25,
  },
  checkButton: {
    height: 90,
    width: 90,
    marginRight: 25,
  },
  loader: {
    marginTop: 20,
  }
});

module.exports = DiscoveryScreen;
