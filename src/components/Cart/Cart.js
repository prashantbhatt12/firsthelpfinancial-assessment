import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  // const cartItems = (
  //   <ul className={classes["cart-items"]}>
  //     {[{ id: "c1", name: "AC/DC Concert", quantity: 2, amount: "$20" }].map(
  //       (item) => (
  //         <li key={item.id}>{item.name}</li>
  //       )
  //     )}
  //   </ul>
  // );
  const redirectToCheckout = () => {
    let path = `checkout`;
    props.onClose();
    navigate(path);
  };
  const cartItemAddedHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddedHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {/* {hasItems && <button className={classes.button}>Purchase</button>} */}
        {hasItems && (
          <button className={classes.button} onClick={redirectToCheckout}>
            Purchase
          </button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
