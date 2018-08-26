import React from 'react';
import PropTypes from 'prop-types';

class AddCardButton extends React.Component {
  

    addCard = () => {
      const {columnId, author, addCard } = this.props;
      console.log('this.props.columnId, this.props.author', this.props.columnId, this.props.author);
      this.props.addCard(this.props.columnId, this.props.author);
    };

    render() {
      return (
        <button
          className="column__add-card"
          onClick={this.addCard}
        >
          +
        </button>
      );
    }
}

AddCardButton.propTypes = {
  addCard: PropTypes.func.isRequired,
};

export default AddCardButton;
