import React from "react";
import "./style.css"

const Modal = ({ isOpen, handleClose, children }) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div className="overlay">
            <div className="modalBody">
                <div className="modalHeader">
                    <button class="closeButton" onClick={handleClose}>
                        X
                    </button>
                </div>
                <div className="modalContent">{children}</div>
            </div>
        </div>
    )
}

export default Modal