'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, Navigator } from 'react-native';

import NavBar from '../components/NavBar'
import ViewContainer from '../components/ViewContainer'
import DiscoveryCriteriaView from '../views/DiscoveryCriteriaView'
import SuggestAchievementView from '../views/SuggestAchievementView'
import HelpSupportView from '../views/HelpSupportView'
import LegalPrivacyView from '../views/LegalPrivacyView'
import renderIf from '../components/renderIf'
import Login from '../components/Login'

class SettingScreen extends Component {
  constructor(props){
    super(props);
    this.icons = {     //Step 2
    'right'    : require('../img/ArrowRight.png'),
    'down'  : require('../img/ArrowDown.png')
    };
    this.state = {
      showProgress: false,
      showDiscoveryCriteria: false,
      showSuggestAchievement: false,
      showHelpSupport: false,
      showLegalPrivacy: false,
      criteriaArrow: false,
      suggestArrow: false,
    }
  }

  render(){
    let criteria = this.icons['right'];

    if(this.state.showDiscoveryCriteria){
        criteria = this.icons['down'];
    }

    let suggest = this.icons['right'];

    if(this.state.showSuggestAchievement){
        suggest = this.icons['down'];
    }

    let help = this.icons['right'];

    if(this.state.showHelpSupport){
        help = this.icons['down'];
    }

    let legal = this.icons['right'];

    if(this.state.showLegalPrivacy){
        legal = this.icons['down'];
    }

    return (

      <ViewContainer>
        <NavBar>
        <View style={styles.NavBar}>
          <Text style={styles.navTitle}>Settings</Text>
          <TouchableOpacity onPress={this.DiscoveryPressed.bind(this)}>
            <Image style={styles.navButtonRight} source={require('../img/ArrowRightWhite.png')} />
          </TouchableOpacity>
        </View>
        </NavBar>

        <View style={styles.mainSettingsContainer}>

          <View style={styles.settingOptionColumn}>
            <TouchableOpacity onPress={()=>this.DiscoveryCriteriaPressed()}>
              <View style={styles.settingOptionRow}>
                <Text style={styles.optionText}>Discovery Criterias</Text>
                <Image style={ this.state.showDiscoveryCriteria ? styles.optionButtonDown : styles.optionButtonRight } source={criteria} />
              </View>
            </TouchableOpacity>
            {renderIf(false)(
              <DiscoveryCriteriaView style={styles.DiscoveryCriteriaView} />
            )}
          </View>

          <TouchableOpacity onPress={()=>this.SuggestAchievementPressed()}>
            <View style={styles.settingOptionColumn}>
              <View style={styles.settingOptionRow}>
                <Text style={styles.optionText}>Suggest Achievement </Text>
                <Image style={ this.state.showSuggestAchievement ? styles.optionButtonDown : styles.optionButtonRight } source={suggest} />
              </View>

              {renderIf(this.state.showSuggestAchievement)(
                <SuggestAchievementView style={styles.SuggestAchievementView} />
              )}
            </View>
          </TouchableOpacity>

          <View style={styles.settingOptionColumn}>
            <TouchableOpacity onPress={()=>this.HelpSupportPressed()}>
              <View style={styles.settingOptionRow}>
                <Text style={styles.optionText}>Help & Support </Text>
                <Image style={ this.state.showHelpSupport ? styles.optionButtonDown : styles.optionButtonRight } source={help} />
              </View>
            </TouchableOpacity>
              {renderIf(this.state.showHelpSupport)(
                <HelpSupportView style={styles.HelpSupportView} />
              )}
          </View>

          <TouchableOpacity onPress={()=>this.LegalPrivacyPressed()}>
            <View style={styles.settingOptionColumn}>
              <View style={styles.settingOptionRow}>
                <Text style={styles.optionText}> Legal & Privacy </Text>
                <Image style={ this.state.showLegalPrivacy ? styles.optionButtonDown : styles.optionButtonRight } source={legal} />
              </View>

            {renderIf(this.state.showLegalPrivacy)(
              <LegalPrivacyView style={styles.LegalPrivacyView} />
            )}
            </View>
          </TouchableOpacity>

          <Login onLogoutFinishedFunction={() =>
            this.props.onLogoutFinishedFunction()
          }/>

        </View>
      </ViewContainer>
    );
  }

  DiscoveryPressed(){
    this.props.navigator.jumpForward();
  }
  DiscoveryCriteriaPressed(){
    this.setState({showDiscoveryCriteria: !this.state.showDiscoveryCriteria});
    this.setState({showSuggestAchievement: false});
    this.setState({showHelpSupport: false});
    this.setState({showLegalPrivacy: false});
  }
  SuggestAchievementPressed(){
    this.setState({showSuggestAchievement: !this.state.showSuggestAchievement});
    this.setState({showDiscoveryCriteria: false});
    this.setState({showHelpSupport: false});
    this.setState({showLegalPrivacy: false});
  }
  HelpSupportPressed(){
    this.setState({showHelpSupport: !this.state.showHelpSupport});
    this.setState({showSuggestAchievement: false});
    this.setState({showDiscoveryCriteria: false});
    this.setState({showLegalPrivacy: false});
  }
  LegalPrivacyPressed(){
    this.setState({showLegalPrivacy: !this.state.showLegalPrivacy});
    this.setState({showHelpSupport: false});
    this.setState({showSuggestAchievement: false});
    this.setState({showDiscoveryCriteria: false});
  }

}

var styles = StyleSheet.create({
  NavBar: {
    flexDirection:'row',
    paddingLeft: 20,
    paddingTop: 25,
    paddingBottom: 25,
  },
  navButtonRight: {
    marginRight: 20,
    marginLeft: 40,
    width: 15,
    height: 30,
  },
  navTitle: {
    marginLeft: 40,
    marginTop: -2,
    color: 'white',
    fontWeight: "900",
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
  },
  settingOptionColumn: {
    borderColor: 'black',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
  },
  settingOptionRow: {
    padding: 24,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 16,
    flex: 1,
  },
  optionButtonRight: {
    width: 10,
    height: 20,
  },
  optionButtonDown: {
    marginTop: 5,
    marginRight: -5,
    width: 20,
    height: 10,
  },
  DiscoveryCriteriaView: {
  },
  loader: {
    marginTop: 20
  }
});

module.exports = SettingScreen;
