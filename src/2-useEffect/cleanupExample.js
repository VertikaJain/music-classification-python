import React, { useState, useEffect } from 'react'

const CleanupExample = () => {
    const [size, setSize] = useState(window.innerWidth);
    console.log(size);

    const checkSize = () => {
        console.log("resizing.");
        setSize(window.innerWidth)
    }

    useEffect(() => {
        console.log("in use effect.");
        window.addEventListener("resize", checkSize)
        return () => {
            console.log("clean up.");
            window.removeEventListener("resize", checkSize)
        }
    })
    console.log("re-rendering.");
    return (
        <>
            <h1>Window Size</h1>
            <h2>{size} px</h2>
        </>
    )
}

export default CleanupExample
