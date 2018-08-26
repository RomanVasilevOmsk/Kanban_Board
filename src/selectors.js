export const getColumnName = state => state.getIn(['columns', 'columns']).toJS();
export const getCardData = state => state.getIn(['cards', 'cards']).toJS();
export const getComments = state => state.getIn(['comments', 'comments']).toJS();
export const getAuthorName = state => state.getIn(['userName', 'userName']);

