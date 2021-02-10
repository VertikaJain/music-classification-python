import React, { useState } from 'react'

const MultipleInputs = () => {

    const [person, setPerson] = useState({ firstName: "", email: "", age: "" })
    const [employees, setEmployee] = useState([])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setPerson({ ...person, [name]: value }) // dynamic object properties, useful in the case of many inputs.
    }

    const handleClick = (e) => {
        e.preventDefault()
        if (person.firstName && person.email && person.age) {
            let newPerson = { ...person, id: new Date().getTime() }
            setEmployee([...employees, newPerson])
            setPerson({ firstName: "", email: "", age: "" }) // reset the textbox and state value to empty for new inputs.
        }
    }

    return (
        <article>
            <form className="form" onSubmit={handleChange}>
                <div className="form-control">
                    <label htmlFor="firstName">Name: </label>

                    <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" name="email" value={person.email} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="age">Age: </label>
                    <input type="text" id="age" name="age" value={person.age} onChange={handleChange} />
                </div>
                <button type="submit" onClick={handleClick} >Add Employee</button>
            </form>
            <h3>Employee updated List</h3>
            {employees.map(employee => {
                let { id, firstName, email, age } = employee
                return <div key={id} className="item">
                    <h4>{firstName}</h4>
                    <h4>{email}</h4>
                    <h4>{age}</h4>
                </div>
            })}
        </article>
    )
}

export default MultipleInputs
