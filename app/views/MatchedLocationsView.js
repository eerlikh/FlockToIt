'use strict'
import React, { Component } from 'react';
import { Image, ListView, StyleSheet, Text, View } from 'react-native'


const locations = [
  {id:1, name: "Brunswick Bagels", distance: 2, rating: 8, visited: 11, },
  {id:2, name: "Jersey Mike's", distance: 3, rating: 7, visited: 8 },
  {id:3, name: "Dominos", distance: 5, rating: 6, visited: 4 },
  {id:4, name: "Thompson Park", distance: 9, rating: 8, visited: 5 },
  {id:5, name: "Harold's Deli", distance: 7, rating: 9, visited: 4 },
  {id:6, name: "Delaware and Raritan Canal State Park", distance: 9, rating: 8, visited: 5 },
  {id:7, name: "Brunswick Zone Carolier Bowl", distance: 11, rating:7, visited: 3 },
  {id:8, name: "Chipotle Mexican Grill", distance: 9, rating: 8, visited: 5 },

]
var image_urls = [
  require('../img/MikesSub.jpg'),
  require('../img/DominosPizza.jpg'),
  require('../img/ThompsonPark.jpg'),
  require('../img/HaroldsDeli.jpg'),
  require('../img/RaritanPark.jpg'),
  require('../img/BowlingZone.jpg'),
  require('../img/Chipotle.jpg'),
];


class MatchedLocationsView extends Component {
  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      matchedLocationsDataSource: ds.cloneWithRows(locations)
    }
  }

  render() {
    return (
      <View style={styles.matchedLocationsContainer}>
        <View style={styles.matchedLocationsHeader}>
          <Text style={styles.headerText}>Matched Locations</Text>
          <Text style={styles.headerText}>Check-in</Text>
        </View>
        <ListView
          dataSource={this.state.matchedLocationsDataSource}
          renderRow={(location) => { return this.renderLocationRow(location) }}
        >
        </ListView>
      </View>
    )
  }

  renderLocationRow(location) {
    var imgSource = image_urls[location.id - 1];
    return(
      <View style={styles.locationRow}>
        <Image style={styles.locationImage} source={imgSource} />
        <View styles={styles.locationColumn}>
          <Text style={styles.locationName}> {location.name}</Text>
          <Text style={styles.locationDistance}> {location.distance} mi.</Text>
        </View>
        <View styles={styles.locationColumn}>
          <Text style={styles.locationRating}> {location.rating} out of 10</Text>
          <Text style={styles.locationVisited}> {location.visited} visits</Text>
        </View>

      </View>
    )
  }

}


var styles = StyleSheet.create({

  matchedLocationsContainer: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    flex: 3,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  matchedLocationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor:'transparent'
  },
  locationRow: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  locationImage: {
    height: 50,
    width: 50,
  }

})

module.exports = MatchedLocationsView
