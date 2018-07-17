import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

class CardItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      cardName: props.cardName,
      cardDescription: props.cardDescription,
      index: props.index,
      cardTitle: props.cardName,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeTitleClick = this.handleChangeTitleClick.bind(this);
    this.handleChangeNameCard = this.handleChangeNameCard.bind(this);
  }

  handleChangeName (event) {
    this.setState({
      cardTitle: event.target.value,
    });
    this.props.editCard(this.props.index, this.props.columnId, event.target.value)
  }

  handleChangeDescription (event) {
    this.setState({
      cardDescription: event.target.value
    });
    this.props.editCard(this.props.index, this.props.columnId,this.props.cardName, event.target.value)
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
    this.props.deleteCard(this.props.index);
  }

  handleChangeTitle(event){
    this.setState({
      cardTitle: event.target.value
    });
  }
  handleChangeNameCard(event){
    this.props.editCard(this.props.index, this.props.columnId, event.target.value)
  }

  handleChangeTitleClick(event){
    event.stopPropagation();
  };

  render() {
    return (
      <div
        className="card-item__wrapper"
        id={this.props.index}
      >
        { this.props.cardName  ?
          <div
            onClick={this.openModal}
            className="card-item__name"
          >
            { this.props.cardName }
            <button
              onClick={this.handleDeleteCard}
              className="column__del-card"
            >
              &times;
            </button>
          </div>
          :
            <div
              onClick={this.openModal}
              className="card-item__name"
            >
              <input
                className=""
                onChange={this.handleChangeTitle}
                onClick={this.handleChangeTitleClick}
                onBlur={this.handleChangeNameCard}
                value={this.state.cardTitle ? this.state.cardTitle : ''}
                placeholder='New Card'
              />
              <button
                onClick={this.handleDeleteCard}
                className="column__del-card"
              >
              &times;
            </button>
          </div>
        }

        <Modal isOpen={this.state.modalIsOpen}
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
              <input
                className="card-modal__name"
                onChange={this.handleChangeName}
                value={this.state.cardTitle ? this.state.cardTitle : ''}
                placeholder={this.state.cardName ? '' : 'Enter the name of the card'}
              />
              <p className="card-modal__author">
                {this.props.author ? this.props.author : 'Author'}
              </p>
              <div className="card-modal__description-wrapper">
                <h3 className="card-modal__description-title">Description</h3>
                <textarea
                  className="card-modal__description-text"
                  onChange={this.handleChangeDescription}
                  value={this.state.cardDescription ? this.state.cardDescription : ''}
                  placeholder={this.state.cardDescription ? '' : 'Enter card description'}
                >
                </textarea>
              </div>

              <div className="card-modal__addComment-wrapper">
                <h3 className="card-modal__addComment-title">Add comment</h3>
                <textarea className="card-modal__addComment-text" placeholder="Write comment">
                </textarea>
              </div>

              <div className="card-modal__comments-wrapper">
                <h3 className="card-modal__comments-title">Add comment</h3>
                <div className="card-modal__comments-inner">
                  <span className="card-modal__comments-author">Author</span>
                  <p className="card-modal__comments-text">Text</p>
                </div>

              </div>

            </form>
          </Modal>
      </div>
    );
  }
}

CardItem.propTypes = {
  cardName: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string,
  deleteCard: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired
};

export default CardItem;
