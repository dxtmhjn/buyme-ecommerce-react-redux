import { CART_ACTION_TYPES } from "./cart.actiontypes";
import { managerQuantityInCart } from "./cart.utils";

const INITIAL_STATE = {
    cartItems: [],
    cartDropdownVisibility: false
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN:
            return {
                ...state, cartDropdownVisibility: !state.cartDropdownVisibility
            }
        case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
            return {
                ...state, cartItems: managerQuantityInCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;