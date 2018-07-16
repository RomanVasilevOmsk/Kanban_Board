import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

class CardItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      cardName: props.cardName,
      index: props.index
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
  }

  handleChange (event) {
    this.setState({
      cardName: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('SEND');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleDeleteCard(event){
    event.stopPropagation();
    console.log('del', this.props.index);
    this.props.deleteCard(this.props.index);
  }

  render() {
    return (
      <div
        className="card-item__wrapper"
        id={this.props.index}
      >
        <div
          onClick={this.openModal}
          className="card-item__name"
        >
          {
            //Выводить из стейта или пропса?
            this.props.cardName
          }
          <button
            onClick={this.handleDeleteCard}
            className="column__del-card"
          >
            &times;
          </button>
        </div>
        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            ariaHideApp={false}
            contentLabel="Example Modal"
            className="card-modal"
            overlayClassName="card-modal__overlay"
          >
            <button onClick={this.closeModal} className="card-modal__close">×</button>
            <form>
              <span className="card-modal__column-name">{this.props.columnName} / </span>
              <input className="card-modal__name" onChange={this.handleChange} value={this.state.cardName} />
              <p>autor</p>
            </form>
          </Modal>
      </div>
    );
  }
}

CardItem.propTypes = {
  cardName: PropTypes.string.isRequired,
  columnName: PropTypes.string.isRequired,
  deleteCard: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default CardItem;
