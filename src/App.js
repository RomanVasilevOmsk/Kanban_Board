import React, { Component } from 'react';
import Layout from './components/Layout';
import ColumnList from './components/ColumnList';
import './styles/_base.scss';



class App extends Component {

  render () {
    return (
      <div className="App">
        <Layout>
          <ColumnList />
        </Layout>
      </div>
    );
  }
}

export default App;
