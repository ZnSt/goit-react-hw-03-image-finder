import { Component } from 'react';
import { Overlay, ModalSt } from './Modal.styled';

export class Modal extends Component {
  render() {
    const { closeModal, largeImage } = this.props;
    return (
      <Overlay onClick={closeModal}>
        <ModalSt>
          <img src={largeImage.src} alt={largeImage.alt} />
        </ModalSt>
      </Overlay>
    );
  }
}
