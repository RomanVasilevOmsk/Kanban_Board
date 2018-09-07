import React from 'react';
import PropTypes from 'prop-types';
import CardItem from '../CardItem';
import { fetchCards, editCard, deleteCard, addCard } from './reducers/cards/actions';

class CardsList extends React.Component {
  state = {
    isLoadedCards: false,
  };

  componentDidMount = () => {
    this.props.fetchCards().then(() =>
      this.setState({
        isLoadedCards: true,
      }),
    );
  };

  render() {
    return (
      <div className="cards-list__wrapper">
        <div className="cards-list">
          { this.props.cardData.filter(card => card.idColumn === this.props.columnId).map(card =>
            (<CardItem
              key={card.id}
              cardId={card.id}
              columnId={card.idColumn}
              cardName={card.cardName}
              author={card.author}
              cardDescription={card.description}
              columnName={this.props.columnName}
              deleteCard={this.props.deleteCard}
              editCard={this.props.editCard}
              comments={this.props.comments}
              addComment={this.props.addComment}
              deleteComment={this.props.deleteComment}
              editComment={this.props.editComment}
            />))}
        </div>
      </div>
    );
  }
}

CardsList.propTypes = {
  // columnId: PropTypes.number.isRequired,
  // columnName: PropTypes.string.isRequired,
  // cardData: PropTypes.array.isRequired,
  // saveToLocalStorage: PropTypes.func.isRequired,
  // editCard: PropTypes.func.isRequired,
  // deleteCard: PropTypes.func.isRequired,
  // author: PropTypes.string,
  // commentsData: PropTypes.array.isRequired,
  // addComment: PropTypes.func.isRequired,
  // delComment: PropTypes.func.isRequired,
  // editComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    cardData: getCardData(state),
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchColumns,
      fetchCards,
      fetchComments,
      editCard,
      editComment,
      deleteComment,
      deleteCard,
      addCard,
      addComment,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardsList);
