import React from 'react'
import Modal from '../UI/Modal';
import styles from "./cart.module.css";
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
const Cart = (props) => {
    const {onShowCart}=props;
    
        const cartCtx=useContext(CartContext);

    const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems=cartCtx.items.length>0;
    const cartITems=<ul className={styles["cart-items"]} >
        { cartCtx.items.map((item)=>
         <li key={item.id}>{item.name} </li>)}
        </ul>;
  return (
    <Modal onClose={onShowCart} >
{cartITems}
<div className={styles.total}>
    <span>Total Amount</span>
    <span>{totalAmount} </span>
    </div>       
    <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onShowCart} >Close</button>
     {hasItems&&   <button className={styles.button} >Order</button>}
        
        </div> 

    </Modal> )

}

export default Cart