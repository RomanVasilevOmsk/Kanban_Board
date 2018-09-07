import React from 'react';
import PropTypes from 'prop-types';
import ModalCard from './ModalCard';
import CardTitle from './CardTitle';
import openContentModal from '../../libs/open-modal';

class CardItem extends React.Component {
  openCardModal = () => {
    const { cardName, cardDescription, cardId, columnId, columnName, cardAuthor, author, editCard } = this.props;
    openContentModal({
      submit: (closeModal, values) => {
        closeModal();
      },
      props: {
        cardName: cardName,
        cardDescription: cardDescription,
        cardId: cardId,
        columnId: columnId,
        columnName: columnName,
        cardAuthor: cardAuthor,
        author: author,
        editCard: editCard,
      },
    })(ModalCard);
  };

  render() {
    return (
      <div className="card-item__wrapper">
        <CardTitle
          cardName={this.props.cardName}
          openModal={this.openCardModal}
          columnId={this.props.columnId}
          editCard={this.props.editCard}
          deleteCard={this.props.deleteCard}
          cardId={this.props.cardId}
          handleDeleteCard={this.handleDeleteCard}
        />
      </div>
    );
  }
}

CardItem.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardAuthor: PropTypes.string,
  author: PropTypes.string.isRequired,
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string,
  deleteCard: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
  cardId: PropTypes.string.isRequired,
  commentsData: PropTypes.array.isRequired,
  addComment: PropTypes.func.isRequired,
  delComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
};

export default CardItem;
