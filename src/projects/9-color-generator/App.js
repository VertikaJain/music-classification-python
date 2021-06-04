import React, { useState } from 'react'
import SingleColor from "./SingleColor"
import Values from "values.js"

const App = () => {
    const [color, setColor] = useState('#4d0099')
    const [error, setError] = useState(false)
    const [list, setList] = useState(new Values(color).all(7))

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            let colors = new Values(color).all(7)
            setError(false)
            setList(colors)
        } catch (error) {
            setError(error)
        }
    }

    return <>
        <section className='container'>
            <h3>color generator</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="#4d0099"
                    className={error ? 'error' : null}
                />
                <button className='btn' type='submit'>
                    submit
          </button>
            </form>
        </section>
        <section className='colors'>
            {list.map((color, index) => {
                return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
            })}
        </section>
    </>
}

export default App
