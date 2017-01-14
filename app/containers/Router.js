import React, {Component} from 'react';
import { createRouter } from '@exponent/ex-navigation';
import LoginScreen from '../screens/LoginScreen';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import DashboardScreen from '../screens/DashboardScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LocationDetailScreen from '../screens/LocationDetailScreen';

import { StackNavigation } from '@exponent/ex-navigation';
import { NavigationStyles } from '@exponent/ex-navigation';

export const Router = createRouter(() => ({
  login: () => LoginScreen,
  discovery: () => DiscoveryScreen,
  dashboard: () => DashboardScreen,
  settings: () => SettingsScreen,
  locationDetail: () => LocationDetailScreen,
  MainNavigator: () => MainNavigator,
}));

class MainNavigator extends Component {

  static route = {
    styles: {
    ...NavigationStyles.SlideVertical,
    },
  }

  render() {
    return (
      <StackNavigation initialStack={[Router.getRoute('settings'), Router.getRoute('discovery')]} id="MainNavigator"
        defaultRouteConfig={{
            navigationBar: {
              backgroundColor: '#01939A',
              titleStyle: {
                marginTop: -10,
                color: 'white',
                fontWeight: "900",
                fontFamily: 'Arial Rounded MT Bold',
                fontSize: 30,
                flex: 1,
                textAlign: 'center',
              },
            },
            styles: {
            ...NavigationStyles.SlideHorizontalFixedNav,
            },
          }}
       />
    );
  }
}
