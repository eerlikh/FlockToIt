//TODO: refactor this to use images from the static achievement resources

'use strict'
import React, { Component } from 'react';
import { Image, ListView, StyleSheet, Text, View } from 'react-native'
import ProgressBar from '../components/ProgressBar'

import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { connect } from 'react-redux';

var image_urls = [
  require("../img/achievements/eiffel-tower.png"),
  require("../img/achievements/tah-mahal.png"),
  require("../img/achievements/brew-master.png"),
  require("../img/achievements/outdoors.png"),
  require("../img/achievements/rushmore.png"),
  require("../img/achievements/sea-bottom.png"),
  require("../img/achievements/mist-master.png"),
  require("../img/achievements/Castle.png"),
  require("../img/achievements/hagia-sophia.png"),
  require("../img/achievements/Hamburger.png"),
  require("../img/achievements/arcade.png"),
];

class AchievementListView extends Component {
  constructor(props){
    super(props)
    // var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    // this.state = {
    //   achievementsDataSource: ds.cloneWithRows(achievements)
    // }
  }

  render() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var achievementsDataSource = ds.cloneWithRows(this.props.achievements);

    return (
      <View style={styles.achievementsContainer}>
        <View style={styles.achievementsHeader}>
          <Text style={styles.headerText}>Achievements List</Text>
          <Text style={styles.headerText}>Progress</Text>
        </View>
        <ListView
          dataSource={achievementsDataSource}
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
        <View style={styles.achievementColumn}>
          <Text style={styles.achievementName}>{location.name}</Text>
          {//<Text style={styles.achievementDescription}> {location.description}</Text>
          }
          <View style={styles.achievementProgress}>
            <ProgressBar progress={80} />
          </View>

          <View>
            <Text>Difficulty: Hard</Text>
          </View>
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
  achievementColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  achievementIcon: {
    marginRight: 10,
    height: 50,
    width: 50,
  }

})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    achievements: state.userData.achievements,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AchievementListView);
