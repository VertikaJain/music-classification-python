import React, { useState } from 'react'

// Passing down props through several components is not a good idea.
// Solution is to use Cotext APIs.

const data = [
    { id: 1, name: 'elephant' },
    { id: 2, name: 'rabbit' },
    { id: 3, name: 'cat' },
    { id: 4, name: 'dog' },
    { id: 5, name: 'tiger' },
    { id: 6, name: 'lion' },
];



const SinglePerson = ({ id, name, removeAnimal }) => {
    return (
        <div className="item">
            <h4>{name}</h4>
            <button onClick={() => removeAnimal(id)}>Remove</button>
        </div>
    )
}

const List = ({ animals, removeAnimal }) => {
    return <>
        {animals.map(animal => {
            return <SinglePerson key={animal.id} {...animal} removeAnimal={removeAnimal} />
        })}
    </>
}

const PropsDrilling = () => {

    const [animals, setAnimals] = useState(data)

    const removeAnimal = id => {
        setAnimals(animal => {
            return animal.filter(a => a.id !== id)
        })
    }
    return (
        <div>
            <h3>Props drilling</h3>
            <List animals={animals} removeAnimal={removeAnimal} />
        </div>
    )
}



export default PropsDrilling
