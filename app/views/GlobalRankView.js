'use strict'
import React, { Component } from 'react';
import { Image, ListView, StyleSheet, Text, View } from 'react-native'


const users = [
  {id:1, name: "Jerry Love", score: 12},
  {id:2, name: "Bob Billy", score: 10},
  {id:3, name: "Santana Diego", score: 1},
  {id:4, name: "Thompson Merlin", score: 6},
  {id:5, name: "Tyrone Williams", score: 3},
  {id:6, name: "Raritan Junior", score: 9},
  {id:7, name: "Gerrardo Kolodnystien", score: 19},
  {id:8, name: "Haly Edison", score: 14},

]

class GlobalRankView extends Component {
  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      rank: 1,
      matchedusersDataSource: ds.cloneWithRows(users)
    }
  }

  render() {
    return (
      <View style={styles.rankingContainer}>
        <View style={styles.rankingHeaderRow}>
          <Text style={styles.headerText}>Rank</Text>
          <Text style={styles.headerText}>User</Text>
          <Text style={styles.headerText}>Trophies</Text>
        </View>
        <ListView
          dataSource={this.state.matchedusersDataSource}
          renderRow={(user) => { return this.renderuserRow(user) }}
        >
        </ListView>
      </View>
    )
  }

  renderuserRow(user) {
    return(
      <View style={styles.userRow}>
        <Text>{this.state.rank++}</Text>
        <View style={styles.userColumn}>
          <Text style={styles.userName}> {user.name}</Text>
          <Text style={styles.userDistance}> {user.score}</Text>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({

  rankingContainer: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    flex: 3,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  rankingHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  userRow: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  userImage: {
    height: 50,
    width: 50,
  },
  userColumn: {
    flexDirection: 'row',
  }

})

module.exports = GlobalRankView
