import React, { useState } from 'react'

const ShortCircuit = () => {
    const [text, setText] = useState('') // '' is falsy in JS
    const [isError, setIsError] = useState(false)

    return (
        <>
            {/* {if(){console.log()}}  => You cannot put conditional while returning in React. */}
            <h1>{text || "vertika Jain"}</h1>
            <button className="btn" onClick={() => setIsError(!isError)}>Toggle Error</button>
            {isError && <h1>Error</h1>}

            {/* Ternary operator example */}
            {isError ? <p>there is an error</p> : <h2>there is no error</h2>}
        </>
    )
}

export default ShortCircuit
