import React from 'react';
import CardItem from '../CardItem';
import PropTypes from 'prop-types';




class CardsList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cardData: JSON.parse(localStorage.getItem('mydata')),
    };
  }

  deleteCard = (cardId) => {
    const newState = this.state.cardData.filter(card => card.id !== cardId);
    this.setState({
      cardData: newState
    });
    this.saveToLocalStorage(newState)
  };

  saveToLocalStorage = (newState) => {
    localStorage.setItem('mydata', JSON.stringify(newState))
  };

  render() {
    return (
      <div className="cards-list__wrapper">
        <div className="cards-list">
          { this.state.cardData.filter(card => card.idColumn === this.props.columnId).map((card) =>
            <CardItem
              key={card.id}
              index={card.id}
              cardName = {card.cardName}
              columnName = {this.props.columnName}
              deleteCard = {this.deleteCard}
            />
          )}
        </div>
      </div>
    );
  }
}

CardsList.propTypes = {
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired
};

export default CardsList;
