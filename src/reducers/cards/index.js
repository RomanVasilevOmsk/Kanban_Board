import { fromJS } from 'immutable';
import ActionTypes from '../../actionTypes';

const initialState = fromJS({
  isFetching: false,
  cards: [],
});


const ACTION_HANDLERS = {
  [ActionTypes.FETCH_CARD]: (state, action) => state.set('isFetching', action.isFetching),
  [ActionTypes.FETCH_CARD_SUCCESS]: (state, action) => state.set('cards', fromJS(action.cards)),
  // [ActionTypes.EDIT_COLUMN]: (state, action) => {
  //   const { id } = action.payload;
  //   const index = state.get('columns').findIndex(column => column.get('id') === id);
  //   return state.setIn(['columns', index, 'columnName'], fromJS(action.payload.columnName));
  // },
};

export default function cardReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
