import { fromJS } from 'immutable';
import ActionTypes from '../../actionTypes';

const initialState = fromJS({
  isFetching: false,
  columns: [],
});

const ACTION_HANDLERS = {
  [ActionTypes.FETCH_COLUMN]: (state, action) => state.set('isFetching', action.isFetching),
  [ActionTypes.FETCH_COLUMN_SUCCESS]: (state, action) => state.set('columns', fromJS(action.columns)),
  [ActionTypes.EDIT_COLUMN]: (state, action) => {
    const { id } = action.payload;
    const index = state.get('columns').findIndex(column => column.get('id') === id);
    return state.setIn(['columns', index, 'columnName'], fromJS(action.payload.columnName));
  },
};

export default function columnReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
