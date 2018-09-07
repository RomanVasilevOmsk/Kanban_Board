import { fromJS } from 'immutable';
import ActionTypes from '../../actionTypes';

const initialState = fromJS({
  isFetching: false,
  comments: [],
});

const ACTION_HANDLERS = {
  [ActionTypes.FETCH_COMMENTS]: (state, action) => state.set('isFetching', action.isFetching),
  [ActionTypes.FETCH_COMMENTS_SUCCESS]: (state, action) => state.set('comments', fromJS(action.comments)),
  [ActionTypes.ADD_COMMENT]: (state, action) =>
    state.update('comments', 'comments', cards => cards.concat([fromJS(action.payload)])),
  [ActionTypes.EDIT_COMMENT]: (state, action) => {
    const { id } = action.payload;
    const index = state.get('comments').findIndex(comment => comment.get('id') === id);
    return state.setIn(['comments', index, 'text'], fromJS(action.payload.text));
  },
  [ActionTypes.DELETE_COMMENT]: (state, action) => {
    const { id } = action.payload;
    const index = state.get('comments').findIndex(comment => comment.get('id') === id);
    return state.deleteIn(['comments', index]);
  },
};

export default function commentsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
