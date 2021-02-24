import React from 'react'
import { Link } from "react-router-dom"

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
                        <h4>{person.name}</h4>
                        <Link to={`/person/${person.id}`}>About</Link> {/* Placeholder - URL should be same as mentioned in Route. */}
                    </div>
                )
            })}
        </div>
    )
}

export default People
