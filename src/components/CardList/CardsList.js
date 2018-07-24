import React from 'react';
import CardItem from '../CardItem';

class CardsList extends React.Component {
  render() {
    return (
      <div className="cards-list__wrapper">
        <div className="cards-list">
        {this.props.cardData
        .filter(card => card.idColumn === this.props.columnId).map(card =>
          (<CardItem
            key={card.id}
            cardId={card.id}
            columnId={card.idColumn}
            cardName={card.cardName}
            author={card.author}
            cardDescription={card.description}
            columnName={this.props.columnName}
            deleteCard={this.props.deleteCard}
            editCard={this.props.editCard}
            commentsData={this.props.commentsData}
            addComment={this.props.addComment}
            delComment={this.props.delComment}
            editComment={this.props.editComment}
          />
         ))
      }
        </div>
      </div>);
  }
}


export default CardsList;
