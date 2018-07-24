import React from 'react';
import PropTypes from 'prop-types';
import ModalCard from './ModalCard';
import CardTitle from './CardTitle';

class CardItem extends React.Component {
    state = {
      modalVisible: false,
    };

  openModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  closeModal = (value) => {
    this.setState({
      modalVisible: value,
    });
  };

  render() {
    return (
      <div className="card-item__wrapper">
        <CardTitle
          cardName={this.props.cardName}
          modalVisible={this.state.modalVisible}
          openModal={this.openModal}
          columnId={this.props.columnId}
          editCard={this.props.editCard}
          deleteCard={this.props.deleteCard}
          cardId={this.props.cardId}
          handleDeleteCard={this.handleDeleteCard}
        />
        <ModalCard
          modalVisible={this.state.modalVisible}
          closeModal={this.closeModal}
          cardName={this.props.cardName}
          cardDescription={this.props.cardDescription}
          cardId={this.props.cardId}
          cardTitle={this.state.cardTitle}
          columnId={this.props.columnId}
          columnName={this.props.columnName}
          author={this.props.author}
          editCard={this.props.editCard}
          commentsData={this.props.commentsData}
          addComment={this.props.addComment}
          delComment={this.props.delComment}
          editComment={this.props.editComment}
        />
      </div>
    );
  }
}

CardItem.propTypes = {
  cardName: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string,
  deleteCard: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
  cardId: PropTypes.string.isRequired,
  commentsData: PropTypes.array.isRequired,
  addComment: PropTypes.func.isRequired,
  delComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
};

export default CardItem;
