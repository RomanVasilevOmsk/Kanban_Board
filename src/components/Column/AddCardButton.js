import React from 'react'
import PropTypes from 'prop-types';

class AddCardButton extends React.Component {
    handleAddCard = () => {
      this.props.addCard(this.props.columnId);
    };

    render () {
      return (
        <button
          className="column__add-card"
          onClick={this.handleAddCard}>+</button>
      );
    }
}

AddCardButton.propTypes = {
  addCard: PropTypes.func.isRequired
};

export default AddCardButton;
