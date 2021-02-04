import React from 'react'

const CounterExample = () => {
    const [count, setCount] = React.useState(0)

    const addCount = () => {
        setCount(count + 1)
    }
    const subtractCount = () => {
        setCount(count - 1)
    }

    // Complex counter example using setTimeOut
    const complexCounter = () => {
        setTimeout(() => {
            // setCount(count + 1) // updates from the old value of count
            setCount((prevCount) => { // updates from the previously/recently updated value
                return prevCount + 1
            })
        }, 2000)
    }

    return (
        <>
            <h2>Simple Counter Example</h2>
            <h1>{count}</h1>
            <button className="btn" onClick={addCount}>ADD</button>
            <button className="btn" onClick={() => setCount(0)}>RESET</button> {/* Inline function example */}
            <button className="btn" onClick={subtractCount}>SUBTRACT</button>
            <h2>Complex Counter Example</h2>
            <h1>{count}</h1>
            <button className="btn" onClick={complexCounter}>ADD LATER</button>
        </>
    )
}

export default CounterExample
