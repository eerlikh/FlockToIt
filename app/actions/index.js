import * as NavigationActions from './navigation'
import * as GoogleActions from './googleFetching'
import * as SettingsActions from './settings'

export const ActionCreators = Object.assign({},
  NavigationActions,
  GoogleActions,
  SettingsActions
);
