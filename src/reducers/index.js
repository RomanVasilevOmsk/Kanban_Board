import { combineReducers } from 'redux-immutable';
import user from './userReducer';
import columns from './columns';
import cards from './cards';

export default combineReducers({
  user,
  columns,
  cards,
});
