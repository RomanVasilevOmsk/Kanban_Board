import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Column from '../Column';
import { getAuthorName, getColumnName } from '../../selectors';
import { fetchColumns, editColumn } from '../../reducers/columns/actions';
import { fetchCards, addCard } from '../../reducers/cards/actions';
import { fetchComments } from '../../reducers/comments/actions';

class ColumnList extends React.Component {
  state = {
    isLoaded: false,
    isLoadedCards: false,
    isLoadedComments: false,
  };

  componentDidMount = () => {
    this.props.fetchColumns().then(() =>
      this.setState({
        isLoaded: true,
      }),
    );
    this.props.fetchCards().then(() =>
      this.setState({
        isLoadedCards: true,
      }),
    );
    this.props.fetchComments().then(() =>
      this.setState({
        isLoadedComments: true,
      }),
    );
  };

  render() {
    if (!this.state.isLoaded) return null;
    const { addCard, editColumn, author, columnDataName } = this.props;
    return (
      <div className="column-list__wrapper">
        <div className="column-list">
          {columnDataName.map(column => (
            <Column
              key={column.id}
              columnId={column.id}
              columnName={column.columnName}
              addCard={addCard}
              editColumn={editColumn}
              author={author}
            />
          ))}
        </div>
      </div>
    );
  }
}

ColumnList.propTypes = {
  fetchColumns: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  fetchCards: PropTypes.func.isRequired,
  columnDataName: PropTypes.array,
  addCard: PropTypes.func.isRequired,
  editColumn: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    columnDataName: getColumnName(state),
    author: getAuthorName(state),
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchComments,
      fetchColumns,
      fetchCards,
      editColumn,
      addCard,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnList);
