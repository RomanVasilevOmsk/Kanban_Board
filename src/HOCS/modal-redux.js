import React from 'react';
import { Provider } from 'react-redux';

export default function modalRedux(store) {
  return function(Component) {
    return class ModalRedux extends React.Component {
      render() {
        return (
          <Provider store={store}>
            <Component {...this.props} />
          </Provider>
        );
      }
    };
  };
}
