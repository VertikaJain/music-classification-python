import React, { useState } from 'react'

const ShortCircuit = () => {
    const [text, setText] = useState('') // '' is falsy in JS
    return (
        <>
            {/* {if(){console.log()}}  => You cannot put conditional while returning in React. */}
            <h1>{text || "vertika Jain"}</h1>
            {text && <h1>hello world</h1>}
            {!text && <h1>hello world</h1>}
        </>
    )
}

export default ShortCircuit
