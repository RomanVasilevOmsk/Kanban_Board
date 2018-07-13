import React, { Component } from 'react';
import Layout from './components/Layout';
import './styles/_base.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Layout>
         HELLO WORLD
       </Layout>
      </div>
    );
  }
}

export default App;
