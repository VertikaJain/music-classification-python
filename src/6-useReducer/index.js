import React, { useState, useReducer } from 'react'
import Modal from "./modal"

const data = [
    { id: 1, name: 'elephant' },
    { id: 2, name: 'rabbit' },
    { id: 3, name: 'cat' },
    { id: 4, name: 'dog' },
    { id: 5, name: 'tiger' },
    { id: 6, name: 'lion' },
];

const reducer = (state, action) => { // always return state otherwise it will result into an error -> undefined state
    if (action.type === "ADD_ITEM") {
        return { ...state, animals: [...state.animals, action.payload], isModalOpen: true, modalContent: "Item added." }
    }
    if (action.type === "NO_VALUE") {
        return { ...state, isModalOpen: true, modalContent: "Please add Item." }
    }

    throw new Error("Invalid Action.")
}

const defaultState = {
    animals: [],
    isModalOpen: false,
    modalContent: ""
}

const Index = () => {
    const [name, setName] = useState("")
    const [state, dispatch] = useReducer(reducer, defaultState)

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

    // On initial/first render we have the initial state values from defaultState
    return (
        <>
            {state.isModalOpen && <Modal modalContent={state.modalContent} />}
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <button type="submit" >Submit</button>
            </form>
            {state.animals.map(animal => {
                return <div key={animal.id}>
                    {animal.name}
                </div>
            })}
        </>
    )
}

export default Index
