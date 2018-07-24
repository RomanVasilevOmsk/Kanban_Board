import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import ModalUserForm from './ModalUserForm';

class ModalUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: this.props.modalVisible,
      authorInput: '',
      warningText: '',
    };
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  };

  render() {
    return (
      <div className="column-list__wrapper">
        <Modal
          isOpen={this.state.modalIsOpen}
          ariaHideApp={false}
          className="card-modal user-modal"
          overlayClassName="card-modal__overlay"
        >
          <ModalUserForm
            addAuthorName={this.props.addAuthorName}
            modalIsOpen={this.state.modalIsOpen}
            modalVisible={this.closeModal}
          />
        </Modal>
      </div>
    );
  }
}

ModalUser.propTypes = {
  addAuthorName: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool.isRequired,
};

export default ModalUser;
