import React, { useRef, useEffect } from 'react'

// useRef does not trigger re-render

const UseRefBasic = () => {
    const refContainer = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value);
        console.log(refContainer.current.value);

    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer} />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default UseRefBasic
