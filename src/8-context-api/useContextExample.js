import React, { useState, useContext } from 'react'

const AnimalContext = React.createContext() // 2 components -> provider and consumer

const data = [
    { id: 1, name: 'elephant' },
    { id: 2, name: 'rabbit' },
    { id: 3, name: 'cat' },
    { id: 4, name: 'dog' },
    { id: 5, name: 'tiger' },
    { id: 6, name: 'lion' },
];

const SingleAnimal = ({ id, name }) => {
    let { removeAnimal } = useContext(AnimalContext) // destructuring
    return (
        <div className="item">
            <h4>{name}</h4>
            <button onClick={() => removeAnimal(id)}>Remove</button>
        </div>
    )
}

const List = () => {
    let { animals } = useContext(AnimalContext) // destructuring
    return <>
        {animals.map(animal => {
            return <SingleAnimal key={animal.id} {...animal} />
        })}
    </>
}

const UseContextExample = () => {

    const [animals, setAnimals] = useState(data)

    const removeAnimal = id => {
        setAnimals(animal => {
            return animal.filter(a => a.id !== id)
        })
    }

    return (
        <AnimalContext.Provider value={{ removeAnimal, animals }}>
            <h3>useContext Example</h3>
            <List />
        </AnimalContext.Provider>
    )
}

export default UseContextExample
