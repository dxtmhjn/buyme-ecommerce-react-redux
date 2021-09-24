import React from "react";
import './product-card.styles.scss';
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.action";



const ProductCard = ({item, addItem}) => {
   const {name, price, imageUrl, id}=item
   return( <div className="product-card">
        <div className="image-box" style={{backgroundImage:`url(${imageUrl})`}}></div>
        <button onClick={()=>addItem(item)}>Add to Cart</button>
        <div className="product-details">
            <div className="name">{name}</div>
            <div className="price">${price}</div>
        </div>
    </div>
   )
}

const mapDispatchToProps = dispatch =>(
    {
        addItem:item=>dispatch(addItemToCart(item))
    }
)


export default connect(null,mapDispatchToProps)(ProductCard);