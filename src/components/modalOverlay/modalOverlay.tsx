import React from 'react';
import modalOverlayStyles from "./modalOverlay.module.css"

const ModalOverlay = ({handleCloseAction}: {handleCloseAction: () => void}) => {
    return (
        <div className={modalOverlayStyles.overlay} onClick={handleCloseAction} />
    );
};
export default ModalOverlay;