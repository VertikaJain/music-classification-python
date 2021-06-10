import React, { useState } from 'react'
import List from "./List"
import Alert from "./Alert"

const App = () => {
    const [name, setName] = useState('');
    const [alert, setAlert] = useState({ show: false, msg: "", type: "" })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section className='section-center'>
            <form className='grocery-form' onSubmit={handleSubmit}>


                <h3>grocery bud</h3>
                <div className='form-control'>
                    <input
                        type='text'
                        className='grocery'
                        placeholder='e.g. eggs'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type='submit' className='submit-btn'>
                        Submit
                    </button>
                </div>
            </form>

        </section>
    )
}

export default App
