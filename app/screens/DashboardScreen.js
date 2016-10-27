'use strict';
import React, { Component } from 'react';
import { Navigator, AppRegistry, StyleSheet, Text, View, TabBarIOS, Image, TouchableHighlight, TouchableOpacity } from 'react-native';


import NavBar from '../components/NavBar'
import ViewContainer from '../components/ViewContainer'
import AchievementProfileView from '../views/AchievementProfileView'
import MatchedLocationsView from '../views/MatchedLocationsView'
import DashNavBar from '../components/DashNavBar'

class DashboardScreen extends Component {
  render(){
    return (
      <ViewContainer>
        <NavBar>
        <View style={styles.NavBar}>
          <TouchableOpacity onPress={this.DiscoveryPressed.bind(this)}>
            <Image style={styles.navButtonLeft} source={require('../img/ArrowLeftWhite.png')} />
          </TouchableOpacity>
          <Text style={styles.navTitle}>Dashboard</Text>
        </View>
        </NavBar>
        <AchievementProfileView />
        <MatchedLocationsView />
        <DashNavBar>
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
  DiscoveryPressed(){
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
    width: 14,
    height: 28,
  },
  navTitle: {
    marginRight: 40,
    marginTop: -2,
    color: 'white',
    fontWeight: "900",
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
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
    backgroundColor: 'grey',
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

module.exports = DashboardScreen;
