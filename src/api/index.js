export const saveToLocalStorage = newState =>
  localStorage.setItem('KanbanBoardData', JSON.stringify(newState));

export const saveCommentsToLocalStorage = newState =>
  localStorage.setItem('KanbanBoardComments', JSON.stringify(newState));

export const saveColumnToLocalStorage = newState =>
  localStorage.setItem('KanbanBoardColumn', JSON.stringify(newState));

export const getData = () => JSON.parse(localStorage.getItem('KanbanBoardData'));

export const getComments = () => JSON.parse(localStorage.getItem('KanbanBoardComments'));

export const getColumn = () => JSON.parse(localStorage.getItem('KanbanBoardColumn'));

export const getUser = () => JSON.parse(localStorage.getItem('KanbanBoardUser'));

export const setUser = author => localStorage.setItem('KanbanBoardUser', JSON.stringify(author));
