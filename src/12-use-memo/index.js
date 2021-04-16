import React, { useState, useEffect, useMemo, useCallback } from 'react'
import {useFetch} from "./../9-custom-hooks/useFetchExample"
import Product from "./Product"

const url = "https://course-api.com/javascript-store-products"

const Index = () => {
    const { products } = useFetch(url)
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Count: {count}</h1>
            <button className="btn" onClick={() => setCount(count + 1)}>Click me</button>
            <ProductsList products={products} />
        </>
    )
}

const ProductsList = React.memo(({products}) => {
    console.log("product list re-rendered.....");
    return (
        <section className="products">
            {products.map(product => {
                return <Product key={product.id} fields={product.fields} />
            })}
        </section>
    )
})

export default Index


// React.memo method will stop the re-rendering of current and children-components again and again if the same arguement is passed multiple times.
// In this case the value of products is same everytime, hence not re-rendering using memo.
