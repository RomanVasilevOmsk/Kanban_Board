import React from 'react';
import PropTypes from 'prop-types';

class ModalDescriptionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDescription: this.props.cardDescription,
      changeButton: false,
    };
  }

  handleChangeDescription = (event) => {
    this.setState({
      cardDescription: event.target.value,
    });
    if (event.target.value !== '') {
      this.setState({
        changeButton: true,
      });
    } else {
      this.setState({
        changeButton: false,
      });
    }
  }

  changeButton = () => {
    this.props.editCard(this.props.cardId, this.props.columnId, this.props.cardName, this.state.cardDescription);
    this.setState({
      changeButton: false,
    });
  };

  render() {
    return (
      <form>
        <div className="card-modal__description-wrapper">
          <h3 className="card-modal__description-title card-modal__title">Description</h3>
          <textarea
            className="card-modal__description-text"
            onChange={this.handleChangeDescription}
            value={this.state.cardDescription ? this.state.cardDescription : ''}
            placeholder={this.state.cardDescription ? '' : 'Enter card description'}
          />
          <button
            type="button"
            disabled={!this.state.changeButton}
            onClick={this.changeButton}
            className="card-modal__description-btn btn-ok"
          >
            Change
          </button>
        </div>
      </form>
    );
  }
}

ModalDescriptionForm.propTypes = {
  cardName: PropTypes.string.isRequired,
  columnId: PropTypes.number.isRequired,
  cardDescription: PropTypes.string,
  editCard: PropTypes.func.isRequired,
  cardId: PropTypes.string.isRequired,
};

export default ModalDescriptionForm;
