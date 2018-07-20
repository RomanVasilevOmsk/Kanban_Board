import React from 'react';
import PropTypes from 'prop-types';

class CardTitle extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalVisible: this.props.modalVisible,
      cardName: this.props.cardName,
      cardId: this.props.cardId,
      cardTitle: this.props.cardName
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeNameCard = this.handleChangeNameCard.bind(this);
    this.handleChangeTitleClick = this.handleChangeTitleClick.bind(this);
  };

  handleOpenModal () {
    this.props.openModal(true);
  };

  handleChangeTitleClick (event) {
    event.stopPropagation()
  };

  handleDeleteCard(event) {
    event.stopPropagation();
    this.props.deleteCard(this.props.cardId)
  };

  handleChangeName (event) {
    this.setState({
      cardTitle: event.target.value,
    })
    this.props.editCard(this.props.cardId, this.props.columnId, event.target.value)
  };

  handleChangeTitle (event) {
    if (event.charCode === 13) {
      this.handleChangeName(event);
    }
    this.setState({
      cardTitle: event.target.value
    })
  };

  handleChangeNameCard (event) {
    this.props.editCard(this.props.cardId, this.props.columnId, event.target.value)
  }

  render () {
    return (
      <div>
        { this.props.cardName ?
          <div onClick={this.handleOpenModal} className="card-item__name">{ this.props.cardName }
            <button onClick={this.handleDeleteCard} className="column__del-card">&times;</button>
          </div> :
          <div onClick={this.handleOpenModal} className="card-item__name">
            <input
              className=""
              onChange={this.handleChangeTitle}
              onClick={this.handleChangeTitleClick}
              onBlur={this.handleChangeNameCard}
              onKeyPress={this.handleChangeTitle}
              value={this.state.cardTitle ? this.state.cardTitle : ''}
              placeholder='New Card'
            />
            <button onClick={this.handleDeleteCard} className="column__del-card">&times;</button>
          </div>
        }
      </div>
    );
  }
}

CardTitle.propTypes = {
  openModal : PropTypes.func.isRequired,
  editCard : PropTypes.func.isRequired,
  deleteCard : PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
  columnId: PropTypes.number.isRequired,
  cardId: PropTypes.string.isRequired
};

export default CardTitle;
