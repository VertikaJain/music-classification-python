import React from 'react'

const ObjectExample = () => {
    const [person, setPerson] = React.useState({
        name: "abc",
        age: 24,
        message: "random secret"
    })

    const changeMessage = () => {
        setPerson({ ...person, message: "hey there!" }) // use spread operator so that other key-value pairs of the obj remain same.
    }

    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className="btn" onClick={changeMessage}>Change Message</button>
        </>
    )
}

export default ObjectExample
