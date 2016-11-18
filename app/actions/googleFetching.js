import * as types from './types'

export function setGoogleData() {
  setCurrentResults(jsonData);
}

export function setCurrentResults(jsonData) {
var action =
    {
      type: types.SET_RESULTS,
      jsonData
    };
  return action;
}

export function setDetails(jsonData) {
  var action =
    {
      type: types.SET_DETAILS,
      jsonData
    };
  return action;
}

export function iterateResultIndex() {
  var action =
    {
      type: types.SET_RESULT_INDEX,
    };
  return action;
}
