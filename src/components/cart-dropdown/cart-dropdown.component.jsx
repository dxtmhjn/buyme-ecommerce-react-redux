import React from 'react';
import './cart-dropdown.styles.scss';

const CartDropdown =()=>((
    <div className="shopping-cart-dropdown shopping-cart">
    <ul>
        <li>
            <div className="drop-title">Your Cart</div>
        </li>
        <li>
            <div className="shopping-cart-list">
                <div className="media">
                    <img alt="" className="d-flex mr-3" src="assets/img/logo/avatar.jpg" width="60"/>
                    <div className="media-body">
                        <h5><a href="javascript:void(0)">Carrot</a></h5>
                        <p className="price">
                            <span className="discount text-muted">Rp. 700.000</span>
                            <span>Rp. 100.000</span>
                        </p>
                        <p className="text-muted">Qty: 1</p>
                    </div>
                </div>
       
         
            </div>
        </li>
        <li>
            <div className="drop-title d-flex justify-content-between">
                <span>Total:</span>
                <span className="text-primary"><strong>Rp. 2000.000</strong></span>
            </div>
        </li>
        <li className="d-flex justify-content-between pl-3 pr-3 pt-3">
            <a href="cart.html" className="btn btn-secondary">View Cart</a>
            <a href="checkout.html" className="btn btn-primary">Checkout</a>
        </li>
    </ul>
</div>
))

export default CartDropdown;