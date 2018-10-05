import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(reducers) {
  const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
  return store;
}
