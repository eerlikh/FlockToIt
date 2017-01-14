//TODO: remove or fix the parent/child functionality of this component
'use strict'
import React, { Component } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { connect } from 'react-redux';
import { Router } from '../containers/Router';

class NavButton extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    if (this.props.direction === "right") {
      this.setState({ buttonStyle: styles.navButtonRight });
      this.setState({ buttonImage: require('../img/buttons/ArrowRightWhite.png') });
      if (this.props.navigatorLevel === "current") {
        this.setState({ onPress: () => {this.props.push(this.props.navigation.currentNavigatorUID, Router.getRoute(this.props.destination))} });
      } else if (this.props.navigatorLevel === "parent") {
        var parentNavigatorUID = this.props.navigation.navigators[this.props.navigation.currentNavigatorUID].parentNavigatorUID;
        this.setState({ onPress: () => {this.props.push(parentNavigatorUID, Router.getRoute(this.props.destination))} });
      }
    } else if (this.props.direction === "left") {
      this.setState({ buttonStyle: styles.navButtonLeft });
      this.setState({ buttonImage: require('../img/buttons/ArrowLeftWhite.png') });
      if (this.props.navigatorLevel === "current") {
        this.setState({ onPress: () => {this.props.pop(this.props.navigation.currentNavigatorUID)} });
      } else if (this.props.navigatorLevel === "parent") {
        console.log(this.props.navigation.currentNavigatorUID);
        var parentNavigatorUID = this.props.navigation.navigators[this.props.navigation.currentNavigatorUID].parentNavigatorUID;
        console.log(parentNavigatorUID);
        this.setState({ onPress: () => {this.props.pop(parentNavigatorUID)} });
      }
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this.state.onPress} activeOpacity={1}>
        <Image style={this.state.buttonStyle} source={this.state.buttonImage} />
      </TouchableOpacity>
    )
  }
}

var styles = StyleSheet.create({
  navButtonRight: {
    marginRight: 15,
    marginLeft: 40,
    width: 15,
    height: 30,
  },
  navButtonLeft: {
    marginRight: 40,
    marginLeft: 15,
    width: 15,
    height: 30,
  },
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavButton);

// module.exports = NavButton
