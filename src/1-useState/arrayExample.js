import React from 'react'

export const data = [
    { id: 1, name: 'elephant' },
    { id: 2, name: 'rabbit' },
    { id: 3, name: 'cat' },
    { id: 4, name: 'dog' },
    { id: 5, name: 'tiger' },
    { id: 6, name: 'lion' },
];


const ArrayExample = () => {
    const [animals, setAnimal] = React.useState(data) // another way of using useState is - React.useState()
    const removeItem = (id) => {
        let updatedAnimals = animals.filter(animal => animal.id !== id)
        setAnimal(updatedAnimals)
    }
    return (
        <>
            {animals.map(animal => {
                let { id, name } = animal
                return <div key={id} className="item">
                    <h2>{name}</h2>
                    <button className="btn" onClick={() => removeItem(id)}>Remove</button>
                </div>
            })}
            <button className="btn" onClick={() => setAnimal([])}>clear items</button>
        </>
    );
};

export default ArrayExample
