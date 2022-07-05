import React from 'react'

import image from "../../assets/meals.jpg";
import styles from "./header.module.css"
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  return (
 <React.Fragment>
    <header  className={styles.header}>
        <h1>Order-Meals</h1>
      <HeaderCartButton/>
    </header>
    <div className={styles["main-image"]}> 
        <img src={image} alt="A table full of dishes" />
    </div>
 </React.Fragment>
  )
}

export default Header