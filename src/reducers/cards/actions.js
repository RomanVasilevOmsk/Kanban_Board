import ActionTypes from '../../actionTypes';
import uid from 'uid';
import { fetchCardsRequest } from '../../api';

export const fetchCards = () => dispatch => {
  dispatch({
    type: ActionTypes.FETCH_CARD,
    isFetching: true,
  });
  return fetchCardsRequest()
    .then(res => {
      dispatch({
        type: ActionTypes.FETCH_CARD_SUCCESS,
        cards: res.data.cards,
        isFetching: false,
      });
    })
    .catch(error => console.log(error));
};
export const addCard = (columnId, author) => dispatch => {
  dispatch({
    type: ActionTypes.ADD_CARD,
    payload: {
      id: uid(),
      idColumn: columnId,
      cardName: '',
      author: author,
      description: '',
    },
  });
};

export const editCard = (id, idColumn, cardName, description) => dispatch => {
  dispatch({
    type: ActionTypes.EDIT_CARD,
    payload: {
      id,
      idColumn,
      cardName,
      description,
    },
  });
};

export const deleteCard = id => dispatch => {
  dispatch({
    type: ActionTypes.DELETE_CARD,
    payload: {
      id,
    },
  });
};
