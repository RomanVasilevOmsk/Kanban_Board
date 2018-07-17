import React from 'react'
import PropTypes from 'prop-types';
import CardsList from '../CardList';

class Column extends React.Component {
  handleAddCard = (event) => {
    event.preventDefault();
    this.props.addCard(this.props.columnId);
  };

  render() {
    return (
      <div className="column__wrapper">
        <div className="column__header">
          <h3 className="column__name">{this.props.columnName}</h3>
          <button className="column__add-card" onClick={this.handleAddCard}>+</button>
        </div>
        <CardsList
          columnId = {this.props.columnId}
          columnName = {this.props.columnName}
          cardData = {this.props.cardData}
          saveToLocalStorage = {this.props.saveToLocalStorage}
          deleteCard = {this.props.deleteCard}
          addCard = {this.props.addCard}
          editCard = {this.props.editCard}
          author ={this.props.author}
        />
      </div>
    );
  }
}

Column.propTypes = {
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired,
  cardData: PropTypes.array.isRequired,
  saveToLocalStorage: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired
};

export default Column;
