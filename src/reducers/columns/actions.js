import ActionTypes from '../../actionTypes';

import { fetchColumnsRequest } from '../../api';

export const fetchColumns = () => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.FETCH_COLUMN,
    isFetching: true,
});
  return fetchColumnsRequest()
    .then((res) => {
      dispatch({
        type: ActionTypes.FETCH_COLUMN_SUCCESS,
        columns: res.data.columns,
        isFetching: false,
      });
    })
    .catch((error) => console.log(error));
};

export const editColumn = (id, columnName) => (dispatch) => {
  dispatch({
    type: ActionTypes.EDIT_COLUMN,
    payload: {
      id,
      columnName,
    },
  });
};