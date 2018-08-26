import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Immutable from 'immutable';
import uid from 'uid';
import { bindActionCreators } from 'redux';

import Layout from './components/Layout';
import ColumnList from './components/ColumnList';

import { fetchColumns } from './reducers/columns/actions';
import { fetchCards, editCard, editComment } from './reducers/cards/actions';

import './assets/styles/_base.scss';

import { getColumnName, getAuthorName, getCardData } from './selectors';

import {
  saveToLocalStorage,
  saveCommentsToLocalStorage,
  // saveColumnToLocalStorage,
  getData,
  getComments,
  getColumn,
  getUser,
  setUser,
} from './api/';
import PropTypes from "prop-types";
// import {addUser} from './actions';

class App extends Component {
  state = {
    isLoaded: false,
    isLoadedCards: false,
    // cardData: getData(),
    // commentsData: getComments(),
    // columnDataName: getColumn(),
    // author: '',
    // modalVisible: (!getUser()),
    // modalVisible: (!this.props.author),
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
  };

  // addAuthorName = (authorName) => {
  //   const checkAuthor = this.props.author;
  //   let visible = true;
  //   let author = '';
  //   if (!checkAuthor) {
  //     visible = true;
  //     author = authorName;
  //   } else {
  //     author = authorName;
  //     visible = false;
  //   }
  //   this.setState({
  //     modalVisible: visible,
  //     // author: author,
  //   });
  //   setUser(author);
  // };

  deleteCard = cardId => {
    const newState = this.state.cardData.filter(card => card.id !== cardId);
    this.setState({
      cardData: newState,
    });
    saveToLocalStorage(newState);
  };

  addCard = columnId => {
    const newState = this.state.cardData.concat([
      {
        id: uid(),
        idColumn: columnId,
        cardName: '',
        author: this.props.author,
        description: '',
      },
    ]);
    this.setState({
      cardData: newState,
    });
    saveToLocalStorage(newState);
  };

  addComment = (cardId, text) => {
    const newState = this.state.commentsData.concat([
      {
        id: uid(),
        idCard: cardId,
        author: this.props.author,
        text: text,
      },
    ]);
    this.setState({
      commentsData: newState,
    });
    saveCommentsToLocalStorage(newState);
  };

  delComment = commentId => {
    const newState = this.state.commentsData.filter(comment => comment.id !== commentId);
    this.setState({
      commentsData: newState,
    });
    saveCommentsToLocalStorage(newState);
  };

  editComment = (commentId, text) => {
    const newState = this.state.commentsData.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          text: TextMetrics,
        };
      } else {
        return comment;
      }
    });
    this.setState({
      commentsData: newState,
    });
    saveCommentsToLocalStorage(newState);
  };

  editCard = (cardId, columnId, cardName, cardDescription) => {
    const newState = this.props.cardData.map(card => {
      if (card.id === cardId) {
        return {
          ...card,
          cardName: cardName,
          description: cardDescription,
        };
      } else {
        return card;
      }
    });
    this.setState({
      cardData: newState,
    });
    saveToLocalStorage(newState);
  };

  changeColumnName = (ColumnId, columnName) => {
    const newState = this.props.columnDataName.map(column => {
      if (column.id === ColumnId) {
        return {
          ...column,
          columnName: columnName,
        };
      } else {
        return column;
      }
    });
    this.setState({
      columnDataName: newState,
    });
    saveColumnToLocalStorage(newState);
  };

  render() {
    if (!this.state.isLoaded) return null;
    return (
      <div className="App">
        <Layout>
          <ColumnList
            columnDataName={this.props.columnDataName}
            cardData={this.props.cardData}
            saveToLocalStorage={saveToLocalStorage}
            deleteCard={this.deleteCard}
            addCard={this.addCard}
            editCard={this.props.editCard}
            author={this.props.author}
            // commentsData={this.state.commentsData}
            addComment={this.addComment}
            // changeColumnName={this.changeColumnName}
            delComment={this.delComment}
            editComment={this.props.editComment}
            // addAuthorName={this.addAuthorName}
            modalVisible={this.state.modalVisible}
          />
        </Layout>
      </div>
    );
  }
}

App.propTypes = {
  editCard: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    author: getAuthorName(state),
    columnDataName: getColumnName(state),
    cardData: getCardData(state),
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchColumns,
      fetchCards,
      editCard,
      editComment,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
