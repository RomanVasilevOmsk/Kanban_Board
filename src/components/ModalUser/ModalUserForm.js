import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Form, Field } from 'react-final-form';
import { addUser } from '../../reducers/userReducer/actions';

class ModalUserForm extends React.Component {
  onSubmit = values => {
    this.props.addUser(values.userName);
    this.props.modalVisible();
  };
  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        validate={values => {
          const errors = {};
          if (!values.userName) {
            errors.userName = 'error';
          }
          return errors;
        }}
        render={({ handleSubmit }) => (
          <form className="user-form-modal" onSubmit={handleSubmit}>
            <Field name="userName">
              {({ input, meta }) => (
                <div>
                  <input
                    {...input}
                    type="text"
                    autoFocus
                    className={`user-form-modal__name user-form-modal__name--${meta.error &&
                      meta.touched &&
                      meta.error}`}
                    placeholder="Enter your name"
                  />
                  {meta.error && meta.touched && <span className="user-form-modal__error">Name is Required</span>}
                </div>
              )}
            </Field>
            <button className="user-form-modal__btn btn-ok" type="submit">
              OK
            </button>
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
