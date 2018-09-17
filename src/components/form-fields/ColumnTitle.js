import React from 'react';
import PropTypes from 'prop-types';

class ColumnTitle extends React.Component {
  state = {
    columnName: this.props.columnName,
  };

  onChangeNameColumn = event => {
    if (event.charCode === 13) {
      this.props.editColumn(this.props.columnId, event);
    }
    this.setState({
      columnName: event.target.value,
    });
  };

  render() {
    const { columnId, editColumn } = this.props;
    const { columnName } = this.state;
    return (
      <input
        className="column__name"
        onChange={this.props.onChangeNameColumn}
        onBlur={() => editColumn(columnId, columnName)}
        onKeyPress={() => editColumn(columnId, columnName)}
        value={columnName}
      />
    );
  }
}

ColumnTitle.propTypes = {
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired,
  editColumn: PropTypes.func.isRequired,
};

export default ColumnTitle;


