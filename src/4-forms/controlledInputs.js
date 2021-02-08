import React, { useState } from 'react'

const ControlledInputs = () => {

    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() // to prevent the page to reload by default on submit event.
        console.log(firstName,email);
    }

    return (
        <>
            <article>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName">Name: </label>
                        {/* The value property is important as it references to the state value. */}
                        {/* The onChange() method is important as it changes the state values. */}
                        <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email: </label>
                        <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <button type="submit">Add Employee</button>
                </form>
            </article>
        </>
    )
}

export default ControlledInputs
