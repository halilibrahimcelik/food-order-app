import React from 'react'
import styles from "./cart.module.css";
const Cart = () => {
    const cartITems=<ul className={styles["cart-items"]} >{[{id:"c1", name:"kebap", amount:2,price:12.99}].map((item)=> <li>{item.name} </li>)}</ul>;
  return (
    <div>
{cartITems}
<div className={styles.total}>
    <span>Total Amount</span>
    <span>35.32</span>
    </div>       
    <div className={styles.actions}>
        <button className={styles["button--alt"]} >Close</button>
        <button className={styles.button} >Order</button>
        
        </div> 

    </div> )

}

export default Cart