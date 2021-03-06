import { fromJS } from 'immutable';
import ActionTypes from '../../actionTypes';

const initialState = fromJS({
  user: '',
});

const ACTION_HANDLERS = {
  [ActionTypes.ADD_USER]: (state, action) => {
    return state.set('user', fromJS(action.payload));
  },
};

export default function userReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
