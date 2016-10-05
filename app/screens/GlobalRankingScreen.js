'use strict';
import React, { Component } from 'react';
import { Navigator, AppRegistry, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

import NavBar from '../components/NavBar'
import ViewContainer from '../components/ViewContainer'
import AchievementProfileView from '../components/AchievementProfileView'
import MatchedLocationsView from '../components/MatchedLocationsView'
import DashNavBar from '../components/DashNavBar'
import GlobalRankView from '../components/GlobalRankView'

class GlobeRankingScreen extends Component {
  render(){
    return (
      <ViewContainer>
        <NavBar>
        <View style={styles.NavBar}>
          <TouchableHighlight onPress={this.LocationDetailPressed.bind(this)}>
            <Image style={styles.navButtonLeft} source={require('../img/ArrowLeft.png')} />
          </TouchableHighlight>
          <Text style={styles.navTitle}>Global Rank</Text>
        </View>
        </NavBar>
        <GlobalRankView />
        <DashNavBar style={styles.DashNavBar}>
        <View style={styles.dashNavBar}>
          <TouchableHighlight style={styles.highlightContainer} onPress={this.HomePressed.bind(this)}>
            <View style={styles.homeContainer}>
              <Image style={styles.dashNavImage} source={require('../img/Home.png')} />
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.highlightContainer} onPress={this.TrophyPressed.bind(this)}>
            <View style={styles.trophyContainer}>
              <Image style={styles.dashNavImage} source={require('../img/Trophy.png')} />
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.highlightContainer} onPress={this.GlobePressed.bind(this)}>
            <View style={styles.globeContainer}>
              <Image style={styles.dashNavImage} source={require('../img/Globe.png')} />
            </View>
          </TouchableHighlight>
        </View>
        </DashNavBar>

      </ViewContainer>
    );
  }

  LocationDetailPressed(){
    this.props.navigator.push({
      name: "discoveryscreen",
    })
  }
  HomePressed(){
    this.props.navigator.push({
      name: "dashboardscreen",
      type: 'bottom',
    })
  }
  TrophyPressed(){
    this.props.navigator.push({
      name: "achievementscreen",
      type: 'bottom',
    })
  }
  GlobePressed(){
    this.props.navigator.push({
      name: "globalrankingscreen",
      type: 'bottom',
    })
  }

}

var styles = StyleSheet.create({
  NavBar: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 25,
    paddingBottom: 25,
    flexDirection:'row',
  },
  navButtonLeft: {
    width: 14,
    height: 28,
  },
  navButtonRight: {
    width: 14,
    height: 28,
  },
  navTitle: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    flex: 1,
  },
  mainDashboardContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  dashNavBar: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  highlightContainer: {
    flex: 1,
  },
  homeContainer: {
    padding: 10,
    alignItems: 'center',
  },
  trophyContainer: {
    padding: 10,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'gold',
    alignItems: 'center',
  },
  globeContainer: {
    backgroundColor: 'grey',
    padding: 10,
    alignItems: 'center',
  },
  dashNavImage: {
    resizeMode: 'contain',
    alignItems: 'center',
    height: 40,
    width: 40,
  },
});

module.exports = GlobeRankingScreen;
