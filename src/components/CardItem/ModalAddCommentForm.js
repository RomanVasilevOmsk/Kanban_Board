import React from 'react';
import PropTypes from 'prop-types';

class ModalAddCommentForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      commentValue: ''
    };
    this.handleAddComment = this.handleAddComment.bind(this);
    this.handleChangeCommentValue = this.handleChangeCommentValue.bind(this);
  }

  handleChangeCommentValue(event){
    this.setState({
      commentValue: event.target.value
    });
  };

  handleAddComment(){
    this.props.addComment(this.props.cardId, this.state.commentValue)
    this.setState({
      commentValue: ''
    });
  }

  render () {
    return (
      <form>
        <div className="card-modal__addComment-wrapper">
          <h3 className="card-modal__addComment-title">Add comment</h3>
          <textarea
            className="card-modal__addComment-text"
            value={this.state.commentValue}
            onChange={this.handleChangeCommentValue} placeholder="Write comment">
          </textarea>
          <button type="button" onClick={this.handleAddComment}>Add comment</button>
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