import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import CardsList from '../CardList';
import AddCardButton from './AddCardButton';

class Column extends React.Component {
  onSubmit = values => {
    this.props.editColumn(this.props.columnId, values.columnTitle);
  };

  render() {
    return (
      <div className="column__wrapper">
        <div className="column__header">
          <Form
            onSubmit={this.onSubmit}
            initialValues={{ columnTitle: this.props.columnName }}
            render={({ handleSubmit }) => (
              <Field name="columnTitle" className="column__name" onBlur={handleSubmit} component="input" />
            )}
          />
          <AddCardButton addCard={this.props.addCard} author={this.props.author} columnId={this.props.columnId} />
        </div>
        <CardsList columnId={this.props.columnId} columnName={this.props.columnName} />
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
