import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import {connect} from 'react-redux';
import CartButton from "../cart-button/cart-button.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser,cartDropdownState})=>{

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
                        <li className="nav-item">
                           <CartButton/>
                           {
                           
                               cartDropdownState? <CartDropdown/>:null
                           }
                          
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </div>
    );
}

const mapStateToProps=(state)=>({
currentUser:state.user.currentUser,
cartDropdownState:state.cart.cartDropdownVisibility
})

export default connect(mapStateToProps)(Header);