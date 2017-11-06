import { combineReducers } from 'redux';
import data from './dataFormReducer';

const rootReducer = combineReducers({
  data,
});

export default rootReducer;
