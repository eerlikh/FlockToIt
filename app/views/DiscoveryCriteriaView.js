'use strict'
import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {constants} from '../constants'

class DiscoveryCriteriaView extends Component {
  constructor(props){
    super(props);
    this.themes = {
    'Eat': require('../img/themes/Eat.png'),
    'Drink': require('../img/themes/Drink.png'),
    'Chill': require('../img/themes/Chill.png'),
    'Adventure': require('../img/themes/Adventure.png'),
    'Culture': require('../img/themes/Culture.png'),
    'Mystery': require('../img/themes/Mystery.png'),
    'unselectedEat': require('../img/themes/unselectedEat.png'),
    'unselectedDrink': require('../img/themes/unselectedDrink.png'),
    'unselectedChill': require('../img/themes/unselectedChill.png'),
    'unselectedAdventure': require('../img/themes/unselectedAdventure.png'),
    'unselectedCulture': require('../img/themes/unselectedCulture.png'),
    'unselectedMystery': require('../img/themes/unselectedMystery.png'),
    };
    this.state = {
      distance: 1,
      price: 1,
      selectEat: false,
      selectDrink: false,
      selectChill: false,
      selectAdventure: false,
      selectCulture: false,
      selectMystery: false,
    }
  }

  render() {
    return (
      <View style={styles.DiscoveryCriteriaContainer}>
        <Text style={styles.selectActivity}>Select Activity:</Text>
        <View style={styles.discoveryImageContainer}>

          <TouchableOpacity onPress={this.EatPressed.bind(this)}>
            <Image style={styles.discoveryImage}
                   source={ this.state.selectEat ? this.themes['Eat'] : this.themes['unselectedEat'] } />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.DrinkPressed.bind(this)}>
            <Image style={styles.discoveryImage}
                   source={ this.state.selectDrink ? this.themes['Drink'] : this.themes['unselectedDrink'] } />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.ChillPressed.bind(this)}>
            <Image style={styles.discoveryImage}
                   source={ this.state.selectChill ? this.themes['Chill'] : this.themes['unselectedChill'] } />
          </TouchableOpacity>

        </View>
        <View style={styles.discoveryImageContainer}>
          <TouchableOpacity onPress={this.AdventurePressed.bind(this)}>
            <Image style={styles.discoveryImage}
                   source={ this.state.selectAdventure ? this.themes['Adventure'] : this.themes['unselectedAdventure'] } />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.CulturePressed.bind(this)}>
            <Image style={styles.discoveryImage}
              source={ this.state.selectCulture ? this.themes['Culture'] : this.themes['unselectedCulture'] } />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.MysteryPressed.bind(this)}>
            <Image style={styles.discoveryImage}
                   source={ this.state.selectMystery ? this.themes['Mystery'] : this.themes['unselectedMystery'] } />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  //TODO: make it so that the theme is changed only upon navigating off of this screen to protect against button spamming

  EatPressed(){
    this.props.setTheme(constants.EAT_THEME, "eat");
    this.setState({selectEat: true});
    this.setState({selectDrink: false});
    this.setState({selectChill: false});
    this.setState({selectAdventure: false});
    this.setState({selectCulture: false});
    this.setState({selectMystery: false});
  }

  DrinkPressed(){
    this.props.setTheme(constants.DRINK_THEME, "drink");
    this.setState({selectDrink: true});
    this.setState({selectEat: false});
    this.setState({selectChill: false});
    this.setState({selectAdventure: false});
    this.setState({selectCulture: false});
    this.setState({selectMystery: false});
  }

  ChillPressed(){
    this.props.setTheme(constants.CHILL_THEME, "chill");
    this.setState({selectChill: true});
    this.setState({selectEat: false});
    this.setState({selectDrink: false});
    this.setState({selectAdventure: false});
    this.setState({selectCulture: false});
    this.setState({selectMystery: false});
  }

  AdventurePressed(){
    this.props.setTheme(constants.ADVENTURE_THEME, "adventure");
    this.setState({selectAdventure: true});
    this.setState({selectEat: false});
    this.setState({selectDrink: false});
    this.setState({selectChill: false});
    this.setState({selectCulture: false});
    this.setState({selectMystery: false});
  }

  CulturePressed(){
    this.props.setTheme(constants.CULTURE_THEME, "culture");
    this.setState({selectCulture: true});
    this.setState({selectEat: false});
    this.setState({selectDrink: false});
    this.setState({selectChill: false});
    this.setState({selectAdventure: false});
    this.setState({selectMystery: false});
  }
  MysteryPressed(){
    this.props.setTheme(constants.MYSTERY_THEME, "mystery");
    this.setState({selectMystery: true});
    this.setState({selectEat: false});
    this.setState({selectDrink: false});
    this.setState({selectChill: false});
    this.setState({selectAdventure: false});
    this.setState({selectCulture: false});
  }

}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
  DiscoveryCriteriaContainer: {
    paddingBottom: 15,
    backgroundColor: 'ivory',
  },
  selectActivity: {
    fontSize: 16,
    marginLeft: 25,
    marginBottom: 10,
    marginTop: 10,
  },
  discoveryImageContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  discoveryImage: {
    margin: 5,
    width: windowWidth * 0.2,
    height: windowHeight * 0.2,
    borderColor: 'black',
  },
  sliderTitleContainer: {
  },
  sliderText: {
  },
  sliderContainer: {
    margin: 20,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },

})

module.exports = DiscoveryCriteriaView
