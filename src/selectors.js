export const getColumnName = state => state.getIn(['columns', 'columns']).toJS();
export const getAuthorName = state => state.getIn(['userName', 'userName']);
