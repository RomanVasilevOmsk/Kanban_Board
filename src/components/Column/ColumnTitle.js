import React from 'react';
import PropTypes from 'prop-types';

class ColumnTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnValue: this.props.columnName,
    };
  }

  handleChangeNameColumn = () => {
    this.props.changeColumnName(this.props.columnId, this.state.columnValue);
  };

  handleChangeColumn = (event) => {
    if (event.charCode === 13) {
      this.handleChangeNameColumn(event);
    }
    this.setState({
      columnValue: event.target.value,
    });
  };

  render() {
    return (
      <input
        className="column__name"
        onChange={this.handleChangeColumn}
        onBlur={this.handleChangeNameColumn}
        onKeyPress={this.handleChangeColumn}
        value={this.state.columnValue}
      />
    );
  }
}

ColumnTitle.propTypes = {
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired,
  changeColumnName: PropTypes.func.isRequired,
};

export default ColumnTitle;
