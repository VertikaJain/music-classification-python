import React from 'react'

const CounterExample = () => {
    const [count, setCount] = React.useState(0)

    const addCount = () => {
        setCount(count + 1)
    }
    const subtractCount = () => {
        setCount(count - 1)
    }
    
    return (
        <>
            <h2>Simple Counter Example</h2>
            <h1>{count}</h1>
            <button className="btn" onClick={addCount}>ADD</button>
            <button className="btn" onClick={()=> setCount(0)}>RESET</button> {/* Inline function example */}
            <button className="btn" onClick={subtractCount}>SUBTRACT</button>
        </>
    )
}

export default CounterExample
