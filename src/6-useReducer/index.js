import React, { useState, useReducer } from 'react'
import Modal from "./modal"
import Reducer from "./reducer"

const defaultState = {
    animals: [],
    isModalOpen: false,
    modalContent: ""
}

const Index = () => {
    const [name, setName] = useState("")
    const [state, dispatch] = useReducer(Reducer, defaultState)

    let handleSubmit = (e) => {
        e.preventDefault()
        if (name) {
            // const newData = { id: new Date().getTime().toString(), name }
            dispatch({ type: "ADD_ITEM", payload: { id: new Date().getTime().toString(), name } }) // dispatch an action
            setName("")
        } else {
            dispatch({ type: "NO_VALUE" })
        }
    }

    let handleCloseModal = () => {
        dispatch({ type: "CLOSE_MODAL" })
    }

    // On initial/first render we have the initial state values from defaultState
    return (
        <>
            {state.isModalOpen && <Modal closeModal={handleCloseModal} modalContent={state.modalContent} />}
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <button type="submit" >Submit</button>
            </form>
            {state.animals.map(animal => {
                return <div key={animal.id} className="item">
                    {animal.name}
                    <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: animal.id })}>Remove</button>
                </div>
            })}
        </>
    )
}

export default Index
