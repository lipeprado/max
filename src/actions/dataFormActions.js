import axios from 'axios';
import * as types from './actionTypes';

export function sendDataFormSuccess(data) {
  return { type: types.SEND_USER_SUCCESS, data };
}

export function intial(data) { /* eslint-disable */
  return dispatch => {
    return axios.post('/data', data).then(res => {
      dispatch(sendDataFormSuccess(res.data.items));
    });
  };
}
