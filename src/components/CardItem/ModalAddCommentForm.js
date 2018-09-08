import React from 'react';
import PropTypes from 'prop-types';

class ModalAddCommentForm extends React.Component {
  state = {
    commentValue: '',
    addButton: false,
  };

  handleChangeCommentValue = (event) => {
    this.setState({
      commentValue: event.target.value,
    });
    if (event.target.value !== '') {
      this.setState({
        addButton: true,
      });
    } else {
      this.setState({
        addButton: false,
      });
    }
  };

  handleAddComment = () => {
    this.props.addComment(this.props.cardId, this.props.user, this.state.commentValue);
    this.setState({
      commentValue: '',
      addButton: false,
    });
  }

  addButtonUnFocus = () => {
    this.setState({
      addButton: false,
    });
  };

  render() {
    return (
      <form>
        <div className="card-modal__addComment-wrapper">
          <h3 className="card-modal__addComment-title card-modal__title" >Add comment</h3>
          <textarea
            className="card-modal__addComment-text"
            value={this.state.commentValue}
            onChange={this.handleChangeCommentValue}
            placeholder="Write comment"
          />
          <button type="button" className="btn-ok" onClick={this.handleAddComment} disabled={!this.state.addButton}>
            Add comment
          </button>
        </div>
      </form>
    );
  }
}

ModalAddCommentForm.propTypes = {
  cardId: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};

export default ModalAddCommentForm;
