import * as types from './types'
import { fetchAllData } from './googleFetching';

export function setCurrentTheme(theme) {
  return (dispatch, getState) => {
    var isInitialTheme = getState().settings.theme === null;
    dispatch(setTheme(theme));

    if (!isInitialTheme) {
      dispatch(fetchAllData());
    }
  }
}

function setTheme(theme) {
  var action =
    {
      type: types.SET_THEME,
      theme
    };
  return action;
}

export function setRadius(radius) {
  var action =
    {
      type: types.SET_RADIUS,
      radius
    };
  return action;
}

export function setPrice(price) {
  var action =
    {
      type: types.SET_PRICE,
      price
    };
  return action;
}
