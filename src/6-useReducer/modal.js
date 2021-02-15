import React from 'react'

const Modal = ({modalContent}) => { // destructuring props.
    return (
        <div className="modal">
            <p>{modalContent}</p>
        </div>
    )
}

export default Modal
