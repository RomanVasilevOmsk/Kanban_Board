import React from 'react';
import uid from 'uid';
import Column from '../Column';
import ModalUser from '../ModalUser';




class ColumnList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      cardData: JSON.parse(localStorage.getItem('KanbanBoardData')),
      author: '',
      modalVisible: ( JSON.parse( localStorage.getItem('KanbanBoardUser')) ? false : true )
    };
  }
  addAuthorName = (authorName) => {
    const checkAuthor = localStorage.getItem('KanbanBoardUser');
    let visible = true;
    if (!checkAuthor){
      visible = true;
      localStorage.setItem('KanbanBoardUser', JSON.stringify(authorName));
      this.setState({
        author: authorName
      });
    } else {
      visible = false;
    }
    this.setState({
      modalVisible: visible
    });
  };


  saveToLocalStorage = (newState) => {
    localStorage.setItem('KanbanBoardData', JSON.stringify(newState))
  };

  deleteCard = (cardId) => {
    const newState = this.state.cardData.filter(card => card.id !== cardId);
    this.setState({
      cardData: newState
    });
    this.saveToLocalStorage(newState)
  };

  addCard = (columnId) => {
    const newState = this.state.cardData.concat([{id:uid(),idColumn: columnId,cardName:'', author:this.state.author ,description:''}]);
    this.setState({
      cardData: newState
    });
    this.saveToLocalStorage(newState);
  };
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
    })
    this.setState({
      cardData: newState
    });
    this.saveToLocalStorage(newState);
  };
  render() {
    // this.addAuthorName();
    const columnData = [
      {
        id: 1,
        columnName: 'TODO',
      },
      {
        id: 2,
        columnName: 'In Progress',
      },
      {
        id: 3,
        columnName: 'Testing',
      },
      {
        id: 4,
        columnName: 'Done',
      }

    ];
    return (
      <div className="column-list__wrapper">
        <div className="column-list">
          { columnData.map((column) =>
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
