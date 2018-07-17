import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

class ModalUser extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalIsOpen: this.props.modalVisible,
      authorInput: ''
    };
    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
    this.addAuthorNameInput = this.addAuthorNameInput.bind(this);
    this.handleAddAuthorName = this.handleAddAuthorName.bind(this);
  }
  addAuthorNameInput (event) {
    this.setState({
      authorInput: event.target.value
    });
  };

  handleAddAuthorName () {
    console.log('Submit', this.state.authorInput);
    this.props.addAuthorName(this.state.authorInput);
    this.closeModal();
    // localStorage.setItem('KanbanBoardUser', JSON.stringify(this.state.authorInput));
  }

    // componentDidMount () {
    //     const checkAuthor = localStorage.getItem('KanbanBoardUser');
    //     if (!checkAuthor || JSON.parse(checkAuthor).length === 0 ){
    //         localStorage.setItem('KanbanBoardUser', JSON.stringify(this.state.authorInput));
    //         this.setState({
    //             modalIsOpen: true,
    //             authorInput: JSON.parse(localStorage.getItem('KanbanBoardUser'))
    //         });
    //     } else {
    //         this.setState({
    //             modalIsOpen: false
    //         });
    //     }
    // };





    // openModal () {
    //     this.setState({modalIsOpen: true});
    // }
    closeModal () {
        this.setState({modalIsOpen: false});
    }

    render() {
      console.log(this.props);
        return (
            <div className="column-list__wrapper">
              <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    ariaHideApp={false}
                    contentLabel="Example Modal"
                    className="card-modal"
                    overlayClassName="card-modal__overlay"
                >
                    <form>
                        <input
                            className="card-modal__name"
                            onChange={this.addAuthorNameInput}
                            value={this.state.authorInput ? this.state.authorInput : ''}
                            placeholder={this.state.authorInput ? '' : 'Enter your name'}
                        />
                        <button type="button" onClick={this.handleAddAuthorName} className="">OK</button>
                    </form>
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