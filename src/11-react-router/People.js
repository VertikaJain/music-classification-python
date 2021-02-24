import React from 'react'

const people = [
    { id: 1, name: 'john' },
    { id: 2, name: 'peter' },
    { id: 3, name: 'susan' },
    { id: 4, name: 'anna' },
]

const People = () => {
    return (
        <div>
            {people.map(person => {
                return (
                    <div key={person.id} className="item">
                        {person.name}
                    </div>
                )
            })}
        </div>
    )
}

export default People
