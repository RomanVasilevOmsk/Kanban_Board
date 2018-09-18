import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';

class CommentsItem extends React.Component {
  state = {
    commentChange: false,
  };

  editCommentCancel = () => {
    this.setState({
      commentChange: false,
    });
  };

  editCommentState = () => {
    this.setState({
      commentChange: true,
    });
  };

  onSubmit = values => {
    this.props.editComment(this.props.commentId, values.listCommentValue);
    this.setState({
      commentChange: false,
    });
  };

  handleDeleteComment = () => {
    this.props.deleteComment(this.props.commentId);
  };

  render() {
    return (
      <div className="card-modal__comments-inner">
        <div className="card-modal__comments-text-wrapper">
          <p className="card-modal__comments-author">{this.props.author} </p>
          {this.state.commentChange ? (
            <div className="card-modal__comments-block">
              <Form
                onSubmit={this.onSubmit}
                initialValues={{ listCommentValue: this.props.commentText }}
                render={({ handleSubmit, submitting, pristine }) => (
                  <div>
                    <div className="card-modal__addComment-wrapper">
                      <h3 className="card-modal__addComment-title card-modal__title"> Add comment</h3>
                      <Field
                        name="listCommentValue"
                        className="card-modal__comments-text-input"
                        component="input"
                        autoFocus
                      />
                      <div className="card-modal__comments-edit-wrapper">
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          disabled={submitting || pristine}
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
                  </div>
                )}
              />
            </div>
          ) : (
            <div className="card-modal__comments-block">
              <p className="card-modal__comments-text">{this.props.commentText}</p>
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
                  onClick={this.handleDeleteComment}
                  className="card-modal__comments-edit-button btn-cancel"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

CommentsItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  commentValue: PropTypes.string,
  commentId: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  commentText: PropTypes.string.isRequired,
  editComment: PropTypes.func.isRequired,
};

export default CommentsItem;
