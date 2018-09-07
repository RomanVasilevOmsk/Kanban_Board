import React from 'react';
import PropTypes from 'prop-types';
import CardsList from '../CardList';
import ColumnTitle from './ColumnTitle';
import AddCardButton from './AddCardButton';

class Column extends React.Component {
  render() {
    return (
      <div className="column__wrapper">
        <div className="column__header">
          <ColumnTitle
            columnId={this.props.columnId}
            editColumn={this.props.editColumn}
            columnName={this.props.columnName}
          />
          <AddCardButton addCard={this.props.addCard} author={this.props.author} columnId={this.props.columnId} />
        </div>
        <CardsList author={this.props.author} />
      </div>
    );
  }
}

Column.propTypes = {
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired,
  editColumn: PropTypes.func.isRequired,
  author: PropTypes.string,
  addCard: PropTypes.func.isRequired,
};

export default Column;
