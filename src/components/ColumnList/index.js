import React from 'react';
import uid from 'uid';
import Column from '../Column';


class ColumnList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cardData: JSON.parse(localStorage.getItem('mydata')),
    };
  }

  saveToLocalStorage = (newState) => {
    localStorage.setItem('mydata', JSON.stringify(newState))
  };

  deleteCard = (cardId) => {
    const newState = this.state.cardData.filter(card => card.id !== cardId);
    this.setState({
      cardData: newState
    });
    this.saveToLocalStorage(newState)
  };

  addCard = (columnId) => {
    const newState = this.state.cardData.concat([{id:uid(),idColumn: columnId,cardName:'',author:'',description:''}]);
    this.setState({
      cardData: newState
    });
    this.saveToLocalStorage(newState);
  };

  editCard = (cardId, columnId, cardName, cardDescription ) => {
    const newState = this.state.cardData.map((card) => {
      if(card.id === cardId) {
        return {
          ...card,
          cardName: cardName,
          description: cardDescription,
        };
      }else{
        return card;
      }
    });
    this.setState({
      cardData: newState,
    });
    this.saveToLocalStorage(newState);
  };

  render() {
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
            />
          )}
        </div>
      </div>
    );
  }
}


export default ColumnList;
