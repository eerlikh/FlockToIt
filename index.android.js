'use strict';

import React, { AppRegistry } from 'react-native';
import App from './app/containers/App';
import {constants} from './app/constants';
var Raven = require('raven-js');

if (constants.CRASH_REPORTING_IS_ENABLED) {
  require('raven-js/plugins/react-native')(Raven);

  Raven.config('https://7494e88ec52644a68675bfb31d9fddec@sentry.io/144987', { release: "1.1.0", autoBreadcrumbs: false }).install();
}

AppRegistry.registerComponent('FlockToIt', () => App);
