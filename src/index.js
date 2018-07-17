import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import mockData from './api/mockData';

const checkLocalStorageData = () => {
  const datalocalStorage = localStorage.getItem('KanbanBoardData');
  if (!datalocalStorage || JSON.parse(datalocalStorage).length === 0 ){
    localStorage.setItem('KanbanBoardData', JSON.stringify(mockData));
  }
};

checkLocalStorageData();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
