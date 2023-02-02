import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';
import { ModalPropTypes } from './Modal.props';

export default function Modal({ onClose, children }) {
  //useEffect що забороняє прокрутку, поки модалка відкрита
  useEffect(() => {
    document.querySelector('html').style.overflow = 'hidden';
    window.addEventListener('keydown', escapeListener);

    return () => {
      document.querySelector('html').style.overflow = 'visible';
      window.removeEventListener('keydown', escapeListener);
    };
  });

  // колбек для слухачя по Esc
  const escapeListener = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  // колбек для слухачя кліку по overlay для закриття модалки
  const handleOverlayClick = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  //рендер модалки в порталі
  return ReactDOM.createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>,
    document.querySelector('#modal-root')
  );
}

Modal.propTypes = ModalPropTypes;
