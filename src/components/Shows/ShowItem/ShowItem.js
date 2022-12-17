import classes from "./ShowItem.module.css";
import ShowItemForm from "./ShowItemForm";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";
// import { show1 } from "../../Images/Images";
const ShowItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler  = (quantity,date) =>{
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      quantity:quantity,
      price:props.price,
      date:date
    })
  }
  return (
    <li className={classes.show}>
      {/* <div>
        <img
          src={show1}
          alt=""
          loading="lazy"
          resp
          style={{ height: "100px", width: "100px" }}
        />
      </div> */}
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ShowItemForm onAddToCart={addToCartHandler}></ShowItemForm>
      </div>
    </li>
  );
};
export default ShowItem;
