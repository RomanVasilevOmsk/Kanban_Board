import ActionTypes from '../../actionTypes';

import { fetchCardsRequest } from '../../api';

export const fetchCards = (id, name) => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.FETCH_CARD,
    isFetching: true,
});
  return fetchCardsRequest(id, name)
    .then((res) => {
      dispatch({
        type: ActionTypes.FETCH_CARD_SUCCESS,
        cards: res.data.cards,
        isFetching: false,
      });
    })
    .catch((error) => console.log(error));
};

// export const editColumn = (id, columnName) => (dispatch) => {
//   dispatch({
//     type: ActionTypes.EDIT_COLUMN,
//     payload: {
//       id,
//       columnName,
//     },
//   });
// };