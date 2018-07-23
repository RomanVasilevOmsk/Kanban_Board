import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import ModalTitleForm from './ModalTitleForm';
import ModalDescriptionForm from './ModalDescriptionForm';
import ModalAddCommentForm from './ModalAddCommentForm';
import ModalCommentListForm from './ModalCommentListForm';


class ModalCard extends React.Component {

  closeModal () {
    this.props.closeModal(false);
  }

  render () {
    return (
      <Modal
        isOpen={this.props.modalVisible}
        onRequestClose={this.closeModal.bind(this)}
        ariaHideApp={false}
        contentLabel="Example Modal"
        className="card-modal"
        overlayClassName="card-modal__overlay"
      >
        <button onClick={this.closeModal.bind(this)} className="card-modal__close">×</button>
        <ModalTitleForm
          columnName = {this.props.columnName}
          cardId = {this.props.cardId}
          author = {this.props.author}
          cardName = {this.props.cardName}
          columnId = {this.props.columnId}
          editCard = {this.props.editCard}
        />
        <ModalDescriptionForm
          cardId = {this.props.cardId}
          cardDescription = {this.props.cardDescription}
          columnId = {this.props.columnId}
          cardName = {this.props.cardName}
          editCard = {this.props.editCard}
        />
        <ModalAddCommentForm
          cardId = {this.props.cardId}
          addComment = {this.props.addComment}
        />
        {
          this.props.commentsData.filter(card => card.idCard === this.props.cardId).length !== 0 ?
            <ModalCommentListForm
              commentsData = {this.props.commentsData}
              cardId = {this.props.cardId}
              delComment = {this.props.delComment}
              editComment = {this.props.editComment}
            /> : ''
        }
      </Modal>
    )
  }
}

ModalCard.propTypes = {
  cardName: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string,
  modalVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
  cardId: PropTypes.string.isRequired,
  commentsData: PropTypes.array.isRequired,
  addComment: PropTypes.func.isRequired,
  delComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired
};

export default ModalCard;
