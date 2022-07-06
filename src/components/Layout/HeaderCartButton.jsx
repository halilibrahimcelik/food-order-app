import React,{useContext,useEffect,useState} from 'react'

import styles from "./headerCartButton.module.css";
import {FaShoppingCart} from "react-icons/fa"
import CartContext from '../../store/cart-context';
const HeaderCartButton = (props) => {
  const [isAnimated,setAnimated]=useState(false);
  const {onShowCart}=props;
  const cartCtx=useContext(CartContext);
  const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+ item.amount
  },0);//!this fun reduce array into single number
  
  //!Animation initiated everytime we add sth to cart
  const {items}=cartCtx;
  useEffect(() => {
    if(items.length===0){
      return
    }
    setAnimated(true);
  
    const timer=setTimeout(()=>{
      setAnimated(false);
    },300);
    return ()=>{
      //!memory leakage prevented
      clearTimeout(timer)
    }
  }, [items])
  
  const btnClasses=`${styles.button} ${isAnimated&& styles.bump}`
  return (
    <button className={btnClasses} onClick={onShowCart} >
        <span className={styles.icon} > <FaShoppingCart/> </span>
        <span>Your Cart </span>
        <span className={styles.badge} > {numberOfCartItems} </span>
    </button>
  )
}

export default HeaderCartButton