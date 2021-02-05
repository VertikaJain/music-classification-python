import React, { useState, useEffect } from 'react'

const url = "https://api.github.com/users/mojombo"

const MultipleReturn = () => {
    const [isLoading, setIsLoading] = useState(true) // set to false once user data is loaded
    const [isError, setIsError] = useState(false) // set to true in case of any error
    const [user, setUser] = useState("default user")

    useEffect(() => {
        fetch(url)
            .then(result => {
                if (result.status >= 200 && result.status < 300)
                    return result.json()
                setIsLoading(false)
                setIsError(true)
                return
            })
            .then(userData => {
                setIsLoading(false)
                setUser(userData.login)
            })
            .catch(error => console.log(error))
    }, [])

    if (isLoading)
        return (<div>
            <h2>Loading...</h2>
        </div>
        )
    if (isError)
        return (<div>
            <h2>Error...</h2>
        </div>
        )
    return (
        <div>
            <h2>{user}</h2>
        </div>
    )
}

export default MultipleReturn
