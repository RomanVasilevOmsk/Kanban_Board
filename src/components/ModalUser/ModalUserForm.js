import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Form, Field } from 'react-final-form';
import { addUser } from '../../reducers/userReducer/actions';

class ModalUserForm extends React.Component {
  state = {
    authorInput: '',
    warningText: '',
  };
  addAuthorNameInput = event => {
    if (event.charCode === 13) {
      this.handleAddAuthorName(event);
    }
    this.setState({
      authorInput: event.target.value,
    });
  };

  handleAddAuthorName = () => {
    if (this.state.authorInput !== '') {
      this.props.addUser(this.state.authorInput);
      this.props.modalVisible();
    } else {
      this.showWarningName();
    }
  };

  showWarningName = () => {
    this.setState({
      warningText: 'Enter Name',
    });
  };

  onSubmit = values => {
    console.log(values.userName);
    this.props.addUser(values.userName);
    this.props.modalVisible();
  };
  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit }) => (
          <form className="user-form-modal" onSubmit={handleSubmit}>
            <Field name="userName" className="column__name" placeholder="Enter your name" autoFocus component="input" />
            <button className="user-form-modal__btn btn-ok" type="submit">
              OK
            </button>

            {/* <input
              className="user-form-modal__name"
              onChange={this.addAuthorNameInput}
              onKeyPress={this.addAuthorNameInput}
              value={this.state.authorInput ? this.state.authorInput : ''}
              placeholder={this.state.authorInput ? '' : 'Enter your name'}
              autoFocus
            />

            {/* <button type="button" onClick={this.handleAddAuthorName} className="user-form-modal__btn btn-ok">
              OK
            </button> */}
            {/* {this.state.warningText !== '' ? <p>{this.state.warningText} </p> : ''} */}
          </form>
        )}
      />
    );
  }
}

ModalUserForm.propTypes = {
  addUser: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  modalVisible: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addUser,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(ModalUserForm);
