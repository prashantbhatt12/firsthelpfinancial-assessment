import React from "react";
import classes from "./AddCardForm.module.css";
const AddCardForm = () => {
  return (
    <form className={classes["add-card"]}>
      <div className="row">
        <p>
          <b>
            <span className="green">Add Card</span>
          </b>
        </p>
        <div className="icons">
          <img src="https://img.icons8.com/color/48/000000/visa.png" alt="" />
          <img
            src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
            alt=""
          />
          <img
            src="https://img.icons8.com/color/48/000000/maestro.png"
            alt=""
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <input
            type="number"
            className="form-control"
            placeholder="Card Number"
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <input
            type="date"
            className="form-control"
            placeholder="Expiry Date"
          />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="CVV" />
        </div>
      </div>
    </form>
  );
};

export default AddCardForm;
