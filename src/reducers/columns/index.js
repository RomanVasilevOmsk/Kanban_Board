import { fromJS } from 'immutable';
import ActionTypes from '../../actionTypes';

const initialState = fromJS({
  isFetching: false,
  columns: [],
});

// case EDIT_COLUMN:
//     return [
//         ...state.map((column) => {
//             if (column.id === action.payload.id) {
//                 return Object.assign({}, action.payload);
//             }
//             return column;
//         }),

const ACTION_HANDLERS = {
  [ActionTypes.FETCH_COLUMN]: (state, action) => state.set('isFetching', action.isFetching),
  [ActionTypes.FETCH_COLUMN_SUCCESS]: (state, action) => state.set('columns', fromJS(action.columns)),
  [ActionTypes.EDIT_COLUMN]: (state, action) => {
    const { id } = action.payload;
    const index = state.get('columns').findIndex(column => column.get('id') === id);
    return state.setIn(['columns', index, 'columnName'], fromJS(action.payload.columnName));
  },
  // [REFRESH_PROFILE_INFO]: (state, action) => state
  //     .set('currentUser', fromJS(state.get('currentUser')).merge(fromJS(action.user))),
  // [GET_USER]: (state, action) => state
  //     .set('currentUser', fromJS(action.user))
  //     .set('event', fromJS({}))
  //     .set('usersToCompare', fromJS([]))
  //     .set('currentUserToCompare', fromJS({})),
  // [FETCHING]: (state, action) => state.set('fetching', action.fetching),
  // [FETCH_SUMMARY]: (state, action) => state.set('summary', fromJS(action.summary)),
  // [FETCH_ROLLING_VELOCITY_INFO]: (state, action) => state.set('rollingVelocityInfo', fromJS(action.rollingVelocityInfo)),
  // [FETCH_PITCHING_LOG]: (state, action) => state
  //     .setIn(['currentUser', 'pitching_log'], fromJS(action.pitching_log)),
  // [FETCH_BATTING_LOG]: (state, action) => state
  //     .setIn(['currentUser', 'batting_log'], fromJS(action.batting_log)),
  // [FETCH_EVENTS]: (state, action) => state.set('events', fromJS(action.events)),
  // [FETCH_EVENT]: (state, action) => state.set('event', fromJS(action.event)),
  // [GET_USERS_TO_COMPARE]: (state, action) => state.set('usersToCompare', fromJS(action.users)),
  // [GET_CURRENT_USER_TO_COMPARE]: (state, action) => state.set('currentUserToCompare', fromJS(action.user)),
};

export default function columnReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
