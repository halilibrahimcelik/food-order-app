import React,{useContext} from 'react'

import styles from "./headerCartButton.module.css";
import {FaShoppingCart} from "react-icons/fa"
import CartContext from '../../store/cart-context';
const HeaderCartButton = (props) => {
  const {onShowCart}=props;
  const cartCtx=useContext(CartContext);
  const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+ item.amount
  },0);//!this fun reduce array into single number
  
  return (
    <button className={styles.button} onClick={onShowCart} >
        <span className={styles.icon} > <FaShoppingCart/> </span>
        <span>Your Cart </span>
        <span className={styles.badge} > {numberOfCartItems} </span>
    </button>
  )
}

export default HeaderCartButton