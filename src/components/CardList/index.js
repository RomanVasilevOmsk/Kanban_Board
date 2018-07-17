import React from 'react';
import CardItem from '../CardItem';
import PropTypes from 'prop-types';

class CardsList extends React.Component {
  render() {
    return (
      <div className="cards-list__wrapper">
        <div className="cards-list">
          { this.props.cardData.filter(card => card.idColumn === this.props.columnId).map((card) =>
            <CardItem
              key={card.id}
              index={card.id}
              columnId = {card.idColumn}
              cardName = {card.cardName}
              author = {card.author}
              cardDescription = {card.description}
              columnName = {this.props.columnName}
              deleteCard = {this.props.deleteCard}
              editCard = {this.props.editCard}
            />
          )}
        </div>
      </div>
    );
  }
}

CardsList.propTypes = {
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired,
  cardData: PropTypes.array.isRequired,
  saveToLocalStorage: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired
};

export default CardsList;
