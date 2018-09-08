import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import CardsList from '../CardList';
import ColumnTitle from '../form-fields/ColumnTitle';
import AddCardButton from './AddCardButton';

class Column extends React.Component {
  handleSubmit = values => {
    console.log('submit');
  };
  render() {
    return (
      <div className="column__wrapper">
        <div className="column__header">
          <Form
            onSubmit={this.props.editColumn}
            initialValues={{ stooge: 'larry', employed: false }}
            render={() => (
              <Field
                name="columnTitle"
                columnId={this.props.columnId}
                editColumn={this.props.editColumn}
                columnName={this.props.columnName}
                component={ColumnTitle}
              />
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
