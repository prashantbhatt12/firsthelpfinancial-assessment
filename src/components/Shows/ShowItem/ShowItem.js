import classes from "./ShowItem.module.css";
import ShowItemForm from "./ShowItemForm";
// import { show1 } from "../../Images/Images";
const ShowItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
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
        <ShowItemForm></ShowItemForm>
      </div>
    </li>
  );
};
export default ShowItem;
