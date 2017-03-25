'use strict';
import React, { Component } from 'react';
import { AsyncStorage, Dimensions, Image, ScrollView, StyleSheet, StatusBar, Text, TouchableOpacity, View, Alert } from 'react-native';
import NavBar from '../components/NavBar'
import DiscoveryNav from '../components/DiscoveryNav'
import ViewContainer from '../components/ViewContainer'
import renderIf from '../components/renderIf'
import { NavigationStyles } from '@exponent/ex-navigation';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { connect } from 'react-redux';
import BugReportPrompt from '../components/BugReportPrompt';

class FavoriteDetailScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      promptVisible: false,
    }
  }
  static route = {
    navigationBar: {
      visible: false,
    },
    styles: {
    ...NavigationStyles.Fade,
    },
  }
  render(){
    return (
      <ViewContainer>
        <StatusBar  style={styles.statusBar} barStyle="light-content" />
        <View style={styles.discoveryViewContainer}>
          <ScrollView style={styles.locationDetailScrollView}>

          <View style={styles.discoveryPhotoContainer}>
            <Image style={styles.venuePhoto} source={{uri: this.props.selectedFavorite.imageUrl}} />
          </View>
          <View style={styles.locationDetailColumnContainer}>
            <View style={styles.locationDetailRatingContainer}>
              <View style={styles.locationRatingStarsContainer}>
                <Text style={styles.goldColor}>Average Rating: {this.props.selectedFavorite.rating}</Text>
                {
                  /*
                  <Text style={styles.goldColor}>
                    <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                    <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                    <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                    <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                    <Image style={styles.locationRatingStars} source={require('../img/icons/Star.png')} />
                  </Text>
                  */
                }
              </View>
              <View style={styles.locationRatingSpacer}>
              </View>
              <View style={styles.locationRatingButtonContainer}>
                <Text style={styles.goldColor}>Rate This Location</Text>
              </View>
            </View>
            <View style={styles.locationDetailRowContainer}>
              <Text>Distance: {this.props.selectedFavorite.distance} mi</Text>
              <Text>{this.props.selectedFavorite.hours}</Text>
            </View>
          </View>
            <View style={styles.locationDetailAchievementsRow}>
              {this.props.selectedFavorite.relatedAchievements.map((achievement) => {
                return <Image style={styles.achievementsImage} source={achievement.staticImageSource} key={achievement.id} />
              })}
            </View>
            <View style={styles.locationDetailThemesRow}>
              {this.props.selectedFavorite.relatedThemes.map((theme) => {
                return <Image style={styles.themesImage} source={theme.staticImageSource} key={theme.id} />
              })}
            </View>


          </ScrollView>
        </View>
        <DiscoveryNav style={styles.discoveryNavContainer}>

            {/*title button*/}
            <View style={styles.titleContainer}>
              <TouchableOpacity style={styles.titleButton} onPress={() => this.props.pop(this.props.navigation.currentNavigatorUID)}>
                <Image style={styles.backIcon} source={require('../img/icons/back.png')} />
                <Text style={styles.locationTitle}>{this.props.selectedFavorite.name}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.navContainer}>
              {/*first button*/}
              <TouchableOpacity style={styles.highlightContainer} onPress={this.deletePressed.bind(this)}
                onLongPress={() => this.setState.bind(this)({promptVisible: true})} delayLongPress={3000}>
                <View style={styles.xButtonContainer}>
                  <Image style={styles.discoveryNavImage} source={require('../img/buttons/delete.png')} />
                </View>
              </TouchableOpacity>

              {/*second button*/}
              <TouchableOpacity style={styles.highlightContainer} onPress={this.flockPressed.bind(this)}>
                <View style={styles.flockButtonContainer}>
                  <Image style={styles.discoveryNavImage} source={require('../img/buttons/flockButton.png')} />
                </View>
              </TouchableOpacity>

              {/*third button*/}
              <TouchableOpacity style={styles.highlightContainer} onPress={this.checkInPressed.bind(this)}>
                <View style={styles.likeButtonContainer}>
                  <Image style={styles.discoveryNavImage} source={require('../img/buttons/checkin.png')} />
                </View>
              </TouchableOpacity>
            </View>
        </DiscoveryNav>
        <BugReportPrompt
          promptVisible={this.state.promptVisible}
          onSubmit={() => this.setState({promptVisible: false})}
          onCancel={() => this.setState({promptVisible: false})}
        />
      </ViewContainer>
    );
  }

  deletePressed(){
    this.props.deleteFavorite(this.props.selectedFavorite);
    this.props.pop(this.props.navigation.currentNavigatorUID);
  }

  flockPressed(){

  }

  //TODO: replace "checkIn" with "checkIn" (lowercase 'i') throughout app for consistency and grammatic correctness (watch out - you can't undo a replace all in atom)
  checkInPressed() {
    this.props.checkIn(this.props.selectedFavorite);
  }
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
  discoveryViewContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 11.5,
  },
  discoveryPhotoContainer: {
    flexDirection: 'row',
    flex: 4,
    flexWrap: 'wrap',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  venuePhoto: {
    width: windowWidth * 1,
    height: windowHeight * 0.6,
    alignItems: 'stretch',
    backgroundColor: 'grey',
  },
  locationDetailColumnContainer: {
    flex: .52,
  },
  locationDetailRatingContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    height: 30,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationRatingSpacer: {
    flex: 1,
  },
  locationRatingStars: {
    height: 13,
    width: 13,
  },
  goldColor: {
    color: 'gold',
  },
  locationDetailRowContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'black',
    borderBottomWidth: 1,
    shadowOffset:{
    width: 3,
    height: 3,
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  locationDetailAchievementsRow: {
    marginLeft: 15,
    flex: 1,
    flexDirection: 'row',
  },
  achievementsImage: {
    borderRadius: 5,
    margin: 5,
    height: 60,
    width: 60,
  },
  locationDetailThemesRow: {
    marginLeft: 15,
    flex: 1,
    flexDirection: 'row',
  },
  themesImage: {
    borderRadius: 5,
    margin: 5,
    height: 60,
    width: 60,
  },
  locationDetailScrollView: {
    flex: 6,
    height: 200,
  },
  discoveryNavContainer: {
    flex: 3.2,
  },
  titleContainer: {
    backgroundColor: 'lightgrey',
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  titleButton: {
    borderRadius: 5,
    padding: 5,
    paddingTop: 9,
    paddingBottom: 9,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    shadowOffset:{
    width: 3,
    height: 3,
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  backIcon: {
    height: windowHeight * .065,
    marginLeft: 10,
    flex: 1.79,
  },
  locationTitle: {
    flex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    paddingLeft: 15,
    fontSize: 20,
    color: 'black',
    fontFamily: 'Helvetica',
  },
  discoveryButtonContainer: {
    flex: .5,
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  navContainer: {
    flexDirection: 'row',
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 8,
    backgroundColor: 'lightgrey',
    justifyContent: 'space-between',
  },
  highlightContainer: {
    flex: 1,
  },
  xButtonContainer: {
    backgroundColor: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 4,
    borderRadius: 10,
    alignItems: 'center',
    shadowOffset:{
    width: 3,
    height: 3,
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  flockButtonContainer: {
    backgroundColor: '#01939A',
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    marginLeft: 2,
    marginRight: 2,
    alignItems: 'center',
    shadowOffset:{
    width: 3,
    height: 3,
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  likeButtonContainer: {
    backgroundColor: 'white',
    marginLeft: 4,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    alignItems: 'center',
    shadowOffset:{
    width: 3,
    height: 3,
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  discoveryNavImage: {
    resizeMode: 'contain',
    alignItems: 'center',
    width: windowWidth * .135,
    height: windowHeight * .075,
  },
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation,
    selectedFavorite: state.userData.selectedFavorite,
    detailsData: state.googleData.detailsData,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteDetailScreen);
