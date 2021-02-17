import { useState, useEffect } from 'react'

export const useFetch = (url) => { // Custom hook's name should start with "use"
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await fetch(url)
        const products = await response.json()
        setProducts(products)
        setLoading(false)
    }

    useEffect(() => {
        getProducts()
    }, [url]) // useEffect will run every time you change the url

    return { loading, products }
}

/* 
const UseFetchExample = () => {
    return (
        <div>

        </div>
    )
}

export default UseFetchExample */
