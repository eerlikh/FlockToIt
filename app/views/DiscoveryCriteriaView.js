'use strict'
import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {constants} from '../constants'
import getThemes from '../staticResources/themes';
const themeObjects = getThemes();

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

    this.distanceIcons = {
      'nearby': require('../img/buttons/bicycle.png'),
      'medium': require('../img/buttons/car.png'),
      'far': require('../img/buttons/airplane.png'),
      'distant': require('../img/buttons/rocket.png'),
      'unselectedNearby': require('../img/buttons/blacked_bicycle.png'),
      'unselectedMedium': require('../img/buttons/blacked_car.png'),
      'unselectedFar': require('../img/buttons/blacked_airplane.png'),
      'unselectedDistant': require('../img/buttons/blacked_rocket.png'),
    };

    // this.buttons = {
    //   'bicycle': require('../img/buttons/bicycle.png'),
    //   'car': require('../img/buttons/car.png'),
    //   'airplane': require('../img/buttons/airplane.png'),
    //   'rocket': require('../img/buttons/rocket.png'),
    // }
    this.state = {
      distance: 1,
      price: 1,
      currentTheme: "", //TODO: use a prop from redux here instead
      currentDistance: "",
    }
  }

  render() {
    return (
      <View style={styles.DiscoveryCriteriaContainer}>
        <Text style={styles.selectActivity}>Select Activity:</Text>
        <View style={styles.discoveryImageContainer}>

          <TouchableOpacity onPress={this.EatPressed.bind(this)}>
            <Image style={styles.discoveryImage}
                   source={ this.state.currentTheme === "eat" ? this.themes['Eat'] : this.themes['unselectedEat'] } />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.DrinkPressed.bind(this)}>
            <Image style={styles.discoveryImage}
                   source={ this.state.currentTheme === "drink" ? this.themes['Drink'] : this.themes['unselectedDrink'] } />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.ChillPressed.bind(this)}>
            <Image style={styles.discoveryImage}
                   source={ this.state.currentTheme === "chill" ? this.themes['Chill'] : this.themes['unselectedChill'] } />
          </TouchableOpacity>

        </View>
        <View style={styles.discoveryImageContainer}>
          <TouchableOpacity onPress={this.AdventurePressed.bind(this)}>
            <Image style={styles.discoveryImage}
                   source={ this.state.currentTheme === "adventure" ? this.themes['Adventure'] : this.themes['unselectedAdventure'] } />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.CulturePressed.bind(this)}>
            <Image style={styles.discoveryImage}
                   source={ this.state.currentTheme === "culture" ? this.themes['Culture'] : this.themes['unselectedCulture'] } />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.MysteryPressed.bind(this)}>
            <Image style={styles.discoveryImage}
                   source={ this.state.currentTheme === "mystery" ? this.themes['Mystery'] : this.themes['unselectedMystery'] } />
          </TouchableOpacity>
        </View>

        <View style={styles.discoveryButtonContainer}>
          <TouchableOpacity onPress={this.bicyclePressed.bind(this)}>
            <View style={styles.buttonContainer}>
              <Text style={styles.boldText}>Bike</Text>
              <Image style={styles.buttonImageBike}
                source={ this.state.currentDistance === "nearby" ? this.distanceIcons['nearby'] : this.distanceIcons['unselectedNearby'] } />
              <Text>Nearby</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.carPressed.bind(this)}>
            <View style={styles.buttonContainer}>
              <Text style={styles.boldText}>Car</Text>
              <Image style={styles.buttonImageCar}
                source={ this.state.currentDistance === "medium" ? this.distanceIcons['medium'] : this.distanceIcons['unselectedMedium'] } />
              <Text>Medium</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={this.airplanePressed.bind(this)}>
            <View style={styles.buttonContainer}>
              <Text style={styles.boldText}>Airplane</Text>
              <Image style={styles.buttonImageAirplane}
                source={ this.state.currentDistance === "far" ? this.distanceIcons['far'] : this.distanceIcons['unselectedFar'] } />
              <Text>Far</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.rocketPressed.bind(this)}>
            <View style={styles.buttonContainer}>
              <Text style={styles.boldText}>Rocket</Text>
              <Image style={styles.buttonImageRocket}
                source={ this.state.currentDistance === "distant" ? this.distanceIcons['distant'] : this.distanceIcons['unselectedDistant'] } />
              <Text>Distant</Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>
    )
  }

  EatPressed(){
    this.props.setTheme(themeObjects.eat);
    this.setState({currentTheme: "eat"});
  }

  DrinkPressed(){
    this.props.setTheme(themeObjects.drink);
    this.setState({currentTheme: "drink"});
  }

  ChillPressed(){
    this.props.setTheme(themeObjects.chill);
    this.setState({currentTheme: "chill"});
  }

  AdventurePressed(){
    this.props.setTheme(themeObjects.adventure);
    this.setState({currentTheme: "adventure"});
  }

  CulturePressed(){
    this.props.setTheme(themeObjects.culture);
    this.setState({currentTheme: "culture"});
  }

  MysteryPressed(){
    this.props.setTheme(themeObjects.mystery);
    this.setState({currentTheme: "mystery"});
  }

  bicyclePressed(){
    this.props.setRadius(constants.NEARBY_SEARCH_RADIUS);
    this.setState({currentDistance: "nearby"});
  }

  carPressed(){
    this.props.setRadius(constants.MEDIUM_SEARCH_RADIUS);
    this.setState({currentDistance: "medium"});
  }

  airplanePressed(){
    this.props.setRadius(constants.FAR_SEARCH_RADIUS);
    this.setState({currentDistance: "far"});
  }

  rocketPressed(){
    this.props.setRadius(constants.DISTANT_SEARCH_RADIUS);
    this.setState({currentDistance: "distant"});
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
  discoveryButtonContainer: {
    marginTop: 15,
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
  buttonContainer: {
    width: 80,
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonImageBike: {
    margin: 5,
    height: 25,
    width: 43,
  },
  buttonImageCar: {
    margin: 5,
    height: 26,
    width: 50,
  },
  buttonImageAirplane: {
    margin: 5,
    height: 20,
    width: 70,
  },
  buttonImageRocket: {
    margin: 5,
    height: 25,
    width: 68,
  }

})

module.exports = DiscoveryCriteriaView
