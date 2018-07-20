import React from 'react';
import PropTypes from 'prop-types';

class ModalDescriptionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      cardDescription: this.props.cardDescription,
      changeButton: false
    };
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.changeButtonFocus = this.changeButtonFocus.bind(this);
    this.changeButton = this.changeButton.bind(this);
    this.changeButtonUnFocus = this.changeButtonUnFocus.bind(this);
  }

  handleChangeDescription (event) {
    this.setState({
      cardDescription: event.target.value
    });
    this.props.editCard(this.props.cardId, this.props.columnId,this.props.cardName, event.target.value)
  }

  changeButton (){
    this.props.editCard(this.props.cardId, this.props.columnId,this.props.cardName, this.state.cardDescription)
    this.setState({
      changeButton: false
    });
  };

  changeButtonFocus () {
    this.setState({
      changeButton: true
    });
  }

  changeButtonUnFocus () {
    this.setState({
      changeButton: false
    });
  }

  render () {
    return (
      <form>
        <div className="card-modal__description-wrapper">
          <h3 className="card-modal__description-title">Description</h3>
          <textarea
            className="card-modal__description-text"
            onChange={this.handleChangeDescription}
            onFocus={this.changeButtonFocus}
            onBlur={this.changeButtonUnFocus}
            value={this.state.cardDescription ? this.state.cardDescription : ''}
            placeholder={this.state.cardDescription ? '' : 'Enter card description'}
          />
          { this.state.changeButton ?
            <button type="button" onClick={this.changeButton} className="" >Change</button> :
            ''
          }
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