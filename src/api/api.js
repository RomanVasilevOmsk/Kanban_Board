import uid from "uid";

export const addAuthorName = (authorName) => {
    const checkAuthor = localStorage.getItem('KanbanBoardUser');
    let visible = true;
    let author = '';
    if (!checkAuthor){
        visible = true;
        author = authorName;
    } else {
        author = authorName;
        visible = false;
    }
    this.setState({
        modalVisible: visible,
        author: author
    });
    localStorage.setItem('KanbanBoardUser', JSON.stringify(author));
};

export const deleteCard = (cardId) => {
    const newState = this.state.cardData.filter(card => card.id !== cardId);
    this.setState({
        cardData: newState
    });
    this.saveToLocalStorage(newState)
};

export const addCard = (columnId) => {
    const newState = this.state.cardData
        .concat([{id: uid(), idColumn: columnId, cardName: '', author: this.state.author ,description: ''}]);
    this.setState({
        cardData: newState
    });
    this.saveToLocalStorage(newState);
};

export const addComment = (cardId, text) => {
    const newState = this.state.commentsData
        .concat([{id: uid(), idCard: cardId, author: this.state.author, text: text}]);
    this.setState({
        commentsData: newState
    });
    this.saveCommentsToLocalStorage(newState);
};
export const delComment = (commentId) => {
    const newState = this.state.commentsData.filter(comment => comment.id !== commentId);
    this.setState({
        commentsData: newState
    });
    this.saveCommentsToLocalStorage(newState);
};
export const editComment = (commentId, text) => {
    const newState = this.state.commentsData.map((comment) => {
        if (comment.id === commentId) {
            return {
                ...comment,
                text: text
            }
        } else {
            return comment
        }
    });
    this.setState({
        commentsData: newState
    });
    this.saveCommentsToLocalStorage(newState);
}

export const editCard = (cardId, columnId, cardName, cardDescription) => {
    const newState = this.state.cardData.map((card) => {
        if (card.id === cardId) {
            return {
                ...card,
                cardName: cardName,
                description: cardDescription,
            }
        } else {
            return card
        }
    });
    this.setState({
        cardData: newState
    });
    this.saveToLocalStorage(newState);
};

export const changeColumnName = (ColumnId, columnName) => {
    const newState = this.state.columnDataName.map((column) => {
        if (column.id === ColumnId) {
            return {
                ...column,
                columnName: columnName
            }
        } else {
            return column
        }
    });
    this.setState({
        columnDataName: newState
    });
    this.saveColumnToLocalStorage(newState);
};

export const saveToLocalStorage = (newState) => {
    localStorage.setItem('KanbanBoardData', JSON.stringify(newState))
};

export const saveCommentsToLocalStorage = (newState) => {
    localStorage.setItem('KanbanBoardComments', JSON.stringify(newState))
};

export const saveColumnToLocalStorage = (newState) => {
    localStorage.setItem('KanbanBoardColumn', JSON.stringify(newState))
};