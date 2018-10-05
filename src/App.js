import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalUser from './components/ModalUser';
import Layout from './components/Layout';
import ColumnList from './components/ColumnList';
import { getAuthorName } from './selectors';
import './assets/styles/_base.scss';

import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>{this.props.author && <ColumnList />}</Layout>
        <ModalUser modalVisible={!this.props.author} />
      </div>
    );
  }
}

App.propTypes = {
  author: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    author: getAuthorName(state),
  };
};

export default connect(
  mapStateToProps,
  null,
)(App);
