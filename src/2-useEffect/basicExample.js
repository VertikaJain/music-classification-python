import React, { useState, useEffect } from 'react'

const BasicExample = () => {
    const [counter, setCounter] = useState(0);
    // The Effect Hook lets you perform side effects in function components i.e. it runs after every re-render by default.
    // You cannot place hooks in the conditional statements.

    useEffect(() => {
        console.log("in use effect...");
        if (counter > 0)
            document.title = `New Message(${counter})`
    }, [counter]) // dependency on "counter" i.e. if counter changes then it(useEffect) will run.

    // You can have multiple useEffects
    useEffect(() => {
        console.log("hello world!");
    }, []) // empty array means that it(useEffect) will run only on the initial render.

    return (
        <>
            <h2>{counter}</h2>
            <button className="btn" onClick={() => setCounter(counter + 1)}>click</button>
        </>
    )
}

export default BasicExample
