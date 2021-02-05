import React, { useState, useEffect } from 'react'

const ShowHide = () => {
    const [show, setShow] = useState(false)

    return (
        <>
            <button className="btn" onClick={() => setShow(!show)}>Toggle</button>
            {show && <Item />}
        </>
    )
}

const Item = () => {
    const [size, setSize] = useState(window.innerWidth);
    const checkSize = () => {
        setSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", checkSize)
        // Clean up event listener from the "Event Listeners list -> check in console"; 
        // otherwise it will add up the specified event listener to the list every time you toggle
        return () => {
            window.removeEventListener("resize", checkSize)
        }
    }, [])

    return (
        <div style={{ marginTop: "2rem" }}>
            <h1>window</h1>
            <h2>size: {size} px</h2>
        </div>
    )
}

export default ShowHide
