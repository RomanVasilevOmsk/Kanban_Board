import { combineReducers } from 'redux-immutable';
import user from './userReducer';
import columns from './columns';

export default combineReducers({
  user,
  columns,
});
