import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ModalUser from './components/ModalUser';
import Layout from './components/Layout';
import ColumnList from './components/ColumnList';

import { fetchColumns } from './reducers/columns/actions';
import { fetchCards, editCard, deleteCard, addCard } from './reducers/cards/actions';
import { fetchComments, editComment, deleteComment, addComment } from './reducers/comments/actions';

import './assets/styles/_base.scss';

import { getColumnName, getAuthorName, getCardData, getComments } from './selectors';

// import {
//   saveToLocalStorage,
//   saveCommentsToLocalStorage,
//   // saveColumnToLocalStorage,
//   getData,
//   // getComments,
//   getColumn,
//   getUser,
//   setUser,
// } from './api/';
import PropTypes from 'prop-types';
// import {addUser} from './actions';

class App extends Component {
  state = {
    isLoaded: false,
    isLoadedCards: false,
    isLoadedComments: false,
    modalVisible: !this.props.author,
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
    return (
      <div className="App">
        <Layout>
          <ColumnList />
        </Layout>
        <ModalUser
          // addAuthorName={this.props.addAuthorName}
          // author={this.props.author}
          modalVisible={this.state.modalVisible}
        />
      </div>
    );
  }
}

App.propTypes = {
  editCard: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    author: getAuthorName(state),
    columnDataName: getColumnName(state),
    cardData: getCardData(state),
    comments: getComments(state),
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchColumns,
      fetchCards,
      fetchComments,
      editCard,
      editComment,
      deleteComment,
      deleteCard,
      addCard,
      addComment,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
