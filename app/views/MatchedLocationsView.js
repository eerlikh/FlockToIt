'use strict'
import React, { Component } from 'react';
import { Image, ListView, StyleSheet, Text, View } from 'react-native'

import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { connect } from 'react-redux';

class MatchedLocationsView extends Component {
  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      matchedLocationsDataSource: ds.cloneWithRows(this.props.favorites) //locations variable used here
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
    return(
      <View style={styles.locationRow}>
        <Image style={styles.locationImage} source={{uri: location.imageUrl}} />
        <View styles={styles.locationColumn}>
          <Text style={styles.locationName}> {location.name}</Text>
          <Text style={styles.locationDistance}> {'placeholder'} mi.</Text>
        </View>
        <View styles={styles.locationColumn}>
          <Text style={styles.locationRating}> {'placeholder'} out of 10</Text>
          <Text style={styles.locationVisited}> {'placeholder'} visits</Text>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    // navigation: state.navigation,
    // detailsData: state.googleData.detailsData,
    // imageUrls: state.googleData.imageUrls,
    favorites: state.userData.favorites,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchedLocationsView);
