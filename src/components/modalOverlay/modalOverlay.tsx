import React from 'react';
import modalOverlayStyles from './modalOverlay.module.css';

function ModalOverlay({
    handleCloseAction,
}: {
    handleCloseAction: () => void;
}) {
    return (
        <div
            aria-hidden="true"
            className={modalOverlayStyles.overlay}
            onClick={handleCloseAction}
        />
    );
}
export default ModalOverlay;
