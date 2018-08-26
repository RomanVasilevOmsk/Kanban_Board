import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import modalDecorator from '../HOCS/modal-decorator';

class ContentModal extends React.Component {
  render() {
    const { show, children, onClose } = this.props;

    return (
      <Modal
        isOpen={show}
        contentLabel="Modal"
        htmlOpenClassName={'ReactModal__Html--open' || null}
        onRequestClose={onClose}
        ariaHideApp={false}
        className="card-modal"
        overlayClassName="card-modal__overlay"
      >
        <button onClick={onClose} className="card-modal__close">×</button>
        <div className="modal__body">
          {children}
        </div>
      </Modal>
    );
  }
}

function openContentModal({ title: title = 'Content Modal' }, props = {}, onSubmit, onClose, wrapper) {
  return function(Component) {
    ReactDOM.render(
      <ContentModal show={true} title={title} typeStyle={props.typeStyle} onClose={onClose}>
        <Component onSubmit={onSubmit} {...props} />
      </ContentModal>,
      wrapper,
    );
  };
}

ContentModal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.object,
  title: PropTypes.string,
  onClose: PropTypes.func,
};

export default modalDecorator(openContentModal);
