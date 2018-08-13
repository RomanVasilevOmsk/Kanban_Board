import ActionTypes from '../../actionTypes';

export const addUser = (name) => (dispatch) => {
  dispatch({
    type: ActionTypes.ADD_USER,
    payload: name,
  });
};