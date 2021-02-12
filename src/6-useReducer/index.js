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

const Index = () => {
    const [name, setName] = useState("")
    const [animals, setAnimals] = useState(data)
    const [showModal, setShowModal] = useState(false)

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(name);
        if (name) {
            setAnimals([...animals, { id: new Date().getTime().toString(), name }])
            setName("")
            setShowModal(true)

        } else {
            setShowModal(true)
        }
    }

    return (
        <>
            {showModal && <Modal />}
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <button type="submit" >Submit</button>
            </form>
            {animals.map(animal => {
                return <div key={animal.id}>
                    {animal.name}
                </div>
            })}
        </>
    )
}

export default Index
