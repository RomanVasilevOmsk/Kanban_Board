import React from 'react';
import PropTypes from 'prop-types';

class ModalUserForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      authorInput: '',
      warningText: ''
    };
    this.addAuthorNameInput = this.addAuthorNameInput.bind(this);
    this.handleAddAuthorName = this.handleAddAuthorName.bind(this);
    this.showWarningName = this.showWarningName.bind(this);
  }
  addAuthorNameInput (event) {
    if (event.charCode === 13) {
      this.handleAddAuthorName(event);
    }
    this.setState({
      authorInput: event.target.value
    });
  };

  handleAddAuthorName () {
    if (this.state.authorInput !== ''){
      this.props.addAuthorName(this.state.authorInput);
      this.props.modalVisible();
    } else {
      this.showWarningName();
    }
  };

  showWarningName () {
    this.setState({
      warningText: 'Enter Name'
    });
  }

  render () {
    return (
      <form>
        <input
          className="card-modal__name"
          onChange={this.addAuthorNameInput}
          onKeyPress={this.addAuthorNameInput}
          value={this.state.authorInput ? this.state.authorInput : ''}
          placeholder={this.state.authorInput ? '' : 'Enter your name'}
        />
        <button type="button" onClick={this.handleAddAuthorName} className="">OK</button>
        { this.state.warningText !== '' ? <p>{this.state.warningText} </p> : '' }
      </form>
    );
  }
}

ModalUserForm.propTypes = {
  addAuthorName: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  modalVisible: PropTypes.func.isRequired
};

export default ModalUserForm;