import React,{useContext} from 'react'
import styles from "./mealItem.module.css";
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
const MealItem = (props) => {
const CartCtx= useContext(CartContext)
    const price=`$${props.price.toFixed(2)} `;

    const addToCartHandler=(amount)=>{
CartCtx.addItem({id:props.id,
name:`${props.name} delicous`,
amount:amount,
price:props.price
})
    }
  return (
    <li className={styles.meal} >
        <div>
            <h3>{props.name} </h3>
            <div className={styles.description} >{props.description} </div>
            <div className={styles.price}>{price} </div>
        </div>
        <div>
           <MealItemForm onAddToCart={addToCartHandler} />
        </div>
    </li>
  )
}

export default MealItem