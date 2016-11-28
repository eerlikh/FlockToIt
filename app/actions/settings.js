import * as types from './types';
import * as themes from '../constants/themes';

export function setCurrentTheme(theme) {
  var action =
    {
      type: types.SET_CURRENT_THEME,
      theme
    };
  return action;
}
