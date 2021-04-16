import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { useFetch } from "./../9-custom-hooks/useFetchExample"
import Product from "./Product"

const url = "https://course-api.com/javascript-store-products"

const Index = () => {
    const { products } = useFetch(url)
    const [count, setCount] = useState(0)
    const [cart, setCart] = useState(0)

    const addToCart = useCallback(() => { //gets recreated from scratch on every re-render
        setCart(cart + 1)
    }, [cart]) // putting cart as input is neccessary

    return (
        <>
            <h1>Count: {count}</h1>
            <button className="btn" onClick={() => setCount(count + 1)}>Click me</button>
            <h2 style={{ marginTop: '3rem' }}>Cart: {cart}</h2>
            <ProductsList products={products} addToCart={addToCart} />
        </>
    )
}

const ProductsList = React.memo(({ products, addToCart }) => {
    console.log("product list re-rendered.....");
    return (
        <section className="products">
            {products.map(product => {
                return <Product key={product.id} fields={product.fields} addToCart={addToCart} />
            })}
        </section>
    )
})

export default Index


// React.memo method will stop the re-rendering of current and children-components again and again if the same arguement (props) is passed multiple times.
// In this case the value of products is same everytime, hence not re-rendering using memo.
// React.memo is not able to work on the Functions passed as arguements because every time we re-render, the function is newly created again.
// Solution is to use useCallback() which checks if the value of a function has changed or not.
// useMemo looks for change in values as compared to React.memo() that looks for change in props.
