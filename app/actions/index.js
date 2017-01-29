import * as googleDataActions from './googleFetching'
import * as settingsActions from './settings'
import * as hacksActions from './hacks'
import * as userDataActions from './userData'
import { NavigationActions } from '@exponent/ex-navigation'

export const ActionCreators = Object.assign({},
  googleDataActions,
  settingsActions,
  hacksActions,
  userDataActions,
  {push: NavigationActions.push},
  {pop: NavigationActions.pop},
  {immediatelyResetStack: NavigationActions.immediatelyResetStack},
  {showLocalAlert: NavigationActions.showLocalAlert},
);
