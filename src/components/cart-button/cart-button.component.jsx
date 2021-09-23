import React from "react";
import './cart-button.styles.scss';

const CartButton =() =>(
    <button  className="cart-button">
    <i className="fa fa-shopping-basket"></i> <span className="badge badge-primary">5</span>
</button>
)

export default CartButton;