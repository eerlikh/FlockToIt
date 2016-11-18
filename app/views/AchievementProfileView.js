'use strict'
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, AsyncStorage } from 'react-native'
import ProgressBar from '../components/ProgressBar'

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
            <Image style={styles.achievementImage} source={require('../img/achievements/Hamburger.png')} />
          </View>
          <View style={styles.achievementImageInfo}>
            <Text style={styles.achievementName}>Burger Connoisseur</Text>
            <Text style={styles.achievmentDescriptionText}>The user has eaten at 100 unique burger establishments.
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

module.exports = AchievementProfileView
