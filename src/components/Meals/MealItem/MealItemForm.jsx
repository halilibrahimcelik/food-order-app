import React, { useRef,useState } from 'react'
import styles from "./mealItemForm.module.css";
import Input from '../../UI/Input';
const MealItemForm = (props) => {
const amountInputRef=useRef();
const [isValid,setValid]=useState(true);
  const submiHandler=e=>{
    e.preventDefault();

    const enteredAmount=amountInputRef.current.value;
    const enteredAmountNumber=+enteredAmount;
    if(enteredAmount.trim().length===0 || enteredAmountNumber<1|| enteredAmountNumber >5){

        setValid(false);
      return;
    }
props.onAddToCart(enteredAmountNumber);
  }
  return (
    <form className={styles.form}  onSubmit={e=>submiHandler(e)} >
      <Input  ref={amountInputRef} label="Amount" input={{
        id:"amount",
        type:"number",
        min:"1",
        max:"5",
        step:"1",
        defaultValue:""
      }}  />
    <button>+ ADD</button>
    {!isValid&& <p>Please Enter  a Valid Amount!</p> }
    </form>
  )
}

export default MealItemForm