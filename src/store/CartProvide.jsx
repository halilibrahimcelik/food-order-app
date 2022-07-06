import React,{useReducer} from 'react'
import CartContext from './cart-context'

const defaultCartState={
    items:[],
    totalAmount:0
}
const cartReducer=(state,action)=>{


    if(action.type==="ADD_FOOD"){
     
       const existingCartItemIndex=state.items.findIndex(item=>item.id===action.item.id);
       const existingCartItem=state.items[existingCartItemIndex];
       let updatedItems;
       if(existingCartItem){
           let updatedItem;
        updatedItem={
            ...existingCartItem,
            amount:existingCartItem.amount + action.item.amount,

        };
        updatedItems=[...state.items];
        updatedItems[existingCartItemIndex]=updatedItem;
       }else{

       updatedItems=state.items.concat(action.item);
       }
       const newTotalAmount=state.totalAmount + action.item.price * action.item.amount;
        return {
            items:updatedItems,
            totalAmount:newTotalAmount
        }
    } 
    if(action.type==="REMOVE"){
const existinngCartITemIndex=state.items.findIndex(item=>item.id===action.id);
const existingItem=state.items[existinngCartITemIndex];
const updatedTotalAmount=state.totalAmount - existingItem.price;
let updatedItems;
//!if this is the last item we want to remove from the cart
if(existingItem.amount===1){
updatedItems=state.items.filter(item=>item.id!==action.id);
}else{
const updatedItem={...existingItem,amount:existingItem.amount -1};
updatedItems=[...state.items];
updatedItems[existinngCartITemIndex]=updatedItem;
}

return{
    items:updatedItems,
    totalAmount:updatedTotalAmount
}
    }
    return  defaultCartState;
}
const CartProvide = (props) => {
    const[cartState,dispatchCartAction] =useReducer(cartReducer,defaultCartState);

    const addItemToCartHandler=(item)=>{
        dispatchCartAction({type:"ADD_FOOD",item:item})
    };
    const removeItemFromCartHandler=id=>{
        dispatchCartAction({type:"REMOVE", id:id})
    };
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
}

export default CartProvide