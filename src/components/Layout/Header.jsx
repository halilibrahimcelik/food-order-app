import React from 'react'

import image from "../../assets/meals.jpg";
import styles from "./header.module.css"
const Header = (props) => {
  return (
 <React.Fragment>
    <header  className={styles.header}>
        <h1>Order-Meals</h1>
        <button>Card</button>
    </header>
    <div className={styles["main-image"]}> 
        <img src={image} alt="A table full of dishes" />
    </div>
 </React.Fragment>
  )
}

export default Header