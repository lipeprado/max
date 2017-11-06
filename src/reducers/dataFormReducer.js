import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function (state = initialState.data, action) {
  switch (action.type) {
    case types.GET_GITHUB_USERS_SUCCESS:
      return Object.assign({}, state, {
      });
    default:
      return state;
  }
}
