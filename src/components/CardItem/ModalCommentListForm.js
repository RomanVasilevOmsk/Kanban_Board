import React from 'react';
import PropTypes from 'prop-types';
import ModalCommentItemForm from './ModalCommentItemForm';

class ModalCommentListForm extends React.Component {
  render() {
      console.log('list',this.props.author);
    return (
      <form>
        <div className="card-modal__comments-wrapper">
          <h3 className="card-modal__comments-title card-modal__title">Comments</h3>
          <div className="card-modal__comments-item-wrapper">
            { this.props.commentsData.filter(card => card.idCard === this.props.cardId).map(comment =>
              (<ModalCommentItemForm
                key={comment.id}
                author={this.props.author}
                commentId={comment.id}
                commentText={comment.text}
                delComment={this.props.delComment}
                editComment={this.props.editComment}
              />))
          }
          </div>
        </div>
      </form>
    );
  }
}

ModalCommentListForm.propTypes = {
  commentsData: PropTypes.array.isRequired,
  author: PropTypes.string.isRequired,
  cardId: PropTypes.string.isRequired,
  delComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
};

export default ModalCommentListForm;
