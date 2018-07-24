import React from 'react';
import PropTypes from 'prop-types';

class ModalUserForm extends React.Component {
  state = {
    authorInput: '',
    warningText: '',
  };
  addAuthorNameInput = (event) => {
    if (event.charCode === 13) {
      this.handleAddAuthorName(event);
    }
    this.setState({
      authorInput: event.target.value,
    });
  };

  handleAddAuthorName = () => {
    if (this.state.authorInput !== '') {
      this.props.addAuthorName(this.state.authorInput);
      this.props.modalVisible();
    } else {
      this.showWarningName();
    }
  };

  showWarningName = () => {
    this.setState({
      warningText: 'Enter Name',
    });
  }

  render() {
    return (
      <form className="user-form-modal">
        <input
          className="user-form-modal__name"
          onChange={this.addAuthorNameInput}
          onKeyPress={this.addAuthorNameInput}
          value={this.state.authorInput ? this.state.authorInput : ''}
          placeholder={this.state.authorInput ? '' : 'Enter your name'}
          autoFocus
        />
        <button type="button" onClick={this.handleAddAuthorName} className="user-form-modal__btn btn-ok">OK</button>
        { this.state.warningText !== '' ? <p>{this.state.warningText} </p> : '' }
      </form>
    );
  }
}

ModalUserForm.propTypes = {
  addAuthorName: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  modalVisible: PropTypes.func.isRequired,
};

export default ModalUserForm;
