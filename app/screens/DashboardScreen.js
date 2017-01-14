'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TabBarIOS, Image, TouchableHighlight, TouchableOpacity } from 'react-native';

import ViewContainer from '../components/ViewContainer'
import AchievementProfileView from '../views/AchievementProfileView'
import AchievementListView from '../views/AchievementListView'
import MatchedLocationsView from '../views/MatchedLocationsView'
import GlobalRankView from '../views/GlobalRankView'
import NavButton from '../components/NavButton'
import DashNavBar from '../components/DashNavBar'
import renderIf from '../components/renderIf'
import {constants} from '../constants'
import { NavigationStyles } from '@exponent/ex-navigation';

class DashboardScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      showDashboardScreen: true,
      showAchievementScreen: false,
      showGlobalRankingScreen: false
    }
  }

  static route = {
    navigationBar: {
      title: 'Dashboard',
      renderLeft: (route, props) =>
        <NavButton direction={"left"} navigatorLevel={"current"}/>,
    },
  }

  render(){
    return (
      <ViewContainer>

        {/*dashboard screen*/}
        {renderIf(this.state.showDashboardScreen || this.state.showAchievementScreen)(
          <AchievementProfileView />
        )}
        {renderIf(this.state.showDashboardScreen)(
          <MatchedLocationsView />
        )}

        {/*achievement screen*/}
        {renderIf(this.state.showAchievementScreen)(
          <AchievementListView />
        )}

        {/*global ranking screen*/}
        {renderIf(this.state.showGlobalRankingScreen)(
          <GlobalRankView />
        )}

        <DashNavBar>
          <View style={styles.dashNavBar}>

            {/*first button*/}
            {renderIf(!this.state.showDashboardScreen)(
            <TouchableOpacity style={styles.highlightContainer} onPress={this.HomePressed.bind(this)}>
              <View style={styles.homeContainer}>
                <Image style={styles.dashNavImage} source={require('../img/buttons/Home.png')} />
              </View>
            </TouchableOpacity>
            )}
            {renderIf(this.state.showDashboardScreen)(
            <TouchableOpacity style={styles.highlightContainer} onPress={this.HomePressed.bind(this)}>
              <View style={styles.selectedHomeContainer}>
                <Image style={styles.dashNavImage} source={require('../img/buttons/Home.png')} />
              </View>
            </TouchableOpacity>
            )}

            {/*second button*/}
            {renderIf(!this.state.showAchievementScreen)(
            <TouchableOpacity style={styles.highlightContainer} onPress={this.TrophyPressed.bind(this)}>
              <View style={styles.trophyContainer}>
                <Image style={styles.dashNavImage} source={require('../img/buttons/Trophy.png')} />
              </View>
            </TouchableOpacity>
            )}
            {renderIf(this.state.showAchievementScreen)(
            <TouchableOpacity style={styles.highlightContainer} onPress={this.TrophyPressed.bind(this)}>
              <View style={styles.selectedTrophyContainer}>
                <Image style={styles.dashNavImage} source={require('../img/buttons/Trophy.png')} />
              </View>
            </TouchableOpacity>
            )}

            {/*third button*/}
            {renderIf(!this.state.showGlobalRankingScreen)(
            <TouchableOpacity style={styles.highlightContainer} onPress={this.GlobePressed.bind(this)}>
              <View style={styles.globeContainer}>
                <Image style={styles.dashNavImage} source={require('../img/buttons/Globe.png')} />
              </View>
            </TouchableOpacity>
            )}
            {renderIf(this.state.showGlobalRankingScreen)(
            <TouchableOpacity style={styles.highlightContainer} onPress={this.GlobePressed.bind(this)}>
              <View style={styles.selectedGlobeContainer}>
                <Image style={styles.dashNavImage} source={require('../img/buttons/Globe.png')} />
              </View>
            </TouchableOpacity>
            )}
          </View>
        </DashNavBar>
      </ViewContainer>
    );
  }

  HomePressed(){
    this.setState({showDashboardScreen: true});
    this.setState({showAchievementScreen: false});
    this.setState({showGlobalRankingScreen: false});
  }
  TrophyPressed(){
    this.setState({showAchievementScreen: true});
    this.setState({showDashboardScreen: false});
    this.setState({showGlobalRankingScreen: false});
  }
  GlobePressed(){
    this.setState({showGlobalRankingScreen: true});
    this.setState({showDashboardScreen: false});
    this.setState({showAchievementScreen: false});
  }
}

var styles = StyleSheet.create({
  //TODO: delete the NavBar styles in every file it is used
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
    padding: 10,
    alignItems: 'center',
  },
  selectedHomeContainer: {
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
  selectedTrophyContainer: {
    backgroundColor: 'grey',
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
  selectedGlobeContainer: {
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

module.exports = DashboardScreen;
