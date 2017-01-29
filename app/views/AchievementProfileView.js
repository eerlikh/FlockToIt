'use strict'
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, AsyncStorage } from 'react-native'
import ProgressBar from '../components/ProgressBar'

import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { connect } from 'react-redux';

const FBSDK = require('react-native-fbsdk');
const {
  AccessToken,
  GraphRequest,
  GraphRequestManager
} = FBSDK;

class AchievementProfileView extends Component {
  constructor(props){
    super(props);

    this.state = {name: ""};

    AsyncStorage.getItem("name").then((value) => {
      this.setState({ name: value });
    }).done();
  }

  render() {
    return (
      <View style={styles.profileContainer}>
        <View style={styles.profileNameContainer}>
          <Text style={styles.profileName}>{this.state.name}</Text>
          <Text style={styles.profileRank}>Rank: Traveler</Text>
        </View>
        <View style={styles.profileAchievementContainer}>
          <View style={styles.achievementImageContainer}>
            //ED!!!: change the below picture to: '../img/achievements/Hamburger.png' (the styling gets fucked up when i do it)
            <Image style={styles.achievementImage} source={require('../img/achievements/Hamburger.png')} />
          </View>
          <View style={styles.achievementImageInfo}>
            <Text style={styles.achievementName}>{this.props.achievements[0].name}</Text>
            <Text style={styles.achievmentDescriptionText}>{this.props.achievements[0].description}
            </Text>
          </View>
        </View>
        <ProgressBar />
      </View>
    )
  }
}

var styles = StyleSheet.create({

  profileContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  profileNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  profileRank: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  profileAchievementContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  achievementImageContainer: {

  },
  achievementImageInfo: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginLeft: 10,
    justifyContent: 'flex-start',
  },
  achievementName: {
    flex: .4,
    fontWeight: 'bold',
    fontSize: 14,
  },
  achievmentDescriptionText: {
    flex: .6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 12,
    justifyContent: 'flex-start',
  },

})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    achievements: state.userData.achievements,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AchievementProfileView);
