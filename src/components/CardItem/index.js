import React from 'react';
import PropTypes from 'prop-types';
import ModalCard from './ModalCard';
import openContentModal from '../../libs/open-modal';
class CardItem extends React.Component {
  state = {
    cardName: this.props.cardName,
    cardId: this.props.cardId,
    cardTitle: this.props.cardName,
  };

  handleOpenModal = () => {
    this.openCardModal();
  };
  handleChangeTitleClick = event => {
    event.stopPropagation();
  };

  handleDeleteCard = event => {
    event.stopPropagation();
    this.props.deleteCard(this.props.cardId);
  };

  handleChangeName = event => {
    this.setState({
      cardTitle: event.target.value,
    });
    this.props.editCard(this.props.cardId, this.props.columnId, event.target.value);
  };

  handleChangeTitle = event => {
    if (event.charCode === 13) {
      this.handleChangeName(event);
    }
    this.setState({
      cardTitle: event.target.value,
    });
  };

  handleChangeNameCard = event => {
    this.props.editCard(this.props.cardId, this.props.columnId, event.target.value);
  };

  openCardModal = () => {
    const {
      cardName,
      cardDescription,
      cardId,
      columnId,
      columnName,
      cardAuthor,
      author,
      editCard,
      addComment,
      comments,
      deleteComment,
      editComment,
      user,
    } = this.props;
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
        addComment: addComment,
        comments: comments,
        deleteComment: deleteComment,
        editComment: editComment,
        user: user,
      },
    })(ModalCard);
  };

  render() {
    // console.log('Props Item', this.props.comments);
    return (
      <div className="card-item__wrapper">
        {this.props.cardName ? (
          <div onClick={this.handleOpenModal} className="card-item__name">
            {this.props.cardName}
            <button onClick={this.handleDeleteCard} className="column__del-card">
              &times;
            </button>
          </div>
        ) : (
          <div onClick={this.openCardModal} className="card-item__name">
            <input
              className="card-item__new"
              onChange={this.handleChangeTitle}
              onClick={this.handleChangeTitleClick}
              onBlur={this.handleChangeNameCard}
              onKeyPress={this.handleChangeTitle}
              value={this.state.cardTitle ? this.state.cardTitle : ''}
              placeholder="New Card"
              autoFocus
            />
            <button onClick={this.handleDeleteCard} className="column__del-card">
              &times;
            </button>
          </div>
        )}
      </div>
    );
  }
}

CardItem.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardAuthor: PropTypes.string,
  comments: PropTypes.array.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string,
  deleteCard: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
  cardId: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default CardItem;
