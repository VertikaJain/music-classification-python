import React from 'react'
import { useFetch } from "./useFetchExample"

const url = "https://course-api.com/javascript-store-products"

const FetchExample = () => {
    const { loading, products } = useFetch(url)
    return (
        <div>
            <h2>{loading ? "loading..." : products.map(product => {
                return <p key={product.id}>{product.fields.company}</p>
            })}</h2>
        </div>
    )
}

export default FetchExample
