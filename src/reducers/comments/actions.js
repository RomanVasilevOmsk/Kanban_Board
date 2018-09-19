import ActionTypes from '../../actionTypes';
import uid from 'uid';

import { fetchCommentsRequest } from '../../api';

export const fetchComments = () => dispatch => {
  dispatch({
    type: ActionTypes.FETCH_COMMENTS,
    isFetching: true,
  });
  return fetchCommentsRequest()
    .then(res => {
      dispatch({
        type: ActionTypes.FETCH_COMMENTS_SUCCESS,
        comments: res.data.comments,
        isFetching: false,
      });
    })
    .catch(error => console.log(error));
};

export const addComment = (idCard, author, text) => dispatch => {
  dispatch({
    type: ActionTypes.ADD_COMMENT,
    payload: {
      id: uid(),
      idCard: idCard,
      author: author,
      text: text,
    },
  });
};
export const editComment = (id, text) => dispatch => {
  dispatch({
    type: ActionTypes.EDIT_COMMENT,
    payload: {
      id,
      text,
    },
  });
};

export const deleteComment = id => dispatch => {
  dispatch({
    type: ActionTypes.DELETE_COMMENT,
    payload: {
      id,
    },
  });
};
