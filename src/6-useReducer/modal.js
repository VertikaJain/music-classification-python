import React, { useEffect } from 'react'


const Modal = ({ modalContent, closeModal }) => { // destructuring props.

    useEffect(() => { // to hide modal content after 3 seconds 
        setTimeout(() => {
            closeModal()
        }, 3000)
    })

    return (
        <div className="modal">
            <p>{modalContent}</p>
        </div>
    )
}

export default Modal
