'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, StatusBar} from 'react-native';
import ViewContainer from '../components/ViewContainer'
import DiscoveryCriteriaView from '../views/DiscoveryCriteriaView'
import SuggestAchievementView from '../views/SuggestAchievementView'
import HelpSupportView from '../views/HelpSupportView'
import LegalPrivacyView from '../views/LegalPrivacyView'
import renderIf from '../components/renderIf'
import Login from '../components/Login'
import { NavigationStyles } from '@exponent/ex-navigation';
import NavButton from '../components/NavButton'
import { Router } from '../containers/Router';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { connect } from 'react-redux';

class SettingsScreen extends Component {
  constructor(props){
    super(props);
    this.icons = {
    'right': require('../img/buttons/ArrowRight.png'),
    'down': require('../img/buttons/ArrowDown.png')
    };
    this.state = {
      currentDropdown: "discovery criteria"
    }
  }

  componentWillMount(){
    this.fixNavigationStack();
  }

  fixNavigationStack(){
    this.props.attemptResetStack();

    if (this.props.hacks.stackIsReset === 0) {
      this.props.immediatelyResetStack(this.props.navigation.currentNavigatorUID,
        [Router.getRoute('settings'), Router.getRoute('discovery')], 1);
    }
  }

  static route = {
    navigationBar: {
      title: 'Settings',
      renderRight: (route, props) =>
        <NavButton destination={"discovery"} direction={"right"} />,
    },
  }

  render(){

    return (

      <ViewContainer>
        <StatusBar
          barStyle="light-content" />
        <View style={styles.mainSettingsContainer}>

          <View style={styles.settingOptionColumn}>
            <TouchableOpacity onPress={()=>this.DiscoveryCriteriaPressed()}>
              <View style={styles.settingOptionRow}>
                <Text style={styles.optionText}>Discovery Criterias</Text>
                <Image style={ this.state.currentDropdown === "discovery criteria" ? styles.optionButtonDown : styles.optionButtonRight }
                  source={ this.state.currentDropdown === "discovery criteria" ? this.icons['down'] : this.icons['right'] } />
              </View>
            </TouchableOpacity>
            {renderIf(this.state.currentDropdown === "discovery criteria")(
              <DiscoveryCriteriaView {...this.props} style={styles.DiscoveryCriteriaView} />
            )}
          </View>

          <TouchableOpacity onPress={()=>this.SuggestAchievementPressed()}>
            <View style={styles.settingOptionColumn}>
              <View style={styles.settingOptionRow}>
                <Text style={styles.optionText}>Suggest Achievement </Text>
                <Image style={ this.state.currentDropdown === "suggest achievement" ? styles.optionButtonDown : styles.optionButtonRight }
                  source={ this.state.currentDropdown === "suggest achievement" ? this.icons['down'] : this.icons['right'] } />
              </View>

              {renderIf(this.state.currentDropdown === "suggest achievement")(
                <SuggestAchievementView style={styles.SuggestAchievementView} />
              )}
            </View>
          </TouchableOpacity>

          <View style={styles.settingOptionColumn}>
            <TouchableOpacity onPress={()=>this.HelpSupportPressed()}>
              <View style={styles.settingOptionRow}>
                <Text style={styles.optionText}>Help & Support </Text>
                <Image style={ this.state.currentDropdown === "help and support" ? styles.optionButtonDown : styles.optionButtonRight }
                  source={ this.state.currentDropdown === "help and support" ? this.icons['down'] : this.icons['right'] } />
              </View>
            </TouchableOpacity>
              {renderIf(this.state.currentDropdown === "help and support")(
                <HelpSupportView style={styles.HelpSupportView} />
              )}
          </View>

          <TouchableOpacity onPress={()=>this.LegalPrivacyPressed()}>
            <View style={styles.settingOptionColumn}>
              <View style={styles.settingOptionRow}>
                <Text style={styles.optionText}>Legal & Privacy </Text>
                <Image style={ this.state.currentDropdown === "legal and privacy" ? styles.optionButtonDown : styles.optionButtonRight }
                  source={ this.state.currentDropdown === "legal and privacy" ? this.icons['down'] : this.icons['right'] } />
              </View>

            {renderIf(this.state.currentDropdown === "legal and privacy")(
              <LegalPrivacyView style={styles.LegalPrivacyView} />
            )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.LogOutPressed()}>
            <View style={styles.settingOptionColumn}>
              <View style={styles.settingOptionRow}>
                <Text style={styles.optionText}>LogOut</Text>
                <Image style={ this.state.currentDropdown === "logout" ? styles.optionButtonDown : styles.optionButtonRight }
                  source={ this.state.currentDropdown === "logout" ? this.icons['down'] : this.icons['right'] } />
              </View>

            {renderIf(this.state.currentDropdown === "logout")(
              <Login onLogoutFinishedFunction={() =>
                { this.props.pop(this.props.navigation.navigators[this.props.navigation.currentNavigatorUID].parentNavigatorUID);
                }
              }/>
            )}
            </View>
          </TouchableOpacity>
        </View>
      </ViewContainer>
    );
  }

  DiscoveryCriteriaPressed(){
    this.setState({currentDropdown: "discovery criteria"});

  }
  SuggestAchievementPressed(){
    this.setState({currentDropdown: "suggest achievement"});
  }
  HelpSupportPressed(){
    this.setState({currentDropdown: "help and support"});
  }
  LegalPrivacyPressed(){
    this.setState({currentDropdown: "legal and privacy"});
  }
  LogOutPressed(){
    this.setState({currentDropdown: "logout"});
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
  },
  settingOptionRow: {
    backgroundColor: 'whitesmoke',
    padding: 12,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  showLogOut: {

  },
  optionText: {
    fontSize: 20,
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation,
    hacks: state.hacks,
    settings: state.settings,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
