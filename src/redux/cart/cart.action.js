import { CART_ACTION_TYPES } from "./cart.actiontypes";

export const toggleCartDropdown=()=>({
    type:CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN
})

export const addItemToCart=(item)=>({
    type:CART_ACTION_TYPES.ADD_ITEM_TO_CART,
    payload:item
})