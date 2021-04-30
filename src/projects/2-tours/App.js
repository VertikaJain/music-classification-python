import React, { useEffect, useState } from 'react'
import Loading from "./Loading"
import Tours from "./Tours"

const url = 'https://course-api.com/react-tours-project'

const App = () => {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])

    const removeTour = (id) => {
        let newTours = tours.filter(tour => tour.id !== id)
        setTours(newTours)
    }

    const fetchTours = async () => {
        setLoading(true)
        try {
            const result = await (await fetch(url)).json()
            setTours(result)
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchTours()
    }, [])

    if (loading) {
        return <main>
            <Loading />
        </main>
    }
    else if (tours.length === 0) {
        return <main>
            <h2>No tours left</h2>
            <button className="btn" onClick={fetchTours}>Reload Tours</button>
        </main>
    }
    else
        return (
            <main>
                <Tours tours={tours} removeTour={removeTour} />
            </main>
        )
}

export default App
