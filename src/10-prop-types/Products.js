import React from "react"
import PropTypes from 'prop-types'

const Product = ({ name, image, price }) => {
    console.log(name, image, price);
    const defaultImage = "https://images-na.ssl-images-amazon.com/images/I/71vkir3wegL._SL1100_.jpg"
    const url = image && image.url
    return <article className="product">
        {/* // Will result into error if any of these is undefined. Therefore we use proptypes. 
        // either use short circuit operator or set default props */}
        <img src={image && image.url || defaultImage} alt={name || "default name"} />
        <h4>{name || "default name"}</h4>
        <h5>${price || 3.77}</h5>
    </article>
}

// Type checking -> validation.
Product.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

// Creating default props
/* Product.defaultProps = {
    name: "default name",
    price: 3.7,
    image: "https://images-na.ssl-images-amazon.com/images/I/71vkir3wegL._SL1100_.jpg"
} */

export default Product;