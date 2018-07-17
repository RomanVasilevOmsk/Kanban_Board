import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import mockData from './api/mockData';

const checkLocalStorageData = () => {
  const datalocalStorage = localStorage.getItem('mydata');
  if (!datalocalStorage || JSON.parse(datalocalStorage).length === 0 ){
    localStorage.setItem('mydata', JSON.stringify(mockData));
  }
};

checkLocalStorageData();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
