'use strict'
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native'
var Slider = require('react-native-slider');

class DiscoveryCriteriaView extends Component {
  constructor(props){
    super(props);
    this.state = {
      distance: 1,
      price: 1
    }
  }

  render() {
    return (

      <View style={styles.DiscoveryCriteriaContainer}>
        <Text style={styles.selectActivity}>Select Activity:</Text>
        <View style={styles.discoveryImageContainer}>
          <Image style={styles.discoveryImage} source={require('../img/notEat.png')} />
          <Image style={styles.discoveryImage} source={require('../img/notDrink.png')} />
          <Image style={styles.discoveryImage} source={require('../img/notChill.png')} />
          <Image style={styles.discoveryImage} source={require('../img/notAdventure.png')} />
          <Image style={styles.discoveryImage} source={require('../img/notCulture.png')} />
          <Image style={styles.discoveryImage} source={require('../img/Mystery.png')} />
        </View>
        <View style={styles.sliderTitleContainer}>
          <View style={styles.sliderText}>
            <Text>Search Radius: {this.state.distance.toFixed(0)} miles </Text>
          </View>
          <View style={styles.sliderContainer}>
            <Slider
              minimumValue={0}
              maximumValue={100}
              value={this.state.distance}
              onValueChange={(distance) => this.setState({distance})} />
          </View>
        </View>
        <View style={styles.sliderTitleContainer}>
          <View style={styles.sliderText}>
            <Text>Price Range: {this.state.price.toFixed(0)} dollars </Text>
          </View>
          <View style={styles.sliderContainer}>
            <Slider
              minimumValue={0}
              maximumValue={100}
              value={this.state.price}
              onValueChange={(price) => this.setState({price})} />
          </View>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  DiscoveryCriteriaContainer: {
    marginTop: -15,
    paddingRight: 25,
    paddingLeft: 25,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  selectActivity: {
    marginTop: 15,
  },
  discoveryImageContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  discoveryImage: {
    height: 65,
    width: 65,
    marginRight: 14,
    marginTop: 14,
    borderRadius: 5,
    borderColor: 'black',
  },
  sliderTitleContainer: {
    marginTop: 14,
  },
  sliderText: {
    flexDirection: 'column',
  },
  sliderContainer: {
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },

})

module.exports = DiscoveryCriteriaView
