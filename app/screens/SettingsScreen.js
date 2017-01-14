//TODO: make the sliders for price and radius respond to the redux state

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
import {constants} from '../constants'
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
      showProgress: false,
      showDiscoveryCriteria: true,
      showSuggestAchievement: false,
      showHelpSupport: false,
      showLegalPrivacy: false,
      criteriaArrow: false,
      suggestArrow: false,
    }
  }

  componentWillMount(){
    this.fixNavigationStack();
  }

  fixNavigationStack(){
    this.props.resetStack();//TODO: change name to "attemptResetStack" or something more descriptive

    if (this.props.hacks.stackIsReset === 0) {
      this.props.immediatelyResetStack(this.props.navigation.currentNavigatorUID,
        [Router.getRoute('settings'), Router.getRoute('discovery')], 1);
    }
  }

  static route = {
    navigationBar: {
      title: 'Settings',
      renderRight: (route, props) =>
        <NavButton destination={"discovery"} direction={"right"} navigatorLevel={"current"}/>,
    },
  }

  render(){

    return (

      <ViewContainer>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.mainSettingsContainer}>

          <View style={styles.settingOptionColumn}>
            <TouchableOpacity onPress={()=>this.DiscoveryCriteriaPressed()}>
              <View style={styles.settingOptionRow}>
                <Text style={styles.optionText}>Discovery Criterias</Text>
                <Image style={ this.state.showDiscoveryCriteria ? styles.optionButtonDown : styles.optionButtonRight }
                  source={ this.state.showDiscoveryCriteria ? this.icons['down'] : this.icons['right'] } />
              </View>
            </TouchableOpacity>
            {renderIf(this.state.showDiscoveryCriteria)(
              <DiscoveryCriteriaView {...this.props} style={styles.DiscoveryCriteriaView} />
            )}
          </View>

          <TouchableOpacity onPress={()=>this.SuggestAchievementPressed()}>
            <View style={styles.settingOptionColumn}>
              <View style={styles.settingOptionRow}>
                <Text style={styles.optionText}>Suggest Achievement </Text>
                <Image style={ this.state.showSuggestAchievement ? styles.optionButtonDown : styles.optionButtonRight }
                  source={ this.state.showSuggestAchievement ? this.icons['down'] : this.icons['right'] } />
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
                <Image style={ this.state.showHelpSupport ? styles.optionButtonDown : styles.optionButtonRight }
                  source={ this.state.showHelpSupport ? this.icons['down'] : this.icons['right'] } />
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
                <Image style={ this.state.showLegalPrivacy ? styles.optionButtonDown : styles.optionButtonRight }
                  source={ this.state.showLegalPrivacy ? this.icons['down'] : this.icons['right'] } />
              </View>

            {renderIf(this.state.showLegalPrivacy)(
              <LegalPrivacyView style={styles.LegalPrivacyView} />
            )}
            </View>
          </TouchableOpacity>

          <Login onLogoutFinishedFunction={() =>
            { //TODO: insert a navigation action creator from props
}
          }/>

        </View>
      </ViewContainer>
    );
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation,
    hacks: state.hacks,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
