'use strict'
import React, { Component } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { connect } from 'react-redux';
import { Router } from '../containers/Router';
import BugReportPrompt from '../components/BugReportPrompt';

class NavButton extends Component {
  constructor(props){
    super(props);

    this.state = {
      promptVisible: false,
    }
  }

  componentWillMount(){
    switch (this.props.destination) {
      case "dashboard":
        this.setState({ buttonImage: require('../img/buttons/favoritesIcon.png') });
        this.setState({ buttonStyle: styles.navButtonFavorites });
        break;
      case "settings":
        this.setState({ buttonImage: require('../img/buttons/settingsIcon.png') });
        this.setState({ buttonStyle: styles.navButtonSettings });
        break;
      case "discovery":
        this.setState({ buttonImage: require('../img/buttons/ArrowRightWhite.png') });
        this.setState({ buttonStyle: styles.navButtonRight });
        break;
      case "discoveryLeft":
        this.setState({ buttonImage: require('../img/buttons/ArrowLeftWhite.png') });
        this.setState({ buttonStyle: styles.navButtonLeft });
        break;
    }

    if (this.props.direction === "right") {
      this.setState({ onPress: () => {this.props.push(this.props.navigation.currentNavigatorUID, Router.getRoute(this.props.destination))} });
    } else if (this.props.direction === "left") {
      this.setState({ onPress: () => {this.props.pop(this.props.navigation.currentNavigatorUID)} });
    }
  }

  render() {
    //this.setState.bind(this)({promptVisible: true})
    return (
      <View>
        <TouchableOpacity onPress={this.state.onPress} activeOpacity={1}
          onLongPress={() => this.setState({promptVisible: true})} delayLongPress={3000}>
          <Image style={this.state.buttonStyle} source={this.state.buttonImage} />
        </TouchableOpacity>
        <BugReportPrompt
          promptVisible={this.state.promptVisible}
          onSubmit={() => this.setState({promptVisible: false})}
          onCancel={() => this.setState({promptVisible: false})}
        />
      </View>
    )
  }

}

var styles = StyleSheet.create({
  navButtonFavorites: {
    marginRight: 15,
    marginLeft: 40,
    marginTop: 5,
    width: 34,
    height: 28,
  },
  navButtonSettings: {
    marginLeft: 15,
    marginRight: 40,
    marginTop: 5,
    width: 40,
    height: 34,
  },
  navButtonRight: {
    marginRight: 15,
    marginLeft: 40,
    marginTop: 5,
    width: 15,
    height: 30,
  },
  navButtonLeft: {
    marginLeft: 15,
    marginRight: 40,
    marginTop: 5,
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
