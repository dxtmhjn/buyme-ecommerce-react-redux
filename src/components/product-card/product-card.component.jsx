import React from "react";
import './product-card.styles.scss';

const ProductCard = ({name, price, imageUrl}) => (
    <div className="product-card">
        <div className="image-box" style={{backgroundImage:`url(${imageUrl})`}}></div>
        <button>Add to Cart</button>
        <div className="product-details">
            <div className="name">{name}</div>
            <div className="price">${price}</div>
        </div>
    </div>
)

export default ProductCard;