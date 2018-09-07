import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import ModalTitleForm from './ModalTitleForm';
import ModalDescriptionForm from './ModalDescriptionForm';
import ModalAddCommentForm from './ModalAddCommentForm';
import ModalCommentListForm from './ModalCommentListForm';

class ModalCard extends React.Component {
  // closeModal = () => {
  //   this.props.closeModal(false);
  // }

  render() {
      // console.log('author: ', this.props.author);
      // console.log('this.props.cardDescription: ', this.props.cardDescription);
      // console.log('commentsDat!a', this.props.commentsData);
    return (
      <div>
          <ModalTitleForm
            columnName={this.props.columnName}
            cardId={this.props.cardId}
            cardAuthor={this.props.cardAuthor}
            cardName={this.props.cardName}
            columnId={this.props.columnId}
            editCard={this.props.editCard}
          />
          <ModalDescriptionForm
            cardId={this.props.cardId}
            cardDescription={this.props.cardDescription}
            columnId={this.props.columnId}
            cardName={this.props.cardName}
            editCard={this.props.editCard}
          />
          <ModalAddCommentForm
            cardId={this.props.cardId}
            author={this.props.author}
            addComment={this.props.addComment}
          />
         <ModalCommentListForm
            comments={this.props.comments}
            author={this.props.author}
            cardId={this.props.cardId}
            deleteComment={this.props.deleteComment}
            editComment={this.props.editComment}
          />
      </div>
    );
  }
}

ModalCard.propTypes = {
  // cardName: PropTypes.string.isRequired,
  // cardAuthor: PropTypes.string,
  // author: PropTypes.string.isRequired,
  // columnId: PropTypes.number.isRequired,
  // columnName: PropTypes.string.isRequired,
  // cardDescription: PropTypes.string,
  // modalVisible: PropTypes.bool.isRequired,
  // closeModal: PropTypes.func.isRequired,
  // editCard: PropTypes.func.isRequired,
  // cardId: PropTypes.string.isRequired,
  // commentsData: PropTypes.array.isRequired,
  // addComment: PropTypes.func.isRequired,
  // delComment: PropTypes.func.isRequired,
  // editComment: PropTypes.func.isRequired,
};

export default ModalCard;
