import * as types from './types'

export function setCurrentTheme(theme) {
  var action =
    {
      type: types.SET_CURRENT_THEME,
      theme
    };
  return action;
}
