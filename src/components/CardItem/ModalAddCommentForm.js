import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';

class ModalAddCommentForm extends React.Component {
  onSubmit = values => {
    this.props.addComment(this.props.cardId, this.props.user, values.commentValue);
    values.commentValue = '';
  };
  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        initialValues={{ commentValue: '' }}
        render={({ handleSubmit, submitting, pristine }) => (
          <div>
            <div className="card-modal__addComment-wrapper">
              <h3 className="card-modal__addComment-title card-modal__title"> Add comment</h3>
              <Field
                name="commentValue"
                className="card-modal__addComment-text"
                component="textarea"
                placeholder="Write comment"
              />
              <button type="button" onClick={handleSubmit} disabled={submitting || pristine} className="btn-ok">
                Add comment
              </button>
            </div>
          </div>
        )}
      />
    );
  }
}

ModalAddCommentForm.propTypes = {
  cardId: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};

export default ModalAddCommentForm;
