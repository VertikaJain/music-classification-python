import React from 'react'
import Product from "./Products"
import { useFetch } from "./../9-custom-hooks/useFetchExample"
const url = "https://course-api.com/react-prop-types-example"

const Index = () => {
    const { products } = useFetch(url)
    return (
        <div>
            <h2>Products</h2>
            <section className="products">
                {products.map(product => {
                    return <Product key={product.id} {...product} />
                })}
            </section>
        </div>
    )
}

export default Index
