'use strict'
import React, { Component } from 'react';
import { Image, ListView, StyleSheet, Text, View } from 'react-native'
import ProgressBar from '../components/ProgressBar'


const achievements = [
  {id:1, name: "Master of the Myst", description: "The user has visited 100 unique Hookah bars", progress: 68},
  {id:2, name: "Burger Connoisseur", description: "The user has eaten at 100 unique burger establishments.", progress: 70},
  {id:3, name: "Harold and Kumar", description: "The user has visited White Castles at least 100 times", progress: 40},
  {id:4, name: "BrewMaster", description: "The user has gotten drunk at 90 unique bars and 10 breweries", progress: 88},
  {id:5, name: "Park Ranger", description:"The user has visited 10 unique National Parks", progress: 49},
  {id:6, name: "The 1%", description:"The user has been to at least 100 Steak Houses and 50 Museums and 50 Art Galleries", progress: 19},
  {id:7, name: "General Chow", description:"The user has visited 100 unique Chinese resturants", progress: 19},
  {id:8, name: "Crusader King", description:"The user has pillaged or razed at least 100 mosques", progress: 96},

]
var image_urls = [
  require('../img/Hookah.png'),
  require('../img/Hamburger.png'),
  require('../img/WhiteCastle.png'),
  require('../img/Brew.png'),
  require('../img/Ranger.png'),
  require('../img/Gem.png'),
  require('../img/GeneralChow.png'),
  require('../img/Castle.png'),
];


class AchievementListView extends Component {
  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      achievementsDataSource: ds.cloneWithRows(achievements)
    }
  }

  render() {
    return (
      <View style={styles.achievementsContainer}>
        <View style={styles.achievementsHeader}>
          <Text style={styles.headerText}>Achievements List</Text>
          <Text style={styles.headerText}>Progress</Text>
        </View>
        <ListView
          dataSource={this.state.achievementsDataSource}
          renderRow={(location) => { return this.renderLocationRow(location) }}
        >
        </ListView>
      </View>
    )
  }

  renderLocationRow(location) {
    var imgSource = image_urls[location.id - 1];
    return(
      <View style={styles.achievementRow}>
        <Image style={styles.achievementIcon} source={imgSource} />
        <View styles={styles.achievementColumn}>
          <Text style={styles.achievementName}> {location.name}</Text>
          <Text style={styles.achievementDescription}> {location.description}</Text>
        </View>
        <View styles={styles.achievementColumn}>
          <ProgressBar />
        </View>
      </View>
    )
  }

}


var styles = StyleSheet.create({

  achievementsContainer: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    flex: 3,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  achievementsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  achievementRow: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  achievementIcon: {
    height: 50,
    width: 50,
  }

})

module.exports = AchievementListView
