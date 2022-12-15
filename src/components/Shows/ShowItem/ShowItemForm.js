import classes from "./ShowItemForm.module.css";
const MealItemFrom = () => {
  return (
    <form className={classes.form}>
      <div className={classes.input}>
        <input
          id="quantity"
          type="number"
          placeholder="Quantity"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        ></input>
      </div>
      <div className={classes.input}>
        <input id="date" type="date"></input>
      </div>
      <button>+ Add</button>
    </form>
  );
};
export default MealItemFrom;
