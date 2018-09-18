import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import ModalCard from './ModalCard';
import openContentModal from '../../libs/open-modal';
class CardItem extends React.Component {
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

  onSubmit = values => {
    this.props.editCard(this.props.cardId, this.props.columnId, values.cardNameNew);
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
    console.log('Props Card item', this.props);
    //Здесь идет перерендер, а у потомка нет
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
          <div onClick={this.handleChangeTitleClick} className="card-item__name">
            <Form
              onSubmit={this.onSubmit}
              validate={values => {
                const errors = {};
                if (!values.cardNameNew) {
                  errors.cardNameNew = 'error';
                }
                return errors;
              }}
              render={({ handleSubmit }) => (
                <Field name="cardNameNew">
                  {({ input, meta }) => (
                    <div>
                      <input
                        {...input}
                        onBlur={handleSubmit}
                        type="text"
                        autoFocus
                        className={`card-item__new card-item__new--${meta.error && meta.touched && meta.error}`}
                        placeholder="New Card"
                      />
                    </div>
                  )}
                </Field>
              )}
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
