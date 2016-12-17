'use strict'
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {constants} from '../constants'
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
          <TouchableOpacity onPress={this.EatPressed.bind(this)}>
            <Image style={styles.discoveryImage} source={require('../img/themes/notEat.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.DrinkPressed.bind(this)}>
            <Image style={styles.discoveryImage} source={require('../img/themes/notDrink.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.ChillPressed.bind(this)}>
            <Image style={styles.discoveryImage} source={require('../img/themes/notChill.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.AdventurePressed.bind(this)}>
            <Image style={styles.discoveryImage} source={require('../img/themes/notAdventure.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.CulturePressed.bind(this)}>
            <Image style={styles.discoveryImage} source={require('../img/themes/notCulture.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.MysteryPressed.bind(this)}>
            <Image style={styles.discoveryImage} source={require('../img/themes/Mystery.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.sliderTitleContainer}>
          <View style={styles.sliderText}>
            <Text>Search Radius: {this.state.distance.toFixed(0)} meters </Text>
          </View>
          <View style={styles.sliderContainer}>
            <Slider
              minimumValue={0}
              maximumValue={50000}
              value={this.state.distance}
              onValueChange={(distance) => this.setState({distance})} />
          </View>
        </View>
        <View style={styles.sliderTitleContainer}>
          <View style={styles.sliderText}>
            <Text>Price Range: {this.state.price.toFixed(0)} dollar signs </Text>
          </View>
          <View style={styles.sliderContainer}>
            <Slider
              minimumValue={0}
              maximumValue={4}
              value={this.state.price}
              onValueChange={(price) => this.setState({price})} />
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={this.SavePressed.bind(this)}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  EatPressed(){
    this.props.setTheme(constants.EAT_THEME);
  }

  DrinkPressed(){
    this.props.setTheme(constants.DRINK_THEME);
  }

  ChillPressed(){
    this.props.setTheme(constants.CHILL_THEME);
  }

  AdventurePressed(){
    this.props.setTheme(constants.ADVENTURE_THEME);
  }

  CulturePressed(){
    this.props.setTheme(constants.CULTURE_THEME);
  }

  MysteryPressed(){
    this.props.setTheme(constants.MYSTERY_THEME);
  }

  SavePressed(){
    this.props.setRadius(this.state.distance.toFixed(0));
    this.props.setPrice(this.state.price.toFixed(0));
    this.props.fetchAllData();
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
