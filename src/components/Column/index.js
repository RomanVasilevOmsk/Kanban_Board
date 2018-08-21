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
            // changeNameColumn={this.handleChangeNameColumn}
            // changeColumnName={this.props.changeColumnName}
            columnName={this.props.columnName}
          />
          <AddCardButton
            addCard={this.props.addCard}
            columnId={this.props.columnId}
          />
        </div>
        <CardsList
          columnId={this.props.columnId}
          columnName={this.props.columnName}
          cardData={this.props.cardData}
          saveToLocalStorage={this.props.saveToLocalStorage}
          deleteCard={this.props.deleteCard}
          addCard={this.props.addCard}
          editCard={this.props.editCard}
          author={this.props.author}
          commentsData={this.props.commentsData}
          addComment={this.props.addComment}
          delComment={this.props.delComment}
          editComment={this.props.editComment}
        />
      </div>
    );
  }
}

Column.propTypes = {
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired,
  cardData: PropTypes.array.isRequired,
  saveToLocalStorage: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  author: PropTypes.string,
  addCard: PropTypes.func.isRequired,
  commentsData: PropTypes.array.isRequired,
  addComment: PropTypes.func.isRequired,
  // changeColumnName: PropTypes.func.isRequired,
  delComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
};

export default Column;
