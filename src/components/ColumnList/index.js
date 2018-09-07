import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Column from '../Column';

import { getColumnName, getAuthorName } from '../../selectors';
import { fetchColumns, editColumn } from '../../reducers/columns/actions';
import { addCard } from '../../reducers/cards/actions';

class ColumnList extends React.Component {
  state = {
    isLoaded: false,
  };

  componentDidMount = () => {
    this.props.fetchColumns().then(() =>
      this.setState({
        isLoaded: true,
      }),
    );
  };

  render() {
    return (
      <div className="column-list__wrapper">
        <div className="column-list">
          {this.props.columnDataName.map(column => (
            <Column
              key={column.id}
              columnId={column.id}
              columnName={column.columnName}
              addCard={this.props.addCard}
              editColumn={this.props.editColumn}
              author={this.props.author}
            />
          ))}
        </div>
      </div>
    );
  }
}

ColumnList.propTypes = {
  fetchColumns: PropTypes.func.isRequired,
  columnDataName: PropTypes.array,
  author: PropTypes.string.isRequired,
  addCard: PropTypes.func.isRequired,
  editColumn: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    author: getAuthorName(state),
    columnDataName: getColumnName(state),
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchColumns,
      editColumn,
      addCard,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnList);
