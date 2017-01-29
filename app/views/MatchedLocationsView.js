'use strict'
import React, { Component } from 'react';
import { Image, ListView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Router } from '../containers/Router';

import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { connect } from 'react-redux';

class MatchedLocationsView extends Component {
  constructor(props){
    super(props)
  }

  render() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var matchedLocationsDataSource = ds.cloneWithRows(this.props.favorites);

    return (
      <View style={styles.matchedLocationsContainer}>
        <View style={styles.matchedLocationsHeader}>
          <Text style={styles.headerText}>Matched Locations</Text>
          <Text style={styles.headerText}>Check-in</Text>
        </View>
        <ListView
          dataSource={matchedLocationsDataSource}
          renderRow={(location) => { return this.renderLocationRow(location) }}
        >
        </ListView>
      </View>
    )
  }

  renderLocationRow(location) {
    return(
      // <TouchableOpacity onPress={()=>this.props.deleteFavorite(location)}>
      <TouchableOpacity onPress={ () => {
          this.props.updateSelectedFavorite(location);
          this.props.push(this.props.navigation.currentNavigatorUID, Router.getRoute('favoriteDetail'));
        }}>
        <View style={styles.locationRow}>
          <Image style={styles.locationImage} source={{uri: location.imageUrl}} />
          <View styles={styles.locationColumn}>
            <Text style={styles.locationName}> {location.name}</Text>
            <Text style={styles.locationDistance}> {location.distance} mi.</Text>
          </View>
          <View styles={styles.locationColumn}>
            <Text style={styles.locationRating}> {location.rating} out of 5</Text>
            <Text style={styles.locationVisited}> {location.checkIns} visits</Text>
          </View>
        </View>
      </TouchableOpacity>
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
    navigation: state.navigation,
    // detailsData: state.googleData.detailsData,
    // imageUrls: state.googleData.imageUrls,
    favorites: state.userData.favorites,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchedLocationsView);
