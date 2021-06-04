import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(',')
    const hexStr = `#${hexColor}`
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 2000);
        return () => { clearTimeout(timeout) }
    }, [alert])

    function copyVal(hexStr) {
        setAlert(true)
        navigator.clipboard.writeText(hexStr)
    }

    return <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => copyVal(hexStr)}>
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hexStr}</p>
        {alert && <p className="alert">Copied to Clipboard!</p>}
    </article>
}


export default SingleColor
