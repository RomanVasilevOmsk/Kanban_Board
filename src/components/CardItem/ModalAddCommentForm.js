import React from 'react';
import PropTypes from 'prop-types';

class ModalAddCommentForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      commentValue: '',
      addButton: false
    };
    this.handleAddComment = this.handleAddComment.bind(this);
    this.handleChangeCommentValue = this.handleChangeCommentValue.bind(this);
    this.addButtonUnFocus = this.addButtonUnFocus.bind(this);
  }

  handleChangeCommentValue (event) {
    this.setState({
      commentValue: event.target.value
    });
    if (event.target.value !== '') {
      this.setState({
        addButton: true
      });
    } else {
      this.setState({
        addButton: false
      });
    }
  };

  handleAddComment () {
    this.props.addComment(this.props.cardId, this.state.commentValue)
    this.setState({
      commentValue: '',
      addButton: false
    })
  }

  addButtonUnFocus () {
    this.setState({
      addButton: false
    });
  };

  render () {
    return (
      <form>
        <div className="card-modal__addComment-wrapper">
          <h3 className="card-modal__addComment-title card-modal__title" >Add comment</h3>
          <textarea
            className="card-modal__addComment-text"
            value={this.state.commentValue}
            onChange={this.handleChangeCommentValue}
            placeholder="Write comment">
          </textarea>
          <button
            type="button"
            className="btn-ok"
            onClick={this.handleAddComment}
            disabled={ !this.state.addButton}
          >
              Add comment
          </button>
        </div>
      </form>
    );
  }
}

ModalAddCommentForm.propTypes = {
  cardId: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired
};

export default ModalAddCommentForm;
