import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"

const people = [
    { id: 1, name: 'john' },
    { id: 2, name: 'peter' },
    { id: 3, name: 'susan' },
    { id: 4, name: 'anna' },
]

const Person = () => {
    const [name, setName] = useState("default name")
    const { id } = useParams()

    useEffect(() => {
        // const person = people.find(person => person.id == id)
        setName(people.find(person => person.id === parseInt(id)).name)
    }, [])

    return (
        <div>
            <h1>{name}</h1>
            <Link to="/people" className="btn">Back to People</Link>
        </div>
    )
}

export default Person


// useParam() returns an object having the parameter and it's value passed from the URL