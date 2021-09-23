const INITIAL_STATE = {
    cart: [],
    cartDropdownVisibility: false
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_CART_DROPDOWN':
            return {
                ...state, cartDropdownVisibility: !state.cartDropdownVisibility
            }
        default:
            return state;
    }
}

export default cartReducer;