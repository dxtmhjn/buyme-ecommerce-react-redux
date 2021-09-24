export const managerQuantityInCart =(cartItems,newItem)=>{
   const checkExistingItem=cartItems.find(item=>item.id===newItem.id)
   if(checkExistingItem){
  return cartItems.map(item=>item.id===newItem.id?{...item,quantity:item.quantity+1}:item)
   }
   return [...cartItems, {...newItem,quantity:1}]
}