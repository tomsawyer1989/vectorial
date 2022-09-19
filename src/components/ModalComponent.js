import React from "react";

function ModalComponent({ title, onCloseModal, children }) {
    return (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{ title }</h5>
                        <button type="button" className="btn-close" onClick={() => onCloseModal()} aria-label="Modal close"></button>
                    </div>
                    <div className="modal-body">
                        { children }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalComponent;