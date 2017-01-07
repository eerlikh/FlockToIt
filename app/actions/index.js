import * as GoogleActions from './googleFetching'
import * as SettingsActions from './settings'
import * as MiscActions from './hacks'
import { NavigationActions } from '@exponent/ex-navigation'

export const ActionCreators = Object.assign({},
  GoogleActions,
  SettingsActions,
  MiscActions,
  {push: NavigationActions.push},
  {pop: NavigationActions.pop},
  {immediatelyResetStack: NavigationActions.immediatelyResetStack},
);
