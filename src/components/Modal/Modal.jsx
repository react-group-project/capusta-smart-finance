import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import propTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled.jsx';

export default function Modal({ toggleModalVisibility, children }) {
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
            toggleModalVisibility();
        }
    };

    // колбек для слухачя кліку по overlay для закриття модалки
    const handleOverlayClick = evt => {
        if (evt.target === evt.currentTarget) {
            toggleModalVisibility();
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

Modal.propTypes = {
    toggleModalVisibility: propTypes.func.isRequired,
    children: propTypes.any,
};
