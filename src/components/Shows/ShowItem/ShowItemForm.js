import { useRef, useState } from "react";
import classes from "./ShowItemForm.module.css";
const ShowItemFrom = (props) => {
  const quantityInputRef = useRef();
  const dateInputRef = useRef();
  const submitHandler = (event) =>{
    event.preventDefault();
    const enteredQuantity = quantityInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredQuantityNumber = +enteredQuantity;
    if(enteredQuantity.trim().length === 0 || enteredQuantityNumber<1 || enteredQuantity > 5){
      return;
    }
    console.log("Entered amount:" + enteredQuantityNumber);
    console.log("Entered date:" + enteredDate);
    props.onAddToCart(enteredQuantityNumber, enteredDate);
  }
  return (
    <form className={classes.form} onSubmit ={submitHandler}>
      <div className={classes.input}>
        <input
          id="quantity"
          type="number"
          placeholder="Quantity"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
          ref = {quantityInputRef}
          required = {true}
        ></input>
      </div>
      <div className={classes.input}>
        <input id="date" type="date" ref={dateInputRef} required={true}></input>
      </div>
      <button type="submit">+ Add</button>
    </form>
  );
};
export default ShowItemFrom;
