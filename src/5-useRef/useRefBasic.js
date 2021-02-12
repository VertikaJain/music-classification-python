import React, { useRef, useEffect } from 'react'

// useRef does not trigger re-render
// UseCase: target DOM elements when required

const UseRefBasic = () => {
    const refContainer = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(refContainer.current); // prints the DOM element
        console.log(refContainer.current.value); // prints the DOM element's value that the user has entered.
        refContainer.current.focus() // helps to focus/target on the specified DOM element
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer} />
                    <button type="submit" >Focus</button>
                </div>
            </form>
        </>
    )
}

export default UseRefBasic
