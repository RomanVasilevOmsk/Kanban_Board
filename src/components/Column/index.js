import React from 'react';

import PropTypes from 'prop-types';
import CardsList from "../CardList";

class Column extends React.Component {
  render() {
    return (
      <div className="column__wrapper">
        <div className="column__header">
          <h3 className="column__name">{this.props.columnName}</h3>
          <button className="column__add-card">+</button>
        </div>
        <CardsList
          columnId = {this.props.columnId}
          columnName = {this.props.columnName}
        />
      </div>
    );
  }
}

Column.propTypes = {
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired
};

export default Column;
