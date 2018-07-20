import React from 'react';
import uid from 'uid';
import Column from '../Column';
import ModalUser from '../ModalUser';

class ColumnList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      cardData: JSON.parse(localStorage.getItem('KanbanBoardData')),
      commentsData: JSON.parse(localStorage.getItem('KanbanBoardComments')),
      columnDataName: JSON.parse(localStorage.getItem('KanbanBoardColumn')),
      author: JSON.parse(localStorage.getItem('KanbanBoardUser')),
      modalVisible: ( JSON.parse( localStorage.getItem('KanbanBoardUser')) ? false : true )
    };
  }

  addAuthorName = (authorName) => {
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

  deleteCard = (cardId) => {
    const newState = this.state.cardData.filter(card => card.id !== cardId);
    this.setState({
      cardData: newState
    });
    this.saveToLocalStorage(newState)
  };

  addCard = (columnId) => {
    const newState = this.state.cardData
      .concat([{id: uid(), idColumn: columnId, cardName: '', author: this.state.author ,description: ''}]);
    this.setState({
      cardData: newState
    });
    this.saveToLocalStorage(newState);
  };

  addComment = (cardId, text) => {
    const newState = this.state.commentsData
      .concat([{id: uid(), idCard: cardId, author: this.state.author, text: text}]);
    this.setState({
      commentsData: newState
    });
    this.saveCommentsToLocalStorage(newState);
  };
  delComment = (commentId) => {
    const newState = this.state.commentsData.filter(comment => comment.id !== commentId);
    this.setState({
      commentsData: newState
    });
    this.saveCommentsToLocalStorage(newState);
  };
  editComment = (commentId, text) => {
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

  editCard = (cardId, columnId, cardName, cardDescription) => {
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

  changeColumnName = (ColumnId, columnName) => {
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

  saveToLocalStorage = (newState) => {
    localStorage.setItem('KanbanBoardData', JSON.stringify(newState))
  };

  saveCommentsToLocalStorage = (newState) => {
    localStorage.setItem('KanbanBoardComments', JSON.stringify(newState))
  };

  saveColumnToLocalStorage = (newState) => {
    localStorage.setItem('KanbanBoardColumn', JSON.stringify(newState))
  };

  render () {
    return (
      <div className="column-list__wrapper">
        <div className="column-list">
          { this.state.columnDataName.map((column) =>
            <Column
              key={column.id}
              columnId = {column.id}
              columnName = {column.columnName}
              cardData = {this.state.cardData}
              saveToLocalStorage = {this.saveToLocalStorage}
              deleteCard = {this.deleteCard}
              addCard = {this.addCard}
              editCard = {this.editCard}
              author ={this.state.author}
              commentsData = {this.state.commentsData}
              addComment = {this.addComment}
              changeColumnName = {this.changeColumnName}
              delComment = {this.delComment}
              editComment = {this.editComment}
            />
          )}
        </div>
        <ModalUser
          addAuthorName = {this.addAuthorName}
          author ={this.state.author}
          modalVisible = {this.state.modalVisible}
        />
      </div>
    );
  }
}

export default ColumnList;
