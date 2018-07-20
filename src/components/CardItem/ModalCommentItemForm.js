import React from 'react';
import PropTypes from 'prop-types';

class ModalCommentItemForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      commentValue: this.props.commentText,
      commentChange: false
    };
    this.editCommentValue = this.editCommentValue.bind(this);
    this.editCommentState = this.editCommentState.bind(this);
    this.editComment = this.editComment.bind(this);
    this.editCommentCancel = this.editCommentCancel.bind(this);
    this.deleteComment = this.deleteComment.bind(this);

  }

  editCommentValue (event) {
    this.setState({
      commentValue: event.target.value
    });
  }

  editComment () {
    this.props.editComment(this.props.commentId, this.state.commentValue);
    this.editCommentCancel();
  }

  editCommentCancel () {
    this.setState({
      commentChange: false,
      commentValue: this.state.commentValue,
    });
  }

  editCommentState() {
    this.setState({
      commentChange: true
    });
  }

  deleteComment () {
    this.props.delComment(this.props.commentId);
  }

  render () {
    return (
      <div className="card-modal__comments-inner">
        <div className="card-modal__comments-text-wrapper">
          <p className="card-modal__comments-author">{this.props.author} : </p>
          { this.state.commentChange ?
            <div>
              <input
                className = ""
                value={this.state.commentValue}
                onChange={this.editCommentValue}
              />
              <button
                type="button"
                onClick={this.editComment}
                className="card-modal__comments-edit-button"
              >
                Save
              </button>
              <button
                type="button"
                onClick={this.editCommentCancel}
                className="card-modal__comments-edit-button"
              >
                Cancel
              </button>
            </div>
            :
            <div>
              <p className="card-modal__comments-text">{this.props.commentText} </p>
              <button
                type="button"
                onClick={this.editCommentState}
                className="card-modal__comments-edit-button"
              >
                Change
              </button>
              <button
                type="button"
                onClick={this.deleteComment}
                className="card-modal__comments-edit-button"
              >
                Delete
              </button>
            </div>
          }
        </div>
      </div>
    )
  }
}

ModalCommentItemForm.propTypes = {
  commentId: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  commentText: PropTypes.string.isRequired,
  delComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired
};

export default ModalCommentItemForm;