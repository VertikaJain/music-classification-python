import React from 'react'
import {Link} from "react-router-dom"

const Error = () => {
    return (
        <div>
            <h1>Error Page : page not found</h1>
            <Link to="/" className="btn">Back to Home Page</Link>
        </div>
    )
}

export default Error
