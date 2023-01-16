import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

import ModalOverlay from '../modalOverlay/modalOverlay';
import modalStyles from './modal.module.css';

const modalRoot = document.getElementById('modals') as HTMLElement;

interface IPropsModal {
  children: ReactNode;
  title?: string;
  onClose: () => void;
  isModalOpened: boolean;
}

const Modal = (props: IPropsModal) => {
  const { children, title, onClose, isModalOpened } = props;
  useEffect(() => {
    function closeByEscape(evt: KeyboardEvent) {
      if (evt.key === 'Escape') onClose();
    }
    if (isModalOpened) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      };
    }
  }, [isModalOpened, onClose]);

  return ReactDOM.createPortal(
    <div className={modalStyles.root}>
      <div className={modalStyles.container}>
        <button
          type="button"
          className={modalStyles.closeButton}
          aria-label="Закрыть"
          onClick={onClose}
        />
        {children}
      </div>
      <ModalOverlay handleCloseAction={onClose} />
    </div>,
    modalRoot
  );
};

export default Modal;
