import { combineReducers } from 'redux-immutable';
import user from './userReducer';
import columns from './columns';
import cards from './cards';
import comments from './comments';

export default combineReducers({
  user,
  columns,
  cards,
  comments,
});
