import React from 'react';
import PropTypes from 'prop-types';
import CommentsItem from '../Comments/CommentItem';

class CommentsList extends React.Component {
  render() {
    return (
      <form>
        <div className="card-modal__comments-wrapper">
          <h3 className="card-modal__comments-title card-modal__title">Comments</h3>
          <div className="card-modal__comments-item-wrapper">
            {this.props.comments.filter(card => card.idCard === this.props.cardId).map(comment => (
              <CommentsItem
                key={comment.id}
                cardId={this.props.cardId}
                commentId={comment.id}
                author={comment.author}
                commentText={comment.text}
                deleteComment={this.props.deleteComment}
                editComment={this.props.editComment}
              />
            ))}
          </div>
        </div>
      </form>
    );
  }
}

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
  cardId: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
};

export default CommentsList;
