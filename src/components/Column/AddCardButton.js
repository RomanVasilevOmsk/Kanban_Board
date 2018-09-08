import React from 'react';
import PropTypes from 'prop-types';

class AddCardButton extends React.Component {
  render() {
    const { columnId, author, addCard } = this.props;
    return (
      <button className="column__add-card" onClick={() => addCard(columnId, author)}>
        {'+'}
      </button>
    );
  }
}

AddCardButton.propTypes = {
  addCard: PropTypes.func.isRequired,
  columnId: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
};

export default AddCardButton;
