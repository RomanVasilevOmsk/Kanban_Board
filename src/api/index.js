export const saveToLocalStorage = (newState) => {
  return localStorage.setItem('KanbanBoardData', JSON.stringify(newState))
};

export const saveCommentsToLocalStorage = (newState) => {
  return localStorage.setItem('KanbanBoardComments', JSON.stringify(newState))
};

export const saveColumnToLocalStorage = (newState) => {
  return localStorage.setItem('KanbanBoardColumn', JSON.stringify(newState))
};

export const getData = () => {
  return JSON.parse(localStorage.getItem('KanbanBoardData'))
};

export const getComments = () => {
  return JSON.parse(localStorage.getItem('KanbanBoardComments'))
};

export const getColumn = () => {
  return JSON.parse(localStorage.getItem('KanbanBoardColumn'))
}

export const getUser = () => {
  return JSON.parse(localStorage.getItem('KanbanBoardUser'))
}

export const setUser = (author) => {
  return localStorage.setItem('KanbanBoardUser', JSON.stringify(author))
}
