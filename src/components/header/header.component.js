import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";


const Header = ({currentUser})=>{
    return(
<div className="page-header">
        <nav className="navbar  navbar-expand-md bg-white navbar-light" id="page-navigation">
            <div className="container">
              
                <Link to="/" className="navbar-brand">
                    <img src="assets/img/logo/shopee-logo.png" alt="" />
                </Link>

            
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarcollapse">
         
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to='/shop' className="nav-link" >Shop</Link>
                        </li>
                
                {currentUser==null?
                        <li className="nav-item">
                            <Link to='/sign-in' className="nav-link">Sign-in</Link>
                        </li>
                        : null
                        }
                        { currentUser !=null?
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="avatar-header"><img alt="" src="assets/img/logo/avatar.jpg"/></div> {currentUser?.displayName}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="javascript:void(0)" onClick={()=>auth.signOut()}>Logout</a>
                            </div>
                          </li>
                          :null}
                        <li className="nav-item dropdown">
                            <a href="javascript:void(0)" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-shopping-basket"></i> <span className="badge badge-primary">5</span>
                            </a>
                            <div className="dropdown-menu shopping-cart">
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
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </div>
    );
}

export default Header;