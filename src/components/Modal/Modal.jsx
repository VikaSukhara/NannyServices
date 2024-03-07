import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button, ModalBack, ModalCard } from './Modal.styled';
import { ReactComponent as IconCross } from '../../img/cross.svg';

const modalRootElement = document.querySelector('#portal');

export const Modal = ({ toggleModal, children }) => {
  const onClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  useEffect(() => {
    const onEscapeClick = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', onEscapeClick);
    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [toggleModal]);

  return createPortal(
    <ModalBack onClick={onClickBackdrop}>
      <ModalCard>
        <Button onClick={toggleModal}>
          <IconCross />
        </Button>

        {children}
      </ModalCard>
    </ModalBack>,

    modalRootElement
  );
};

export default Modal;
