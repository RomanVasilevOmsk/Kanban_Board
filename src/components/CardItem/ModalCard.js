import React from 'react';
import PropTypes from 'prop-types';
import ModalTitleForm from './ModalTitleForm';
import ModalDescriptionForm from './ModalDescriptionForm';
import ModalAddCommentForm from './ModalAddCommentForm';
import CommentsList from '../Comments/CommentsList';

class ModalCard extends React.Component {
  render() {
    // console.log('PropsModal', this.props);
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
        <ModalAddCommentForm cardId={this.props.cardId} user={this.props.user} addComment={this.props.addComment} />
        <CommentsList
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
  cardName: PropTypes.string.isRequired,
  cardAuthor: PropTypes.string,
  user: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string,
  editCard: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  cardId: PropTypes.string.isRequired,
};

export default ModalCard;
