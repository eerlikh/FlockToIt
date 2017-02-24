'use strict'
import React, { Component } from 'react';
import { Image, ListView, StyleSheet, Text, View } from 'react-native'
import ProgressBar from '../components/ProgressBar'

import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { connect } from 'react-redux';

class AchievementListView extends Component {
  constructor(props){
    super(props)
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
          renderRow={(achievement) => { return this.renderAchievementRow(achievement) }}
        >
        </ListView>
      </View>
    )
  }

  renderAchievementRow(achievement) {
    var progress = achievement.progress / achievement.threshold * 100;

    return(
      <View style={styles.achievementRow}>
        <Image style={styles.achievementIcon} source={achievement.staticImageSource} />
        <View style={styles.achievementColumn}>
          <Text style={styles.achievementName}>{achievement.name}</Text>
          {//<Text style={styles.achievementDescription}> {achievement.description}</Text>
          }
          <View style={styles.achievementProgress}>
            <ProgressBar progress={progress} />
          </View>

          <View>
            <Text>Difficulty: {achievement.difficulty}</Text>
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
