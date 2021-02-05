import React, { useEffect, useState } from 'react'

const url = "https://api.github.com/users"

const FetchDataExample = () => {
    const [users, setusers] = useState([])
    
    /* const getUsers = async () => {
        let response = await fetch(url) 
        let users = await response.json()
        setusers(users)
    } */
    
    // useEffect does not return a promise, therefore you cannot use async-await here; 
    // however you can make another fn. as async and call it from useEffect.
    useEffect(() => {
        let getUsers = async () => {
            let response = await fetch(url) // since fetch() returns a promise, use async await
            let users = await response.json() // json() returns a promise
            setusers(users) // update users states
        }
        getUsers()

    }, []) // empty array dependency so that useEffect runs only once.
    return (
        <>
            <h3>users</h3>
            <ul className="users">
                {users.map(user => {
                    let { id, avatar_url, login, html_url } = user
                    return (
                        <li key={id}>
                            <img src={avatar_url} alt={login}></img>
                            <a href={html_url}>{login}</a>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default FetchDataExample
