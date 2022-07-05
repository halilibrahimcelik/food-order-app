import React from 'react'

import styles from "./headerCartButton.module.css";
import {FaShoppingCart} from "react-icons/fa"
const HeaderCartButton = () => {
  return (
    <button className={styles.button}>
        <span className={styles.icon} > <FaShoppingCart/> </span>
        <span>Your Cart </span>
        <span className={styles.badge} >3</span>
    </button>
  )
}

export default HeaderCartButton