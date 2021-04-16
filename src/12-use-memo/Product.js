import React from 'react'

const Product = ({ fields, addToCart }) => {
    console.log("product component re-rendering......");
    const { name, price } = fields
    const image = fields.image[0].url

    return (
        <article className="product">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>₹{price}</p>
            <button className="btn" onClick={addToCart}>Add to Cart</button>
        </article>
    )
}

export default Product
