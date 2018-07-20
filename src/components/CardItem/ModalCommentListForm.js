import React from 'react';
import PropTypes from 'prop-types';
import ModalCommentItemForm from './ModalCommentItemForm';

class ModalCommentListForm extends React.Component {

  render () {
    return (
      <form>
        <div className="card-modal__comments-wrapper">
          <h3 className="card-modal__comments-title">Comments</h3>
          { this.props.commentsData.filter(card => card.idCard === this.props.cardId).map((comment) =>
            <ModalCommentItemForm
              key={comment.id}
              author = {comment.author}
              commentId = {comment.id}
              commentText = {comment.text}
              delComment = {this.props.delComment}
              editComment = {this.props.editComment}
            />
          )}
        </div>
      </form>
    )
  }
}

ModalCommentListForm.propTypes = {
  commentsData: PropTypes.array.isRequired,
  cardId: PropTypes.string.isRequired,
  delComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired
};

export default ModalCommentListForm;