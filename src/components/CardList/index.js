import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardItem from '../CardItem';
import { editCard, deleteCard } from '../../reducers/cards/actions';
import { getCardData, getAuthorName } from '../../selectors';

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
  editCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  author: PropTypes.string,
  user: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    cardData: getCardData(state),
    user: getAuthorName(state),
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      editCard,
      deleteCard,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardsList);
