import React, { useState, useEffect } from 'react'

const BasicExample = () => {
    const [counter, setCounter] = useState(0);
    // The Effect Hook lets you perform side effects in function components i.e. it runs after every re-render by default.
    // You cannot place hooks in the conditional statements.

    useEffect(() => {
        if (counter > 0)
            document.title = `New Message(${counter})`
    })

    return (
        <>
            <h2>{counter}</h2>
            <button className="btn" onClick={() => setCounter(counter + 1)}>click</button>
        </>
    )
}

export default BasicExample
