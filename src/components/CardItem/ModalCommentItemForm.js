import React from 'react';
import PropTypes from 'prop-types';

class ModalCommentItemForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      commentValue: this.props.commentText,
      commentChange: false,
      saveButtonDisabled: true
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
    if (event.target.value !== '') {
      this.setState({
        saveButtonDisabled: true
      });
    } else {
      this.setState({
        saveButtonDisabled: false
      });
    }

  }

  editComment () {
    this.props.editComment(this.props.commentId, this.state.commentValue);
    this.editCommentCancel();
  }

  editCommentCancel () {
    this.setState({
      commentChange: false,
      commentValue: this.props.commentText,
    });
  }

  editCommentState() {
    this.setState({
      commentChange: true,
      commentValue: this.props.commentText,
    });
  }

  deleteComment () {
    this.props.delComment(this.props.commentId);
  }

  render () {
    return (
      <div className="card-modal__comments-inner">
        <div className="card-modal__comments-text-wrapper">
          <p className="card-modal__comments-author">{this.props.author} </p>
          { this.state.commentChange ?
            <div className="card-modal__comments-block">
              <input
                className ="card-modal__comments-text-input"
                value={this.state.commentValue}
                onChange={this.editCommentValue}
                autoFocus
              />
              <div className="card-modal__comments-edit-wrapper">
                <button
                  type="button"
                  onClick={this.editComment}
                  disabled={ this.state.saveButtonDisabled ? false :  true}
                  className="card-modal__comments-edit-button card-modal__comments-edit-button--ok btn-ok"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={this.editCommentCancel}
                  className="card-modal__comments-edit-button btn-cancel"
                >
                  Cancel
                </button>
              </div>
            </div>
            :
            <div className="card-modal__comments-block">
              <p className="card-modal__comments-text">{this.props.commentText} </p>
              <div className="card-modal__comments-edit-wrapper">
                <button
                  type="button"
                  onClick={this.editCommentState}
                  className="card-modal__comments-edit-button card-modal__comments-edit-button--ok  btn-ok"
                >
                  Change
                </button>
                <button
                  type="button"
                  onClick={this.deleteComment}
                  className="card-modal__comments-edit-button btn-cancel"
                >
                  Delete
                </button>
              </div>
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