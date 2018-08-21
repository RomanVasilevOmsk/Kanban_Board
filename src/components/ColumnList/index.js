import React from 'react';
import PropTypes from 'prop-types';
import Column from '../Column';
import ModalUser from '../ModalUser';

class ColumnList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: (!this.props.author),
    };
  }

  render() {
    return (
      <div className="column-list__wrapper">
        <div className="column-list">
          { this.props.columnDataName.map(column =>
            (<Column
              key={column.id}
              columnId={column.id}
              columnName={column.columnName}
              cardData={this.props.cardData}
              saveToLocalStorage={this.props.saveToLocalStorage}
              deleteCard={this.props.deleteCard}
              addCard={this.props.addCard}
              editCard={this.props.editCard}
              author={this.props.author}
              commentsData={this.props.commentsData}
              addComment={this.props.addComment}
              // changeColumnName={this.props.changeColumnName}
              delComment={this.props.delComment}
              editComment={this.props.editComment}
            />
          ))
        }
        </div>
        <ModalUser
          // addAuthorName={this.props.addAuthorName}
          // author={this.props.author}
          modalVisible={this.state.modalVisible}
        />
      </div>
    );
  }
};



ColumnList.propTypes = {
  columnDataName: PropTypes.array.isRequired,
  cardData: PropTypes.array.isRequired,
  saveToLocalStorage: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  commentsData: PropTypes.array.isRequired,
  addComment: PropTypes.func.isRequired,
  // changeColumnName: PropTypes.func.isRequired,
  delComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  // addAuthorName: PropTypes.func.isRequired,

};


export default ColumnList;
