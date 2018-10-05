import reducers from './../reducers';
import configureStore from './../store/configure-store';

export const store = configureStore(reducers);
