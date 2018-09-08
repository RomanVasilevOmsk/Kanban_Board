import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardItem from '../CardItem';
import { editCard, deleteCard } from '../../reducers/cards/actions';
import { addComment, editComment, deleteComment } from '../../reducers/comments/actions';
import { getCardData, getComments, getAuthorName } from '../../selectors';

class CardsList extends React.Component {
  render() {
    return (
      <div className="cards-list__wrapper">
        <div className="cards-list">
          {this.props.cardData.filter(card => card.idColumn === this.props.columnId).map(card => (
            <CardItem
              key={card.id}
              cardId={card.id}
              columnId={card.idColumn}
              cardName={card.cardName}
              author={card.author}
              user={this.props.user}
              comments={this.props.comments}
              cardDescription={card.description}
              columnName={this.props.columnName}
              deleteCard={this.props.deleteCard}
              editCard={this.props.editCard}
              editComment={this.props.editComment}
              deleteComment={this.props.deleteComment}
              addComment={this.props.addComment}
            />
          ))}
        </div>
      </div>
    );
  }
}

CardsList.propTypes = {
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  cardData: PropTypes.array.isRequired,
  editCard: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  author: PropTypes.string,
  user: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    cardData: getCardData(state),
    comments: getComments(state),
    user: getAuthorName(state),
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      editCard,
      deleteCard,
      addComment,
      editComment,
      deleteComment,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardsList);
