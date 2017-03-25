import React, {PropTypes, Component} from 'react'
// import {ListView, View} from 'react-native'
import { Image, StyleSheet, ListView, Text, View, TouchableOpacity } from 'react-native'
import { Router } from '../containers/Router';

class EnhancedListView extends Component {

  // propTypes: {
  //   ...ListView.propTypes
  // }

  constructor(props) {
    super(props)
    this.notVisible = {}

    this.enhance = this.enhance.bind(this)
    this.enhancedRowRender = this.enhancedRowRender.bind(this)
  }

  enhance(visibleRows, changedRows) {
    if (this.props.onChangeVisibleRows) {
      this.props.onChangeVisibleRows
    }

    Object.keys(changedRows['s1']).map(i => {
      if (changedRows['s1'][i] === false) { this.notVisible[i] = null }
      else { delete this.notVisible[i] }
    })
  }

  enhancedRowRender(rowData, sectionID, rowID, highlightRow) {
    if (this.notVisible[rowID] !== undefined) { return null };

    return (location) => { return this.renderLocationRow(location) };
  }

  render() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var matchedLocationsDataSource = ds.cloneWithRows(this.props.favorites);

    return (
      <ListView
        {...this.props}
        dataSource={matchedLocationsDataSource}
        onChangeVisibleRows={this.enhance}
        renderRow={this.enhancedRowRender}
      />
    );
  }

  renderLocationRow(location) {
    return(
      <TouchableOpacity onPress={ () => {
          this.props.updateSelectedFavorite(location);
          this.props.push(this.props.navigation.currentNavigatorUID, Router.getRoute('favoriteDetail'));
        }}>
        <View style={styles.locationRow}>
          <Image style={styles.locationImage} source={{uri: location.imageUrl}} />
          <View style={styles.locationInfoRowContainer}>
            <View style={styles.locationColumn}>
              <Text style={styles.locationName}> {location.name}</Text>
              <Text style={styles.locationDistance}> {location.distance} mi.</Text>
            </View>
            <View style={styles.spacer}>
            </View>
            <View style={styles.locationColumn}>
              <Text style={styles.locationRating}> {location.rating} out of 5</Text>
              <Text style={styles.locationVisited}> {location.checkIns} visits</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

}

EnhancedListView.propTypes = { ...ListView.propTypes };

module.exports = EnhancedListView
