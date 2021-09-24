import React from 'react';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';

const CartDropdown =({cartItems})=>((
    <div className="shopping-cart-dropdown shopping-cart">
    <ul>
        <li>
            <div className="drop-title">Your Cart</div>
        </li>
        <li>
            <div className="shopping-cart-list">
            {cartItems.map(item=>(
                <div className="media" key={item.key}>
                    <img alt="" className="d-flex mr-3" src={`${item.imageUrl}`} width="60"/>
                    <div className="media-body">
                        <h5>{item.name}</h5>
                        <p className="price">
                            <span className="discount text-muted">Rs. {item.price}</span>
                            <span>Rs.{item.price*item.quantity}</span>
                        </p>
                        <p className="text-muted">Qty: {item.quantity}</p>
                    </div>
                </div>
            )
            )
        }
         
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

const mapStateToProps = (state)=>({
    cartItems:state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);