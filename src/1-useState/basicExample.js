import React, { useState } from 'react'

const BasicExample = () => {
    const [title, setTitle] = useState("initial heading")
    let handleClick = () => {
        if (title === "initial heading")
            setTitle("New Title")
        else
            setTitle("initial heading")
    };
    return (
        <>
            <h2>{title}</h2>
            <button type="button" className="btn" onClick={handleClick}>Change Title</button>
        </>
    )
}

export default BasicExample
