import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import mockData from './api/mockData';
import mockDataComments from './api/mockDataComments';
import mockDataColumn from './api/mockDataColumn';

const checkLocalStorageData = () => {
  const datalocalStorage = localStorage.getItem('KanbanBoardData');
  if (!datalocalStorage || JSON.parse(datalocalStorage).length === 0) {
    localStorage.setItem('KanbanBoardData', JSON.stringify(mockData));
  }
};

const checkLocalStorageDataComments = () => {
  const dataCommentsStorage = localStorage.getItem('KanbanBoardComments');
  if (!dataCommentsStorage || JSON.parse(dataCommentsStorage).length === 0) {
    localStorage.setItem('KanbanBoardComments', JSON.stringify(mockDataComments));
  }
};

const checkLocalStorageDataColumn = () => {
  const dataColumnStorage = localStorage.getItem('KanbanBoardColumn');
  if (!dataColumnStorage || JSON.parse(dataColumnStorage).length === 0) {
    localStorage.setItem('KanbanBoardColumn', JSON.stringify(mockDataColumn));
  }
};

// checkLocalStorageDataColumn();
checkLocalStorageData();
checkLocalStorageDataComments();

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

console.log(store.getState());

store.subscribe(()=>{
  console.log(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
