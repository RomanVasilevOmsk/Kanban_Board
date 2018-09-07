import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getCardData, getAuthorName } from '../../selectors';
import { fetchCards, editCard, deleteCard } from '../../reducers/cards/actions';
import CardItem from '../CardItem';

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
          {this.props.cardData.filter(card => card.idColumn === this.props.columnId).map(card => (
            <CardItem
              key={card.id}
              cardId={card.id}
              columnId={card.idColumn}
              cardName={card.cardName}
              cardAuthor={card.author}
              author={this.props.author}
              cardDescription={card.description}
              columnName={this.props.columnName}
              deleteCard={this.props.deleteCard}
              editCard={this.props.editCard}
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
  cardData: PropTypes.array.isRequired,
  fetchCards: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    author: getAuthorName(state),
    cardData: getCardData(state),
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCards,
      editCard,
      deleteCard,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardsList);
