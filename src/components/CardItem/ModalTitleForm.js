import React from 'react';
import PropTypes from 'prop-types';



class ModalTitleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardTitle: this.props.cardName,
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeNameCard = this.handleChangeNameCard.bind(this);
  }
  handleChangeName = (event) => {
    this.setState({
      cardTitle: event.target.value,
    });
    this.props.editCard(this.props.cardId, this.props.columnId, event.target.value);
  }

  handleChangeNameCard = (event) => {
    this.props.editCard(this.props.cardId, this.props.columnId, event.target.value);
  }

  render() {
    return (
      <form>
        <span className="card-modal__column-name">{this.props.columnName} / </span>
        <input
          className="card-modal__name"
          onChange={this.handleChangeName}
          onKeyPress={this.handleChangeName}
          onBlur={this.handleChangeNameCard}
          value={this.state.cardTitle ? this.state.cardTitle : ''}
          placeholder={this.state.cardTitle ? '' : 'Enter the name of the card'}
        />
        <p className="card-modal__author">
          {this.props.cardAuthor ? this.props.cardAuthor : 'Author'}
        </p>
      </form>
    );
  }
}

ModalTitleForm.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardAuthor: PropTypes.string,
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired,
  editCard: PropTypes.func.isRequired,
  cardId: PropTypes.string.isRequired,
};

export default ModalTitleForm;
