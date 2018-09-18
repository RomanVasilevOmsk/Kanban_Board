import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import ModalAddCommentForm from './ModalAddCommentForm';
import CommentsList from '../Comments/CommentsList';

class ModalCard extends React.Component {
  onSubmit = values => {
    this.props.editCard(this.props.cardId, this.props.columnId, values.cardName, values.userDesc);
  };
  render() {
    console.log('Props', this.props);
    //Здесь не меняются пропсы при перередере
    return (
      <div>
        <Form
          onSubmit={this.onSubmit}
          initialValues={{ cardName: this.props.cardName, userDesc: this.props.cardDescription }}
          render={({ handleSubmit, submitting, pristine }) => (
            <div>
              <span className="card-modal__column-name">{this.props.columnName} / </span>
              <Field
                name="cardName"
                className="card-modal__name"
                component="input"
                placeholder="Enter the name of the card"
              />
              <p className="card-modal__author">{this.props.author ? this.props.author : 'Author'}</p>
              <div className="card-modal__description-wrapper">
                <h3 className="card-modal__description-title card-modal__title">Description</h3>
                <Field
                  name="userDesc"
                  className="card-modal__description-text"
                  component="textarea"
                  placeholder="Enter card description"
                />
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={submitting || pristine}
                  className="card-modal__description-btn btn-ok"
                >
                  Change
                </button>
              </div>
            </div>
          )}
        />
        <ModalAddCommentForm cardId={this.props.cardId} user={this.props.user} addComment={this.props.addComment} />
        <CommentsList
          comments={this.props.comments}
          author={this.props.author}
          cardId={this.props.cardId}
          deleteComment={this.props.deleteComment}
          editComment={this.props.editComment}
        />
      </div>
    );
  }
}

ModalCard.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardAuthor: PropTypes.string,
  user: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string,
  editCard: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  cardId: PropTypes.string.isRequired,
};

export default ModalCard;
